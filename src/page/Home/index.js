import React, { useRef, useEffect, useState } from 'react';
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
import { Fade, Zoom } from 'react-awesome-reveal';

const Home = () =>  {
  const bannerRef = useRef(null);
  const platformRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const [bannerOpacity, setBannerOpacity] = useState(1);
  const [bannerTranslateY, setBannerTranslateY] = useState(0);

  const [platformOpacity, setPlatformOpacity] = useState(1);
  const [platformTranslateY, setPlatformTranslateY] = useState(0)

  useEffect(() => {
    let bannerHeight = bannerRef.current.clientHeight;
    let platformHeight = platformRef.current.clientHeight;
    const handleScroll = () => {
      const bannerRect = document.getElementsByClassName('banner-content')[0].getBoundingClientRect();
      const platformRect = document.getElementsByClassName('platform')[0].getBoundingClientRect();
      
      if (bannerRect.top < 0) {
        setBannerOpacity(1 - Math.abs(bannerRect.top) / bannerHeight)
        setBannerTranslateY((bannerRect.top / bannerHeight) * 120)
      }
      if(platformRect.top < 0) {
        setPlatformOpacity(1 - Math.abs(platformRect.top) / platformHeight)
        setPlatformTranslateY((platformRect.top / platformHeight) * 120)
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);
  
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

          <div className='banner-content' ref={bannerRef}
          style={{
            opacity: bannerOpacity,
            transform: `translateY(${bannerTranslateY}px)`
          }}>
            <div className='content-title'>All in one solution with few lines of mobile code</div>
            <div className='content-container'>
              <div className='content-detail'>Help Web3 mobile application manage wallet easily. By simply import several lines of codes, you can imbed a wallet your the SDK to your app, Petasky inapp wallet sdk provides all in one service to the development team.</div>
              <div className='text-button-group'>
                <button className='join-button'>Join the wait list</button>
                <button className='schedule-button'>Schedule a call</button>
              </div>
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
          <div className='platform' ref={platformRef}
          style={{
            opacity: platformOpacity,
            transform: `translateY(${platformTranslateY}px)`
          }}>
            <div className='platform-title'>
              <div className='title'>All-in-one Platform</div>
              <div className='headline'>The top mobile development SDK layer</div>
            </div>
            <div className='platform-content'>
              <div className='individual'>
                <Zoom>
                <img src={gifBackEmail} alt='Email' data-aos="zoom-out" data-aos-duration="1500" />
                </Zoom>
                <div className='individual-body'>
                  <div className='individual-title'>Email based account creation</div>
                  <div className='individual-content'>Register and login with email gave the smoothest experience to users</div>
                </div>
              </div>
              <div className='individual'>
                <Zoom>
                  <img src={gifBackRecovery} alt='Email'data-aos="zoom-out" data-aos-duration="1500" />
                </Zoom>
                <div className='individual-body'>
                  <div className='individual-title'>Built-in Key Recovery</div>
                  <div className='individual-content'>User could cover their wallet by their email verification</div>
                </div>
              </div>
              <div className='individual'>
                <Zoom>
                  <img src={gifBackSDK} alt='Email' data-aos="zoom-out" data-aos-duration="1500" />
                </Zoom>
                <div className='individual-body'>
                  <div className='individual-title'>Native In-app SDK</div>
                  <div className='individual-content'>Dev team could have the best flexibility to send out transaction and handle blockchain notification</div>
                </div>
              </div>
              <div className='individual'>
                <Zoom>
                  <img src={gifBackNFT} alt='Email' data-aos="zoom-out" data-aos-duration="1500" />
                </Zoom>
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
                    <div className='chain-circle'>
                      <div className='chain-white' />
                      <div className='chain-white-small' />
                      <div className='chain-blue' />
                      <div className='chain-pink' />
                    </div>
                  </div>
                  <div className='powered-individual-body'>
                    <div className='body-title'>Sharded WASM Chain</div>
                    <div className='body-content'>Developers can use evolving loved languages like rust to deploy smart contracts on single event bus sharded chain (EVeryone does not have to party on the same shard like Optimism).</div>
                  </div>
                </div>
                <div className='more'><span>More on sharing &gt;&gt;</span></div>
              </div>
              <div className='powered-individual'>
                <div className='powered-individual-content'>
                  <div className='powered-individual-icon'>
                    <div className='fast-icon'>
                      <div className='fast-icon-blue' data-aos="zoom-in" data-aos-duration="1500">
                        <div className='blue-circle' />
                        <div className='blue-fill'></div>
                      </div>
                      <div className='fast-icon-pink' data-aos="zoom-out" data-aos-duration="1500">
                        <div className='pink-circle' />
                        <div className='pink-fill'></div>
                      </div>
                      <div className='fast-icon-white' data-aos="zoom-out" data-aos-duration="1500">
                        <div className='white-circle' />
                        <div className='white-fill'></div>
                      </div>
                    </div>
                  </div>
                <div className='powered-individual-body'>
                  <div className='body-title'>Fast & Low Cost Transactions</div>
                  <div className='body-content'>One second block times gives us 100k TPS using 4 shards. Transactions like minting and listing average around $0.01-$0.9. Really neat when all foundations are set for full decentralization.</div>
                </div>
                </div>
                <div className='more'><span>See explorer &gt;&gt;</span></div>
              </div>
              <div className='powered-individual'>
                <div className='powered-individual-content'>
                  <div className='powered-individual-icon'>
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
                  </div>
                  <div className='powered-individual-body'>
                    <div className='body-title'>Green Proof of Stake</div>
                    <div className='body-content'>As a proof of stake chain from the start, NEAR Protocol was also awarded the climate neutral product label.</div>
                  </div>
                </div>
                <div className='more'><span>Learn more &gt;&gt;</span></div>
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
