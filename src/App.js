import React from "react";

// CSS import
import "./css/reset.css";
import "./css/app.css";
import "./css/responsive.css";
// images import
import windows_ico from "./img/win10_icon.png";
import linux_ico from "./img/ubuntu_icon.png";

const App = () => {
  const downloadWinUrl = "https://github.com/saw-jan/thebible-releases/releases/latest/download/the_bible_setup_v2.2.12.exe";
  const downloadLinUrl = "https://github.com/saw-jan/thebible-releases/releases/latest/download/the_bible_setup_v2.2.12.deb";
  return (
    <div className='container'>
      <div className='left-panel'></div>
      <div className='right-panel'></div>
      <div className='wrapper'>
        <div id='bookmark'></div>
        <div className='upper'>
          <div className='upper-left'>
            <div id='logo'></div>
            <div id='tagline'>
              <span id='tagline-1'>For</span>
              <span id='tagline-2'>Comparative</span>
              <span id='tagline-1'>Bible Study</span>
            </div>
          </div>
          <div className='upper-right'></div>
        </div>
        <div className='lower'>
          <div className='lower-left'>
            <div className='buttons'>
              <div className='download-btn'>
                <a href={downloadWinUrl}>
                  <div id='button'>
                    <img src={windows_ico} alt='windows-icon' />
                    <label>Download</label>
                  </div>
                </a>
              </div>
              <div className='download-btn'>
                <a href={downloadLinUrl}>
                  <div id='button'>
                    <img src={linux_ico} alt='linux-icon' />
                    <label>Download</label>
                  </div>
                </a>
              </div>
            </div>
            <div className='space'></div>
          </div>
          <div className='lower-right'>
            <div className='watermark'>
              <span id='watermark-1'>The</span>
              <span id='watermark-2'>BIBLE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
