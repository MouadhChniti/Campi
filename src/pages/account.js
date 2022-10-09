import { useEffect, useState } from 'react';
import '../styles/account.css';
import { Link,useNavigate } from 'react-router-dom';
import Layout from '../layout/mainlayout';
import Buttons from '../components/buttonall';
import axios from 'axios'
import usericon from '../imgs/img4.png'




const Account = (props) => {
    const navigate = useNavigate()
    const disconnectt = () => {
        localStorage.setItem("token", "")
        navigate("/signin")

    }




    return (
        <div>
            <Layout>
                <div className='allaccount'>
                    <div className='publicdata'>
                        <div className='profileimg'>
                            {/* <div className='circleimg'> */}
                            <img src={usericon} />
                            {/* </div> */}

                        </div>
                        <div className='profilepublic'>
                            <div className='userdata'>
                                my profile
                            </div>

                            <div className='userdata'>
                                UserName
                                
                            </div>

                            <div className='userdata'>
                                Email
                            </div>
                            <button className='btndisconnect' onClick={disconnectt}>sign out</button>

                        </div>
                        <div className='editbtn'>

                        </div>

                    </div>
                    <div className='otherdata'>
                        <div className='privatedata'>
                            <div className='userdata'>
                                password
                            </div>

                            <div className='userdata'>
                                phone Number
                            </div>

                            <div className='userdata'>
                                Email
                            </div>

                        </div>

                        <div className='reservationdata'>
                            <div className='userdata'>
                                list of camp programs booked
                            </div>
                        </div>

                    </div>

                </div>

            </Layout>
        </div>
    )
};

export default Account;
