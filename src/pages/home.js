import { useState } from 'react';
import '../styles/home.css';
import facebook from '../imgs/facebook.png'
import instagram from '../imgs/instagram.png'
import twitter from '../imgs/twitter.png'
import logoo from '../imgs/logo.png'
import menu_icon from '../imgs/menu_icon.png'
import Navb from '../components/navbar'
import { Link } from 'react-router-dom';


const Home = (props) => {
  return (
    <div>
      <div className='home'>
        <Navb></Navb>

        <div className="parag1">Detox your mind in our environnemt</div>
        <div className="parag2">A great night at Lavie Camping Land, where to escape city life and bring you to get in touch with nature</div>
        <div className="gn">
          <div className="cp">
            <Link to="/programs">Check our programs</Link>
          </div>
        </div >



      </div>
</div>
      )
};

      export default Home;
