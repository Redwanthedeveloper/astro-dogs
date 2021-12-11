import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { connect } from '../redux/blockchain/blockchainActions';
import { fetchData } from '../redux/data/dataActions';

// const truncate = (input, len) =>
//   input.length > len ? `${input.substring(0, len)}...` : input;
const Mint = ({ showModal }) => {
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
      <div className='mint' id='mint'>
        <div className='mint__wrapper'>
          <div className='mint__inner'>
            <div className='container'>
              <div className='right__col'>
                {/* <h3 className='title'>Mint buto head</h3> */}
                <h1 className='count'>
                  {data.totalSupply} / {CONFIG.MAX_SUPPLY}
                </h1>
                {/* <h3 className='sub__title'>0.1 eth per Buto head</h3> */}
                <div className='mint__description'>
                  {/* <p>Excluding gas fee </p> */}
                  <p>connect to ethereum network</p>
                </div>

                {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
                  <>
                    <p className='font-bold text-default'>
                      The sale has ended.
                    </p>
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
                        <div className='mint__btn__wrapper'>
                          <button
                            className='btn mint__btn'
                            onClick={(e) => {
                              e.preventDefault();
                              dispatch(connect());
                              getData();
                            }}
                          >
                            Connect
                          </button>
                        </div>
                        {blockchain.errorMsg !== '' ? (
                          <>
                            <p className='err__msg text-center'>
                              {blockchain.errorMsg}
                            </p>
                          </>
                        ) : null}
                      </>
                    ) : (
                      <>
                        <p className='err__msg text-center'>{feedback}</p>
                        <>
                          <div className='buy__wrapper'>
                            <div>
                              <button
                                className=''
                                disabled={claimingNft ? 1 : 0}
                                onClick={(e) => {
                                  e.preventDefault();
                                  decrementMintAmount();
                                }}
                              >
                                <span className='text-xl'>-</span>
                              </button>
                            </div>

                            <p className='text-default font-bold text-xl border px-4 py-0.5 rounded-sm'>
                              {mintAmount}
                            </p>
                            <div>
                              <button
                                className=''
                                disabled={claimingNft ? 1 : 0}
                                onClick={(e) => {
                                  e.preventDefault();
                                  incrementMintAmount();
                                }}
                              >
                                <span className='text-xl'>+</span>
                              </button>
                            </div>
                          </div>
                        </>
                        <>
                          <div>
                            <div className='mint__btn__wrapper'>
                              <button
                                className='btn mint__btn'
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
        </div>
      </div>
    </>
  );
};

export default Mint;
