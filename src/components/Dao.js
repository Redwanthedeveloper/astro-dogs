import React from 'react';
import voting from '../images/dao/voting.png';
import stacking from '../images/dao/staking.png';
import vault from '../images/dao/vault.png';
import tokens from '../images/dao/tokens.png';
const Dao = () => {
  return (
    <>
      <section className='dao' id='dao'>
        <div className='pricing'>
          <div className='pricing__center center'>
            <h2
              className='pricing__title h2'
              data-aos='animation-scale-top'
              data-aos-duration={600}
            >
              Community DAO
            </h2>
            <div className='download__info'>
              Owners get exclusive access to the DAO community. The DAO is a key
              part of the value Doodle Punks provide. This allows the community
              to engage and collaborate together to build something amazing that
              we’re all part of. <br /> <br />
              Starting with the purchase of blue chip NFTs for fractionalization
              amongst members. In the future, innovative dev projects will also
              be suggested and put to a vote, to decide the actions of the DAO.
            </div>
          </div>
        </div>
        <div className='options dao__options'>
          <div className='options__center center'>
            <div className='options__wrap'>
              <div className='options__list'>
                <div className='options__item'>
                  <div className='options__info'>
                    <img src={voting} alt='' />
                  </div>
                  <div className='options__info'>
                    Voting <br />
                  </div>
                  <div className='options__text'>
                    Each Doodle Punk NFT grants the owner one vote in the DAO.
                    These votes will be opened to decide which blue-chip
                    purchases to add to the community Vault, as well as the
                    direction of future projects owners would like to create. ‍
                  </div>
                </div>
                <div className='options__item'>
                  <div className='options__info'>
                    <img src={stacking} alt='' />
                  </div>
                  <div className='options__info'>
                    Staking <br />
                  </div>
                  <div className='options__text'>
                    Once you have a Doodle Punk NFT, you have the option to
                    stake it. Staking is the mechanism by which fractional
                    shares of the DAO treasury vault are distributed. These
                    shares are distributed daily to holders in the form of our
                    $CRAYON utility token. Each Doodle Punk NFT receives 10
                    $CRAYON per day when staked. 
                  </div>
                </div>
                <div className='options__item'>
                  <div className='options__info'>
                    <img src={vault} alt='' />
                  </div>
                  <div className='options__info'>
                    Vault <br />
                  </div>
                  <div className='options__text'>
                    The Doodle Punks DAO will also purchase blue-chip NFT’s
                    chosen by the community. Once acquired these assets can be
                    fractionalized to the community holders. All staked Doodle
                    Punks are members of the exclusive DAO, with perks such as
                    utility voting privileges, $CRAYON utility tokens, valuable
                    airdrops, giveaways, and deciding what future endeavors to
                    explore. 
                  </div>
                </div>
                <div className='options__item'>
                  <div className='options__info'>
                    <img src={tokens} alt='' />
                  </div>
                  <div className='options__info'>
                    Tokens <br />
                  </div>
                  <div className='options__text'>
                    DoodlePunk DAO members receive $CRAYON utility tokens
                    representing the fractional shares of NFTs held in the
                    community vault. Doodle Punk DAO members will receive 10
                    $CRAYON utility tokens per day, representing the fractional
                    shares of NFTs held in the community vault.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dao;
