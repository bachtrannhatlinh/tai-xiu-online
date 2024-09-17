import React from 'react'
import logo from '../../images/White_logo.png'

import './styled.scss'

function Header() {
  return (
    <div className='header'>
      <div className='logo'>
        <img src={logo} alt="logo-tai-xiu" />
      </div>
      <div className='menu'>
        <ul>
          <li>HOME</li>
          <li className='active'>GAMES</li>
          <li>NEWS</li>
          <li>MATH</li>
          <li>COMPANY</li>
          <li>EVENTS</li>
          <li>PARTNERS</li>
        </ul>
      </div>
    </div>
  )
}

export default Header