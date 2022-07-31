
import '../styles/signin.css'
// import login from'../photos/login.svg'
import { useEffect, useState } from 'react';
import Button from '../components/buttonall';
import Layout from '../layout/mainlayout'
import axios from 'axios'
import sign from '../imgs/img4.png'
import { Link, useNavigate } from 'react-router-dom';
const Signin = (props) => {


    var initUser = {
        email: "",
        password: "",
    };

    const navigate = useNavigate()
    const [user, setUser] = useState(initUser);
    const [errors, setError] = useState("")
    const sendData = async () => {
        await axios.post("http://localhost:5000/user/signin/", user).then(result => {
            localStorage.setItem("token", result.data.token)
            navigate("/home")
        }).catch(err => {
            setError(err.response.data.msg)
        })
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
                                <div className='titlIn'> sign in</div>
                                {errors && <h1>{errors}</h1>}
                                <div><input type="text" placeholder="ex@gmail.com" className='inpt' onChange={(e) => { setUser({ ...user, email: e.target.value }); }} /></div>
                                <div><input type="text" placeholder="password" className='inpt' onChange={(e) => { setUser({ ...user, password: e.target.value }); }} /></div>
                                <div className='btns'>
                                    <button className='btnsign' onClick={sendData}>connexion</button>
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

