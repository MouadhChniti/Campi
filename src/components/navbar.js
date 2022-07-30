import { useState } from 'react';
import '../styles/stylenav.css';
import facebook from '../imgs/facebook.png'
import instagram from '../imgs/instagram.png'
import twitter from '../imgs/twitter.png'
import logoo from '../imgs/logo.png'
import menu_icon from '../imgs/menu_icon.png'
import { Link } from 'react-router-dom';

const Navb = (props) => {
  return (
    <div>

      <div className="navbar">
        <Link to="/home">
        <div className="logo">
          <img src={logoo} alt="" id="slogo" />
        </div>
        </Link>

        <div className="mininav">
          <Link to="/home">
            <li>Home</li>
          </Link>
          <Link to="/programs">
            <li>Programs</li>
          </Link>
          <Link to="/aboutus"><li>About us</li></Link>
          <Link to="/contactus"><li>Contact</li></Link>
        </div>

        <div className="social">
          <li><img src={instagram} id="instagram" /></li>
          <li><img src={facebook} id="fb" /></li>
          <li><img src={twitter} id="twitter" /></li>
          <Link to="/signin"><li className='sin'>Signin</li></Link>

        </div>
        <div className="navbar_icon"><img src={menu_icon} alt="error" /></div>

      </div>


    </div>
  )
};

export default Navb;
