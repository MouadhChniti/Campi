
import '../styles/signin.css'
// import login from'../photos/login.svg'
import { useEffect, useState } from 'react';
import Button from '../components/buttonall';
import Layout from '../layout/mainlayout'
import axios from 'axios'
import booking from '../imgs/booking.png'
import { Link } from 'react-router-dom';
import Select from 'react-select'


const Booking = (props) => {
    const options = [
        { value: 'Green forest', label: 'green forest' },
        { value: 'Mountain and river', label: 'mountain and river' },
        { value: 'Desert', label: 'desert' }
      ]


    return (
        <div>
            <Layout>
                <div className='allInn'>
                    <div className='allIn'>
                        <div className='imgIn'>
                            <img src={booking} alt="error" id='signimg' />

                        </div>
                        <div className="formIn">
                            <div className='see'>
                                <div className='titlIn'> book now</div>
                                <div><Select options={options} placeholder="select a camp program"/></div>
                                <div><input type="text" placeholder="name of responsable" className='inpt'/></div>
                                <div><input type="text" placeholder="check in :dd/mm/yyyy" className='inpt'/></div>
                                <div><input type="text" placeholder="check out :dd/mm/yyyy" className='inpt'/></div>
                                <div><input type="text" placeholder="adults number" className='inpt'/></div>
                                <div><input type="text" placeholder="kids number" className='inpt'/></div>
                                <div><input type="text" placeholder="email" className='inpt'/></div>
                                <div><input type="text" placeholder="phone number" className='inpt'/></div>
                                
                                <div className='btns'>
                                    <Link to="/payment"><button className='btnbook' >BOOK</button></Link>
                                    <div><Link to="/programs">cancel</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>

    )
}

export default Booking;

