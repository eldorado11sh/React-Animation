import React from 'react';
import "./style.scss";
import BannerBackground from '../../assets/img/banner video upper.webm';
import ContentBackground from '../../assets/img/longContent.webm';
import gifBackEmail from "../../assets/img/1_1.gif";
import gifBackRecovery from "../../assets/img/2_2.gif";
import gifBackSDK from "../../assets/img/3_3.gif";
import gifBackNFT from "../../assets/img/4_4.gif";
import Cases from "../../assets/img/cases.png"
import Logo from '../../assets/img/logo.png';
import PoweredIcon from '../../assets/img/powerd-icon.png';
import { FaTelegramPlane } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import FooterLogo from "../../assets/img/footer-logo.png";
import "./animate";
import { Fade, Zoom } from 'react-awesome-reveal';

const Home = () =>  {
  
  return (
    <div className='home'>
      <div className='banner'>
        <video className='back-video' muted autoPlay="autoplay" loop>
          <source src={BannerBackground} alt="Banner" />
        </video>
        <div className='banner-container'>
          <div className='header'>
            <img src={Logo} alt="logo" />
            <div className='social-group'>
              <FaTelegramPlane/>
              <FaTwitter />
              <FaDiscord />
            </div>
          </div>

          <div className='banner-content'>
          <Fade direction="down" duration={1000}>
            <div className='content-title'>All in one solution with few lines of mobile code</div>
          </Fade>
            
            <div className='content-detail'>Help Web3 mobile application manage wallet easily. By simply import several lines of codes, you can imbed a wallet your the SDK to your app, Petasky inapp wallet sdk provides all in one service to the development team.</div>
            <div className='text-button-group'>
              <button className='join-button'>Join the wait list</button>
              <button className='schedule-button'>Schedule a call</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className='content'>
        <div className='content-video-box'>
          <video className='content-back-video' muted autoPlay="autoplay" loop>
            <source src={ContentBackground} alt="Content" />
          </video>
        </div>
        <div className='content-container'>
          <div className='platform'>
            <div className='platform-title'>
              <div className='title'>All-in-one Platform</div>
              <div className='headline'>The top mobile development SDK layer</div>
            </div>
            <div className='platform-content'>
              <div className='individual'>
                <img src={gifBackEmail} alt='Email' />
                <div className='individual-body'>
                  <div className='individual-title'>Email based account creation</div>
                  <div className='individual-content'>Register and login with email gave the smoothest experience to users</div>
                </div>
              </div>
              <div className='individual'>
                <img src={gifBackRecovery} alt='Email' />
                <div className='individual-body'>
                  <div className='individual-title'>Built-in Key Recovery</div>
                  <div className='individual-content'>User could cover their wallet by their email verification</div>
                </div>
              </div>
              <div className='individual'>
                <img src={gifBackSDK} alt='Email' />
                <div className='individual-body'>
                  <div className='individual-title'>Native In-app SDK</div>
                  <div className='individual-content'>Dev team could have the best flexibility to send out transaction and handle blockchain notification</div>
                </div>
              </div>
              <div className='individual'>
                <img src={gifBackNFT} alt='Email' />
                <div className='individual-body'>
                  <div className='individual-title'>NFT based ID </div>
                  <div className='individual-content'>Allow users to use their NFT as profile which is a basic pattern for games and social apps</div>
                </div>
              </div>
            </div>
          </div>

          <div className='cases '>
            <div className='cases-title'>Use Cases</div>
            <div className='img-box'>
              <img className='img-chat' src={Cases} alt='Case' />
              <div className='tokenCircle animate-on-scroll'></div>
              <div className='nftCircle animate-on-scroll-nft'></div>
              <div className='selectCircle animate-on-scroll-select'></div>
            </div>
          </div>

          <div className='powered'>
            <div className='powered-header'>
              <div className='powered-title'>
                <div className='subtitle'>Powered by</div>
                <img className='subtitle-img' src={PoweredIcon}  alt='powered' />
                <div className='subtitle'>NEAR Protocol</div>
              </div>
            </div>
            <div className='powered-content'>
              <div className='powered-individual'>
                <div className='powered-individual-content'>
                  <div className='powered-individual-icon'>
                    {/* <div className='chain-circle animate-on-scroll-chain-circle'>
                      <div className='chain-white animate-on-scroll-chain-white' />
                      <div className='chain-white-small animate-on-scroll-chain-white-small' />
                      <div className='chain-blue animate-on-scroll-chain-blue' />
                      <div className='chain-pink animate-on-scroll-chain-pink' />
                    </div> */}
                    <Zoom>
                      <div className='chain-circle' data-aos="zoom-out" data-aos-duration="1500">
                        <div className='chain-white' />
                        <div className='chain-white-small' />
                        <div className='chain-blue' />
                        <div className='chain-pink' />
                      </div>
                    </Zoom>
                    
                  </div>
                  <div className='powered-individual-body'>
                    <div className='body-title'>Sharded WASM Chain</div>
                    <div className='body-content'>Developers can use evolving loved languages like rust to deploy smart contracts on single event bus sharded chain (EVeryone does not have to party on the same shard like Optimism).</div>
                  </div>
                </div>
                <div className='more'><span>More on sharing >></span></div>
              </div>
              <div className='powered-individual'>
                <div className='powered-individual-content'>
                  <div className='powered-individual-icon'>
                    <div className='fast-icon'>
                      <Zoom>
                        <div className='fast-icon-blue' data-aos="zoom-in" data-aos-duration="1500">
                        <div className='blue-circle' />
                        <div className='blue-fill'></div>
                      </div>
                      </Zoom>
                      <Zoom>
                        <div className='fast-icon-pink' data-aos="zoom-out" data-aos-duration="1500">
                        <div className='pink-circle' />
                        <div className='pink-fill'></div>
                      </div>
                      </Zoom>
                      
                      <Zoom>
                        <div className='fast-icon-white' data-aos="zoom-out" data-aos-duration="1500">
                        <div className='white-circle' />
                        <div className='white-fill'></div>
                      </div>
                      </Zoom>
                      
                    </div>
                  </div>
                <div className='powered-individual-body'>
                  <div className='body-title'>Fast & Low Cost Transactions</div>
                  <div className='body-content'>One second block times gives us 100k TPS using 4 shards. Transactions like minting and listing average around $0.01-$0.9. Really neat when all foundations are set for full decentralization.</div>
                </div>
                </div>
                <div className='more'><span>See explorer >></span></div>
              </div>
              <div className='powered-individual'>
                <div className='powered-individual-content'>
                  <div className='powered-individual-icon'>
                    <Zoom>
                      <div className='green-circle' data-aos="zoom-out" data-aos-duration="1500">
                        <div className='circle-one' />
                        <div className='circle-two' />
                        <div className='circle-three' />
                        <div className='circle-four' />
                        <div className='fill-white-sm' />
                        <div className='fill-white' />
                        <div className='fill-blue' />
                        <div className='fill-pink' />
                      </div>
                    </Zoom>
                  
                  </div>
                  <div className='powered-individual-body'>
                    <div className='body-title'>Green Proof of Stake</div>
                    <div className='body-content'>As a proof of stake chain from the start, NEAR Protocol was also awarded the climate neutral product label.</div>
                  </div>
                </div>
                <div className='more'><span>Learn more >></span></div>
              </div>
            </div>
          </div>
        </div>
        
      </div>

      <div className='footer'>
        <div className='footer-container'>
          <img src={FooterLogo} alt='footerLogo' />
          <div className='footer-social'>
            <FaTelegramPlane />
            <FaTwitter />
            <FaDiscord />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
