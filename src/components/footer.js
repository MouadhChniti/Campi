import { useState } from 'react';
import '../styles/stylefooter.css';
import facebook from '../imgs/facebook.png'
import instagram from '../imgs/instagram.png'
import twitter from '../imgs/twitter.png'
import logoo from '../imgs/logo.png'
import menu_icon from '../imgs/menu_icon.png'
import { Link } from 'react-router-dom';

const Footerb = (props) => {
  return (
    <div>

      <div className="ftr">
        <Link to="/home">
        <div className="logo">
          <img src={logoo} alt="" id="slogo" /><br/>campers is an online camp programs booking site ,we have varity of camp programs
          (green forest,maountain and river,desert)that make you detox your mind and renew your energy 
        </div>
        </Link>

        <div className="explore">
          <li className='texplore'>Explore</li>
          <Link to="/home">
            <li>Home</li>
          </Link>
          <Link to="/programs">
            <li>Programs</li>
          </Link>
          <li>About us</li>
          <li>Contact</li>
        </div>

        <div className="socials">
          <li className='tsocial'>Social</li>
          <li><img src={instagram} id="instagram" /></li>
          <li><img src={facebook} id="fb" /></li>
          <li><img src={twitter} id="twitter" /></li>
          

        </div>
        

      </div>
      <hr/>
      <div className='cpr'>&copy; all right reserved 2022</div>
      


    </div>
  )
};

export default Footerb;
