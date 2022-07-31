
import '../styles/signin.css'
// import login from'../photos/login.svg'
import { useEffect, useState } from 'react';
import Button from '../components/buttonall';
import Layout from '../layout/mainlayout'
import axios from 'axios'
import booking from '../imgs/booking.png'
import { Link,useNavigate } from 'react-router-dom';
import Select from 'react-select'


const Booking = (props) => {

    var initRes = {
        programId: "",
        datein: "",
        dateout: "",
        name: "",
        adultnum: "",
        kidsnum: "",
        email: "",
        phoneNumber: "",
    };

    const options = [
        { value: 'Green forest', label: 'green forest' },
        { value: 'Mountain and river', label: 'mountain and river' },
        { value: 'Desert', label: 'desert' }
    ]


    const navigate = useNavigate()
    const [reservation, setReservation] = useState(initRes);
    const [errors, setError] = useState("")
    const sendData = async () => {
        await axios.post("http://localhost:5000/reservation/", reservation).then(result => {
            navigate("/payment")
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
                            <img src={booking} alt="error" id='signimg' />

                        </div>
                        <div className="formIn">
                            <div className='see'>
                                <div className='titlIn'> book now</div>
                                {errors && <h1>{errors}</h1>}
                                <div><Select options={options} placeholder="select a camp program" onChange={(e) => {console.log(e)
                                    setReservation({ ...reservation, programId: e.value });}} />
                                </div>
                                <div><input type="text" placeholder="name of responsable" className='inpt' onChange={(e) => { setReservation({ ...reservation, name: e.target.value }); }} /></div>
                                <div><input type="text" placeholder="check in :dd/mm/yyyy" className='inpt' onChange={(e) => { setReservation({ ...reservation, datein: e.target.value }); }} /></div>
                                <div><input type="text" placeholder="check out :dd/mm/yyyy" className='inpt' onChange={(e) => { setReservation({ ...reservation, dateout: e.target.value }); }} /></div>
                                <div><input type="text" placeholder="adults number" className='inpt' onChange={(e) => { setReservation({ ...reservation, adultnum: e.target.value }); }} /></div>
                                <div><input type="text" placeholder="kids number" className='inpt' onChange={(e) => { setReservation({ ...reservation, kidsnum: e.target.value }); }} /></div>
                                <div><input type="text" placeholder="email" className='inpt' onChange={(e) => { setReservation({ ...reservation, email: e.target.value }); }} /></div>
                                <div><input type="text" placeholder="phone number" className='inpt' onChange={(e) => { setReservation({ ...reservation, phoneNumber: e.target.value }); }} /></div>

                                <div className='btns'>
                                    <button className='btnbook' onClick={sendData}>BOOK</button>
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

