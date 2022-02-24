import React from 'react'
import './navbar.css'
import logo from '../Assets/logo.svg'
import { Link } from 'react-router-dom'

const NavigatiionBar = () => {
    const [isActive, setisActive] = React.useState(false)

  return (
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand margins'>
        <a href='/' className='navbar-item'>
          <img styles={{width:"185px", height:"190px"}} src={logo} alt="logo"></img>
        </a>

        <a href='/'
          onClick={() => {
            setisActive(!isActive)
          }}
          role='button'
          className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
          aria-label='menu'
          aria-expanded='false'
          data-target='navbarBasicExample'
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
      </div>
      <div id='navbarBasicExample' className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <div className='navbar-end'>
          <div className='navbar-item'>
            <Link className='home' to='/'>Home</Link>
            <Link className='gift' to='/giftguides'>Gift Guides</Link>
            <Link className='faq' to='/faq'>FAQ</Link>
            <Link className='about' to='/about'>About Us</Link>
            
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavigatiionBar