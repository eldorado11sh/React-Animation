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
import { Zoom } from 'react-awesome-reveal';

const Home = () =>  {
  const bannerRef = useRef(null);
  const platformRef = useRef(null);
  const casesRef = useRef(null);
  const poweredRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const [bannerOpacity, setBannerOpacity] = useState(1);
  const [bannerTranslateY, setBannerTranslateY] = useState(0);

  const [platformOpacity, setPlatformOpacity] = useState(1);
  const [platformTranslateY, setPlatformTranslateY] = useState(0);

  const [tokenCircleOpacity, setTokenCircleOpacity] = useState(1);
  const [tokenCircleScale, setTokenCircleScale] = useState(0);
  const [tokenTranslateX, setTokenTranslateX] = useState(0);
  const [tokenTranslateY, setTokenTranslateY] = useState(0);

  const [nftCircleOpacity, setNftCircleOpacity] = useState(1);
  const [nftCircleScale, setNftCircleScale] = useState(0);
  const [nftCircleTranslateX, setNftCircleTranslateX] = useState(0);
  const [nftCircleTranslateY, setNftCircleTranslateY] = useState(0);

  const [selectCircleOpacity, setSelectCircleOpacity] = useState(1);
  const [selectCircleScale, setSelectCircleScale] = useState(0);
  const [selectCircleTranslateX, setSelectCircleTranslateX] = useState(0);
  const [selectCircleTranslateY, setSelectCircleTranslateY] = useState(0);

  const [chainCircleRotate, setChainCircleRotate] = useState(0);
  const [chainCircleOpacity, setChainCircleOpacity] = useState(1);
  const [chainCircleScale, setChainCircleScale] = useState(0);
  const [chainCircleTranslateX, setChainCircleTranslateX] = useState(0);
  const [chainCircleTranslateY, setChainCircleTranslateY] = useState(0);

  const [chainCircleWhiteScale, setChainCircleWhiteScale] = useState(0);
  const [chainCircleWhiteTranslateX, setChainCircleWhiteTranslateX] = useState(0);
  const [chainCircleWhiteTranslateY, setChainCircleWhiteTranslateY] = useState(0);

  const [chainCircleWhiteSmScale, setChainCircleWhiteSmScale] = useState(0);
  const [chainCircleWhiteSmTranslateX, setChainCircleWhiteSmTranslateX] = useState(0);
  const [chainCircleWhiteSmTranslateY, setChainCircleWhiteSmTranslateY] = useState(0);

  const [chainCirclePinkScale, setChainCirclePinkScale] = useState(0);
  const [chainCirclePinkTranslateX, setChainCirclePinkTranslateX] = useState(0);
  const [chainCirclePinkTranslateY, setChainCirclePinkTranslateY] = useState(0);

  const [chainCircleBlueScale, setChainCircleBlueScale] = useState(0);
  const [chainCircleBlueTranslateX, setChainCircleBlueTranslateX] = useState(0);
  const [chainCircleBlueTranslateY, setChainCircleBlueTranslateY] = useState(0);

  const [fastIconRotate, setFastIconRotate] = useState(0);

  const [blueCircleScale, setBlueCircleScale] = useState(0);
  const [blueCircleTranslateX, setBlueCircleTranslateX] = useState(0);
  const [blueCircleTranslateY, setBlueCircleTranslateY] = useState(0);

  const [pinkCircleScale, setPinkCircleScale] = useState(0);
  const [pinkCircleTranslateX, setPinkCircleTranslateX] = useState(0);
  const [pinkCircleTranslateY, setPinkCircleTranslateY] = useState(0);

  const [whiteCircleScale, setWhiteCircleScale] = useState(0);
  const [whiteCircleTranslateX, setWhiteCircleTranslateX] = useState(0);
  const [whiteCircleTranslateY, setWhiteCircleTranslateY] = useState(0);

  const [greenCircleRotate, setGreenCircleRotate] = useState(0);
  const [greenCircleScale, setGreenCircleScale] = useState(0);
  const [greenCircleTranslateX, setGreenCircleTranslateX] = useState(0);
  const [greenCircleTranslateY, setGreenCircleTranslateY] = useState(0);

  const [fillWhiteScale, setFillWhiteScale] = useState(0);
  const [fillWhiteTranslateX, setFillWhiteTranslateX] = useState(0);
  const [fillWhiteTranslateY, setFillWhiteTranslateY] = useState(0);

  const [fillWhiteSmScale, setFillWhiteSmScale] = useState(0);
  const [fillWhiteSmTranslateX, setFillWhiteSmTranslateX] = useState(0);
  const [fillWhiteSmTranslateY, setFillWhiteSmTranslateY] = useState(0);

  const [fillBlueScale, setFillBlueScale] = useState(0);
  const [fillBlueTranslateX, setFillBlueTranslateX] = useState(0);
  const [fillBlueTranslateY, setFillBlueTranslateY] = useState(0);

  useEffect(() => {
    let bannerHeight = bannerRef.current.clientHeight;
    let platformHeight = platformRef.current.clientHeight;
    let casesHeight = casesRef.current.clientHeight;
    let poweredHeight = poweredRef.current.clientHeight;
    const handleScroll = () => {
      const bannerRect = document.getElementsByClassName('banner-content')[0].getBoundingClientRect();
      const platformRect = document.getElementsByClassName('platform')[0].getBoundingClientRect();
      const casesRect = document.getElementsByClassName('cases')[0].getBoundingClientRect();
      const poweredRect = document.getElementsByClassName('powered')[0].getBoundingClientRect();
      
      if (bannerRect.top < 0) {
        setBannerOpacity(1 - Math.abs(bannerRect.top) / bannerHeight)
        setBannerTranslateY((bannerRect.top / bannerHeight) * 120)
      }
      if (platformRect.top < 0) {
        setPlatformOpacity(1 - Math.abs(platformRect.top) / platformHeight)
        setPlatformTranslateY((platformRect.top / platformHeight) * 120)
      }
      if (casesRect.top > 0) {
        setTokenCircleOpacity(1 - Math.abs(casesRect.top) / casesHeight)
        setTokenCircleScale(1 + Math.abs(casesRect.top) / casesHeight)
        setTokenTranslateX(-(Math.abs(casesRect.top) / casesHeight) * 110)
        setTokenTranslateY(-(Math.abs(casesRect.top) / casesHeight) * 300)

        setNftCircleOpacity(1 - Math.abs(casesRect.top) / casesHeight);
        setNftCircleScale(1 + Math.abs(casesRect.top) * 2 / casesHeight)
        setNftCircleTranslateX(-(Math.abs(casesRect.top) / casesHeight) * 200)
        setNftCircleTranslateY(-(Math.abs(casesRect.top) / casesHeight) * 100)

        setSelectCircleOpacity(1 - Math.abs(casesRect.top) / casesHeight)
        setSelectCircleScale(1 + Math.abs(casesRect.top) / casesHeight)
        setSelectCircleTranslateX(-(Math.abs(casesRect.top) / casesHeight) * 200)
        setSelectCircleTranslateY(-(Math.abs(casesRect.top) / casesHeight) * 200)
      } else {
        setTokenCircleOpacity(1 - Math.abs(casesRect.top) * 2 / casesHeight)
        setTokenCircleScale(1 - casesRect.top / casesHeight)
        setTokenTranslateX(-(Math.abs(casesRect.top) / casesHeight) * 110)
        setTokenTranslateY((Math.abs(casesRect.top) / casesHeight) * 300)

        setNftCircleOpacity(1 - Math.abs(casesRect.top) / casesHeight)
        setNftCircleScale(1 - casesRect.top * 2 / casesHeight)
        setNftCircleTranslateX(-(Math.abs(casesRect.top) / casesHeight) * 150)
        setNftCircleTranslateY((Math.abs(casesRect.top) / casesHeight) * 150)

        setSelectCircleOpacity(1 - Math.abs(casesRect.top) * 1.5 / casesHeight)
        setSelectCircleScale(1 - casesRect.top / casesHeight)
        setSelectCircleTranslateX(-(Math.abs(casesRect.top) / casesHeight) * 150)
        setSelectCircleTranslateY((Math.abs(casesRect.top) / casesHeight) * 150)
      }
      if (poweredRect.top > 0) {
        setChainCircleRotate(poweredRect.top / poweredHeight * 100)
        setChainCircleOpacity(1 - Math.abs(poweredRect.top) / poweredHeight)
        setChainCircleScale(1 + Math.abs(poweredRect.top) / poweredHeight)
        setChainCircleTranslateX((Math.abs(poweredRect.top) / poweredHeight) * 50)
        setChainCircleTranslateY((Math.abs(poweredRect.top) / poweredHeight) * 50)

        setChainCircleWhiteScale(1 + Math.abs(poweredRect.top) * 0.5 / poweredHeight)
        setChainCircleWhiteTranslateX(-(Math.abs(poweredRect.top) / poweredHeight) * 60)
        setChainCircleWhiteTranslateY((Math.abs(poweredRect.top) / poweredHeight) * 50)

        setChainCircleWhiteSmScale(1 + Math.abs(poweredRect.top) / poweredHeight)
        setChainCircleWhiteSmTranslateX((Math.abs(poweredRect.top) / poweredHeight) * 60)
        setChainCircleWhiteSmTranslateY((Math.abs(poweredRect.top) / poweredHeight) * 150)

        setChainCirclePinkScale(1 + Math.abs(poweredRect.top) / poweredHeight)
        setChainCirclePinkTranslateX((Math.abs(poweredRect.top) / poweredHeight) * 80)
        setChainCirclePinkTranslateY((Math.abs(poweredRect.top) / poweredHeight) * 20)

        setChainCircleBlueScale(1 + Math.abs(poweredRect.top)*2 / poweredHeight)
        setChainCircleBlueTranslateX(-(Math.abs(poweredRect.top) / poweredHeight) * 80)
        setChainCircleBlueTranslateY(-(Math.abs(poweredRect.top) / poweredHeight) * 80)

        setFastIconRotate(poweredRect.top / poweredHeight * 200)

        setBlueCircleScale(1 + Math.abs(poweredRect.top)*2 / poweredHeight)
        setBlueCircleTranslateX((Math.abs(poweredRect.top) / poweredHeight) * 80)
        setBlueCircleTranslateY((Math.abs(poweredRect.top) / poweredHeight) * 80)

        setPinkCircleScale(1 + Math.abs(poweredRect.top)*2 / poweredHeight)
        setPinkCircleTranslateX((Math.abs(poweredRect.top) / poweredHeight) * 80)
        setPinkCircleTranslateY(-(Math.abs(poweredRect.top) / poweredHeight) * 80)

        setWhiteCircleScale(1 + Math.abs(poweredRect.top)*2 / poweredHeight)
        setWhiteCircleTranslateX(-(Math.abs(poweredRect.top) / poweredHeight) * 80)
        setWhiteCircleTranslateY(-(Math.abs(poweredRect.top) / poweredHeight) * 80)

        setGreenCircleRotate(poweredRect.top / poweredHeight * 100)
        setGreenCircleScale(1 + Math.abs(poweredRect.top) / poweredHeight)
        setGreenCircleTranslateX((Math.abs(poweredRect.top) / poweredHeight) * 50);
        setGreenCircleTranslateY((Math.abs(poweredRect.top) / poweredHeight) * 50);

        setFillWhiteScale(1 + Math.abs(poweredRect.top)*1.2 / poweredHeight)
        setFillWhiteTranslateX((-Math.abs(poweredRect.top) / poweredHeight) * 120)
        setFillWhiteTranslateY((Math.abs(poweredRect.top) / poweredHeight) * 200)

        setFillBlueScale(1 + Math.abs(poweredRect.top)*1.2 / poweredHeight)
        setFillBlueTranslateX((Math.abs(poweredRect.top) / poweredHeight) * 80)
        setFillBlueTranslateY((Math.abs(poweredRect.top) / poweredHeight) * 50)

        setFillWhiteSmScale(1 + Math.abs(poweredRect.top) / poweredHeight)
        setFillWhiteSmTranslateX((Math.abs(poweredRect.top) / poweredHeight) * 120)
        setFillWhiteSmTranslateY((Math.abs(poweredRect.top) / poweredHeight) * 200)
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

          <div className='cases' ref={casesRef}>
            <div className='cases-title'>Use Cases</div>
            <div className='img-box'>
              <img className='img-chat' src={Cases} alt='Case' />
              <div className='tokenCircle'
              style={{
                opacity: tokenCircleOpacity,
                transform: `translate(${tokenTranslateX}px, ${tokenTranslateY}px) scale(${tokenCircleScale})`
              }} />
              <div className='nftCircle' 
              style={{
                opacity: nftCircleOpacity,
                transform: `translate(${nftCircleTranslateX}px, ${nftCircleTranslateY}px) scale(${nftCircleScale})`
              }}/>
              <div className='selectCircle'
              style={{
                opacity: selectCircleOpacity,
                transform: `translate(${selectCircleTranslateX}px, ${selectCircleTranslateY}px) scale(${selectCircleScale})`
              }} />
            </div>
          </div>

          <div className='powered' ref={poweredRef}>
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
                    <div className='chain-circle' 
                    style={{ opacity: chainCircleOpacity, 
                      transform: `translate(${chainCircleTranslateX}px, ${chainCircleTranslateY}px) scale(${chainCircleScale}) rotate(${chainCircleRotate}deg)`
                    }}>
                      <div className='chain-white' 
                      style={{
                        opacity: chainCircleOpacity,
                        transform: `translate(${chainCircleWhiteTranslateX}px, ${chainCircleWhiteTranslateY}px) scale(${chainCircleWhiteScale})`
                      }}/>
                      <div className='chain-white-small' 
                      style={{
                        opacity: chainCircleOpacity,
                        transform: `translate(${chainCircleWhiteSmTranslateX}px, ${chainCircleWhiteSmTranslateY}px) scale(${chainCircleWhiteSmScale})`
                      }}/>
                      <div className='chain-blue' 
                      style={{
                        opacity: chainCircleOpacity,
                        transform: `translate(${chainCircleBlueTranslateX}px, ${chainCircleBlueTranslateY}px) scale(${chainCircleBlueScale})`
                      }} />
                      <div className='chain-pink'
                      style={{
                        opacity: chainCircleOpacity,
                        transform: `translate(${chainCirclePinkTranslateX}px, ${chainCirclePinkTranslateY}px) scale(${chainCirclePinkScale})`
                      }} />
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
                    <div className='fast-icon' style={{
                      transform: `rotate(-${fastIconRotate}deg)`
                    }}>
                      <div className='fast-icon-blue'>
                        <div className='blue-circle' 
                        style={{
                          opacity: chainCircleOpacity,
                          transform: `translate(${blueCircleTranslateX}px, ${blueCircleTranslateY}px) scale(${blueCircleScale})`
                        }}/>
                        <div className='blue-fill'
                        style={{
                          opacity: chainCircleOpacity,
                          transform: `translate(${blueCircleTranslateX}px, ${blueCircleTranslateY}px) scale(${blueCircleScale})`
                        }} />
                      </div>
                      <div className='fast-icon-pink'>
                        <div className='pink-circle' 
                        style={{
                          opacity: chainCircleOpacity,
                          transform: `translate(${pinkCircleTranslateX}px, ${pinkCircleTranslateY}px) scale(${pinkCircleScale})`
                        }}/>
                        <div className='pink-fill'
                        style={{
                          opacity: chainCircleOpacity,
                          transform: `translate(${pinkCircleTranslateX}px, ${pinkCircleTranslateY}px) scale(${pinkCircleScale})`
                        }} />
                      </div>
                      <div className='fast-icon-white'>
                        <div className='white-circle'
                        style={{
                          opacity: chainCircleOpacity,
                          transform: `translate(${whiteCircleTranslateX}px, ${whiteCircleTranslateY}px) scale(${whiteCircleScale})`
                        }} />
                        <div className='white-fill' 
                        style={{
                          opacity: chainCircleOpacity,
                          transform: `translate(${whiteCircleTranslateX}px, ${whiteCircleTranslateY}px) scale(${whiteCircleScale})`
                        }}/>
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
                    <div className='green-circle' 
                    style={{
                      transform: `translate(${greenCircleTranslateX}px, ${greenCircleTranslateY}px) scale(${greenCircleScale}) rotate(${greenCircleRotate}deg)`
                    }}>
                      <div className='circle-one' />
                      <div className='circle-two' />
                      <div className='circle-three' />
                      <div className='circle-four' />
                      <div className='fill-white-sm' 
                      style={{
                        transform: `translate(${fillWhiteSmTranslateX}px, ${fillWhiteSmTranslateY}px) scale(${fillWhiteSmScale})`
                      }}/>
                      <div className='fill-white' 
                      style={{
                        transform: `translate(${fillWhiteTranslateX}px, ${fillWhiteTranslateY}px) scale(${fillWhiteScale})`
                      }}/>
                      <div className='fill-blue' 
                      style={{
                        transform: `translate(${fillBlueTranslateX}px, ${fillBlueTranslateY}px) scale(${fillBlueScale})`
                      }}/>
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
