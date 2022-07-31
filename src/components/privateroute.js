import { useState, useEffect } from "react"
import { Navigate } from 'react-router-dom'
import axios from 'axios';

const Provider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const CheckMe = async () => {
        await axios.post("http://localhost:5000/user/me/", {}, {
            headers: {
                authorization: localStorage.getItem('token')
            }
        }).then(res => {
            console.log(res)
            setUser(res.data)
            setLoading(false)
        }).catch(err => {
            setLoading(false)
            console.log(err)
        })
    }
    useEffect(() => {
        CheckMe()
    }, [])


    return <>
        {loading == true ? <h1>Loading ...</h1> : <>

            {user ? children : <Navigate to="/signin" />}
        </>}
    </>
}
export default Provider;
