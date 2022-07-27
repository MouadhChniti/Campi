
import '../styles/signin.css'
// import login from'../photos/login.svg'
import { useEffect, useState } from 'react';
import Button from '../components/buttonall';
import Layout from '../layout/mainlayout'
import axios from 'axios'
import sign from '../imgs/img4.png'
import { Link } from 'react-router-dom';
const Signin = (props) => {
    // const instance = axios.create({
    //     baseURL: 'https://jsonplaceholder.typicode.com',
    //     timeout: 1000
    // })


    // var initUser = {
    //     firstName: "",
    //     lastName: "",
    //     email: "",
    //     adress: "",
    //     type: "",
    //     password: "",
    //     passwordConfirmed: "",
    // };


    // const [user, setUser] = useState(initUser);
    // const sendData = async () => {
    //     let result = await axios.post();
    //     console.log(result);
    // };



    // onChange = (e) => {
    //     setUser({ ...user, firstName: e.target.value });
    // }




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
                                <div className='titlIn'> sign in</div>
                                <div><input type="text" placeholder="ex@gmail.com" className='inpt'/></div>
                                <div><input type="text" placeholder="password" className='inpt'/></div>
                                <div className='btns'>
                                    <button className='btnsign'>connexion</button>
                                    <div><Link to="/signup">sign up</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>

    )
}

export default Signin;

