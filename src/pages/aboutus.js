import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layout/mainlayout';
import '../styles/about.css';

import axios from 'axios'




const Aboutus = (props) => {


  return (
    <div>
      <Layout>
        <div className='aboutpage'>

            <div className='aboutall'>
            <div className='abouttitle'>
                WHO ARE WE?
            </div>
            <div className='aboutp'>
            campers is an online camp programs booking site launched in 2022 by owner blablabla  
            ,we have varity of camp programs (green forest,maountain and river,desert)
            that make you detox your mind and renew your energy.
            <br/>
            so if you're looking for an activity to renew your energy and detox your body and your mind you're in the right site! 
            </div>
            <div className='aboutcp'>
              &copy; all rights reserved 2022 
            </div>
            </div>



        </div>

      </Layout>
    </div>
  )
};

export default Aboutus;
