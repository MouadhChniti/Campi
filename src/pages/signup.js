
import '../styles/signin.css'
// import login from'../photos/login.png'
import { Link } from 'react-router-dom';
import Layout from '../layout/mainlayout';
import { useState, useEffect } from 'react';
import sign from '../imgs/img4.png'
import axios from 'axios'
const Signup = (props) => {


    var initUser = {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        password: "",
        confirmPassword: "",
    };


    const [user, setUser] = useState(initUser);
    const sendData = async () => {
        let result = await axios.post("http://localhost:5000/user/signup/",user);
        console.log(result);
    };



    
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
                                <div><input type="text" placeholder="firstname" className='inpt' onChange={(e) => { setUser({ ...user, firstName: e.target.value }); }} /></div>
                                <div><input type="text" placeholder="lastname" className='inpt' onChange={(e) => { setUser({ ...user, lastName: e.target.value }); }} /></div>
                                <div><input type="text" placeholder="phone number" className='inpt' onChange={(e) => { setUser({ ...user, phoneNumber: e.target.value }); }} /></div>
                                <div><input type="text" placeholder="mail : ex@gmail.com" className='inpt' onChange={(e) => { setUser({ ...user, email: e.target.value }); }} /></div>
                                <div><input type="text" placeholder="password" className='inpt' onChange={(e) => { setUser({ ...user, password: e.target.value }); }} /></div>
                                <div><input type="text" placeholder="confirm password" className='inpt' onChange={(e) => { setUser({ ...user, confirmPassword: e.target.value }); }} /></div>
                                <div className='btns'><button className='btnsign' onClick={sendData}>connexion </button>
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