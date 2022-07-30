import { useState } from 'react';
import '../styles/stylepayment.css';
import pay from '../imgs/pay.jpg';
import facebook from '../imgs/facebook.png'
import instagram from '../imgs/instagram.png'
import twitter from '../imgs/twitter.png'
import logoo from '../imgs/logo.png'
import Navb from '../components/navbar'
import visa from '../imgs/visa.png'
import menu_icon from '../imgs/menu_icon.png'
import Layout from '../layout/mainlayout';

const Payment = (props) => {
  return (
    <div>
      <Layout>

        
          <div className="content">
            <div className="leftside">
              <div className="tp">
                <img src={pay} alt="" id="pay" />
              </div>

            </div>


            <form className="allformulaire">
              <div className="formulaire">
                <div className="title">
                  Payment
                </div>
                <div className="card">
                  <div>pay with credit card</div>
                  <div><img src={visa} alt="" id="ccard" /></div>
                </div>

                <form className="form_container">
                  <div className="ccn">credit card number</div>
                  <input placeholder="card number" />



                  <div className="exp">
                    Expiration
                    <div className='datexp'>
                      <input className="exmonth" placeholder="month" />
                      <input className="exyear" placeholder="year" />
                    </div>
                  </div>


                  <div className="cvc">
                    CVC/CW
                    <div className="fcode">
                      <input className="code" placeholder="code" />
                      <div>3 or 4 digits code</div>


                    </div>
                  </div>

                  <div className="button_container">
                    <button className='btn'>pay now</button>
                    <div className="cancel"><a href="programs">cancel Payment</a></div>

                  </div>


                </form>

              </div>
            </form>
          </div>
        
      </Layout>
    </div >
  )
};

export default Payment;
