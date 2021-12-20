import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { connect } from '../redux/blockchain/blockchainActions';
import { fetchData } from '../redux/data/dataActions';

const Banner = () => {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: '',
    SCAN_LINK: '',
    NETWORK: {
      NAME: '',
      SYMBOL: '',
      ID: 0,
    },
    NFT_NAME: '',
    SYMBOL: '',
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: '',
    MARKETPLACE_LINK: '',
    SHOW_BACKGROUND: false,
  });

  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log('Cost: ', totalCostWei);
    console.log('Gas limit: ', totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(CONFIG.CONTRACT_ADDRESS, mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once('error', (err) => {
        console.log(err);
        setFeedback('Sorry, something went wrong please try again later.');
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 10) {
      newMintAmount = 10;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== '' && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch('/config/config.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, [blockchain.account]);
  return (
    <>
      <div className='banner h-[32rem] relative'>
        <div className='container mx-auto'>
          <div className='banner__inner flex flex-col gap-6 justify-center items-center h-96 lg:h-72 absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 w-4/5 lg:w-2/6 bg-[#c7ecff] mx-auto rounded-lg px-6'>
            <p className='text-center text-base  text-default'>
              {data.totalSupply} / {CONFIG.MAX_SUPPLY} 0.1 ETH each
            </p>
            {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
              <>
                <p className='font-bold text-default'>The sale has ended.</p>
                <p className='font-bold text-default'>
                  You can still find {CONFIG.NFT_NAME} on
                </p>

                <a
                  target='_blank'
                  rel='noreferrer'
                  href={CONFIG.MARKETPLACE_LINK}
                >
                  {CONFIG.MARKETPLACE}
                </a>
              </>
            ) : (
              <>
                {blockchain.account === '' ||
                blockchain.smartContract === null ? (
                  <>
                    <p className='text-default font-semibold'>
                      Connect to the {CONFIG.NETWORK.NAME} network
                    </p>
                    <div className='connect bg-[#7eaefb2f] lg:py-4 lg:px-12 py-4 px-8 rounded-sm hover:bg-[#b2b0f2] transition-all delay-100'>
                      <button
                        className='uppercase text-default'
                        onClick={(e) => {
                          e.preventDefault();
                          dispatch(connect());
                          getData();
                        }}
                      >
                        connect
                      </button>
                    </div>
                    {blockchain.errorMsg !== '' ? (
                      <>
                        <p className='err__msg text-center text-default'>
                          {blockchain.errorMsg}
                        </p>
                      </>
                    ) : null}
                  </>
                ) : (
                  <>
                    <p className='err__msg text-center text-default'>
                      {feedback}
                    </p>

                    <>
                      <div className='buy__wrapper flex gap-6'>
                        <div className='bg-[#7eaefb2f] px-4 py-0.5 rounded-sm text-default font-bold cursor-pointer'>
                          <button
                            className=''
                            disabled={claimingNft ? 1 : 0}
                            onClick={(e) => {
                              e.preventDefault();
                              decrementMintAmount();
                            }}
                          >
                            <span className='text-4xl'>-</span>
                          </button>
                        </div>

                        <p className='text-default font-bold text-xl border px-4 py-0.5 rounded-sm'>
                          {mintAmount}
                        </p>
                        <div className='bg-[#7eaefb2f] px-4 py-0.5 rounded-sm text-default font-bold cursor-pointer'>
                          <button
                            className=''
                            disabled={claimingNft ? 1 : 0}
                            onClick={(e) => {
                              e.preventDefault();
                              incrementMintAmount();
                            }}
                          >
                            <span className='text-2xl'>+</span>
                          </button>
                        </div>
                      </div>
                    </>
                    <>
                      <div>
                        <div className='mint__btn__wrapper bg-[#7eaefb2f] lg:py-4 lg:px-12 py-4 px-8 rounded-sm hover:bg-[#b2b0f2] transition-all delay-100'>
                          <button
                            className='btn mint__btn text-default'
                            disabled={claimingNft ? 1 : 0}
                            onClick={(e) => {
                              e.preventDefault();
                              claimNFTs();
                              getData();
                            }}
                          >
                            <span>{claimingNft ? 'BUSY' : 'MINT'}</span>
                          </button>
                        </div>
                      </div>
                    </>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
