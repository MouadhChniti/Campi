
import '../styles/signin.css'
// import login from'../photos/login.png'
import { Link } from 'react-router-dom';
import Layout from '../layout/mainlayout';
import { useState, useEffect } from 'react';
import sign from '../imgs/img4.png'
const Signup = (props) => {


    return (
        <div>
            <Layout>

                <div className='allInn'>
                    <div className='allIn'>
                        <div className='imgIn'>
                            <img src={sign} alt="error" id='signimg' />

                        </div>
                        <div className="formIn">
                            <div className='see'>

                                <div className='titlIn'> sign up</div>
                                <div><input type="text" placeholder="firstname" className='inpt' /></div>
                                <div><input type="text" placeholder="lastname" className='inpt' /></div>
                                <div><input type="text" placeholder="phone number" className='inpt' /></div>
                                <div><input type="text" placeholder="mail : ex@gmail.com" className='inpt' /></div>
                                <div><input type="text" placeholder="password" className='inpt' /></div>
                                <div><input type="text" placeholder="confirm password" className='inpt' /></div>
                                <div className='btns'><button className='btnsign'>connexion</button>
                                    <button className='cnclsign'>cancel</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </Layout >
        </div >
    );
};



export default Signup;