import { useEffect, useState } from "react";
import bannerImage from '../assets/images/banner.jpg';
import Countdown from "react-countdown";
import {  CircularProgress, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import * as anchor from "@project-serum/anchor";

import { LAMPORTS_PER_SOL } from "@solana/web3.js";

import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";

import {
  CandyMachine,
  awaitTransactionSignatureConfirmation,
  getCandyMachineState,
  mintOneToken,
  shortenAddress,
} from "./candy-machine";

export interface HomeProps {
  candyMachineId: anchor.web3.PublicKey;
  config: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  startDate: number;
  treasury: anchor.web3.PublicKey;
  txTimeout: number;
}

const Banner = (props: HomeProps) => {
  const [balance, setBalance] = useState<number>();
  const [isActive, setIsActive] = useState(false); // true when countdown completes
  const [isSoldOut, setIsSoldOut] = useState(false); // true when items remaining is zero
  const [isMinting, setIsMinting] = useState(false); // true when user got to press MINT

  const [itemsAvailable, setItemsAvailable] = useState(0);
  const [itemsRedeemed, setItemsRedeemed] = useState(0);
  const [itemsRemaining, setItemsRemaining] = useState(0);

  const [alertState, setAlertState] = useState<AlertState>({
    open: false,
    message: "",
    severity: undefined,
  });

  const [startDate, setStartDate] = useState(new Date(props.startDate));

  const wallet = useAnchorWallet();
  const [candyMachine, setCandyMachine] = useState<CandyMachine>();

  const refreshCandyMachineState = () => {
    (async () => {
      if (!wallet) return;

      const {
        candyMachine,
        goLiveDate,
        itemsAvailable,
        itemsRemaining,
        itemsRedeemed,
      } = await getCandyMachineState(
        wallet as anchor.Wallet,
        props.candyMachineId,
        props.connection
      );

      setItemsAvailable(itemsAvailable);
      setItemsRemaining(itemsRemaining);
      setItemsRedeemed(itemsRedeemed);

      setIsSoldOut(itemsRemaining === 0);
      setStartDate(goLiveDate);
      setCandyMachine(candyMachine);
    })();
  };

  const onMint = async () => {
    try {
      setIsMinting(true);
      if (wallet && candyMachine?.program) {
        const mintTxId = await mintOneToken(
          candyMachine,
          props.config,
          wallet.publicKey,
          props.treasury
        );

        const status = await awaitTransactionSignatureConfirmation(
          mintTxId,
          props.txTimeout,
          props.connection,
          "singleGossip",
          false
        );

        if (!status?.err) {
          setAlertState({
            open: true,
            message: "Congratulations! Mint succeeded!",
            severity: "success",
          });
        } else {
          setAlertState({
            open: true,
            message: "Mint failed! Please try again!",
            severity: "error",
          });
        }
      }
    } catch (error: any) {
      // TODO: blech:
      let message = error.msg || "Minting failed! Please try again!";
      if (!error.msg) {
        if (error.message.indexOf("0x138")) {
        } else if (error.message.indexOf("0x137")) {
          message = `SOLD OUT!`;
        } else if (error.message.indexOf("0x135")) {
          message = `Insufficient funds to mint. Please fund your wallet.`;
        }
      } else {
        if (error.code === 311) {
          message = `SOLD OUT!`;
          setIsSoldOut(true);
        } else if (error.code === 312) {
          message = `Minting period hasn't started yet.`;
        }
      }

      setAlertState({
        open: true,
        message,
        severity: "error",
      });
    } finally {
      if (wallet) {
        const balance = await props.connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
      setIsMinting(false);
      refreshCandyMachineState();
    }
  };

  useEffect(() => {
    (async () => {
      if (wallet) {
        const balance = await props.connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
    })();
  }, [wallet, props.connection]);

  useEffect(refreshCandyMachineState, [
    wallet,
    props.candyMachineId,
    props.connection,
  ]);
  return (
    <>
    
      <div className='banner h-[100vh] relative' style={{background: `url(${bannerImage})`, height: '100vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'top left'}}>
        <div className='container mx-auto' style={{maxWidth: '1140px', margin:'auto', height: '100%'}}>
          <div className='text-white w-96' style={{display: 'flex', flexDirection:'column', background: '#032452e3', maxWidth: '80%', margin: 'auto', justifyContent:'center', alignItems: 'center', gap: '2rem', fontWeight: 500, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '2rem 8rem', borderRadius: '.5rem ', zIndex: 999, }}>
          {wallet && (
        <p>Wallet {shortenAddress(wallet.publicKey.toBase58() || "")}</p>
      )}

      {wallet && <p>Balance: {(balance || 0).toLocaleString()} SOL</p>}

      {wallet && <p>Total Available: {itemsAvailable}</p>}

      {wallet && <p>Redeemed: {itemsRedeemed}</p>}

      {wallet && <p>Remaining: {itemsRemaining}</p>}

     
        {!wallet ? (
          <div >
          <WalletDialogButton className='connect lg:py-4 lg:px-12 py-4 px-8 rounded-sm hover:bg-[#b2b0f2] transition-all delay-100'
           
          >
            connect
          </WalletDialogButton>
        </div>
        ) : (
          <>
          <div className='mint__btn__wrapper  lg:py-4 lg:px-12 py-4 px-8 rounded-sm hover:bg-[#b2b0f2] transition-all delay-100' style={{background: "#7eaefb2f", borderRadius: '30px'}}>
              <button 
                className='btn mint__btn text-white font-medium'
                disabled={isSoldOut || isMinting || !isActive}
                onClick={onMint}
              >
                
         
            {isSoldOut ? (
              "SOLD OUT"
              ) : isActive ? (
                isMinting ? (
                  <CircularProgress />
                  ) : (
                    "MINT"
                    )
                    ) : (
                      <Countdown
                      date={startDate}
                      onMount={({ completed }) => completed && setIsActive(true)}
                      onComplete={() => setIsActive(true)}
                      renderer={renderCounter}
                      />
                      )}
                      </button>
                      </div>
              </>
        )}
  

      <Snackbar
        open={alertState.open}
        autoHideDuration={6000}
        onClose={() => setAlertState({ ...alertState, open: false })}
      >
        <Alert
          onClose={() => setAlertState({ ...alertState, open: false })}
          severity={alertState.severity}
        >
          {alertState.message}
        </Alert>
      </Snackbar>
            
          </div>
        </div>
      </div>
    </>
  );
};
interface AlertState {
  open: boolean;
  message: string;
  severity: "success" | "info" | "warning" | "error" | undefined;
}

const renderCounter = ({ days, hours, minutes, seconds, completed }: any) => {
  return (
    <div className='CountDown__timer px-4 md:px-0 flex gap-16 items-center justify-center py-12 text-white'>
      <div className='text-center'>
        <p className='CountDown__timer-main text-3xl lg:text-3xl font-medium mb-1'>
        {hours + (days || 0) * 24} hours, {minutes} minutes, {seconds} seconds
        </p>
        
      </div>
    </div>
  );
};

export default Banner;
