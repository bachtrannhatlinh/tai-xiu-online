import React from 'react'
import logoFooter from '../../images/footer/logo-footer.png'
import twitter from '../../images/footer/twitter.png'
import youTube from '../../images/footer/youTube.png'
import linkedin from '../../images/footer/linkedin.png'

import './styled.scss'
import CopyRight from './CopyRight'

function Footer() {
  return (
    <>
      <div className='footer'>
        <div className='left'>
          <img src={logoFooter} alt="logo-tai-xiu" />
          <div className='location'>Valletta Buildings, South Street,</div>
          <div>Valletta - VLT 1103 Malta</div>
          <div>
            <img src={twitter} alt='twitter'/>
            <img src={youTube} alt='youTube'/>
            <img src={linkedin} alt='linkedin'/>
          </div>
        </div>
        <div className='right'>
          <ul>
            <li>WEB MAP</li>
            <li>Home</li>
            <li>Games</li>
            <li>News</li>
            <li>Maths</li>
            <li>Company</li>
            <li>Events</li>
            <li>Partners</li>
          </ul>
          <ul>
            <li>ABOUT US</li>
            <li>Licensing</li>
            <li>Certification</li>
            <li>Responsible Gaming</li>
            <li>Exhibitions</li>
            <li>Copyright Protection</li>
            <li>Privacy Policy</li>
          </ul>
          <ul>
            <li>EVENTS</li>
            <li>PG ICE 2017</li>
            <li>PG ICE 2018</li>
            <li>PG ICE 2019</li>
            <li>About ICE</li>
          </ul>
          <ul>
            <li>OUR PARTNERS</li>
            <li>Relax Gaming</li>
            <li>Leander Games</li>
          </ul>
        </div>
      </div>
      <CopyRight />
    </>
  )
}

export default Footer

