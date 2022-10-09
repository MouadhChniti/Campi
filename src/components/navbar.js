import { useEffect, useState } from 'react';
import '../styles/stylenav.css';
import facebook from '../imgs/facebook.png'
import instagram from '../imgs/instagram.png'
import twitter from '../imgs/twitter.png'
import logoo from '../imgs/logo.png'
import menu_icon from '../imgs/menu_icon.png'
import accimg from '../imgs/account.png'
import { Link } from 'react-router-dom';
import axios from 'axios'

const Navb = (props) => {
  // const cond=() =>{
  //  const v =localStorage.getItem("token")
  //  if(v.value!="")
  //  {document.getElementById("comp1").style.display="none"; }
  //  else{
  //   document.getElementById("comp2").style.display="none";
  //  }

  // };
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

  // useEffect (  () => {cond()} ,  [] )
  return (
    <div >

      <div className="navbar">
        <Link to="/home">
          <div className="logo">
            <img src={logoo} alt="" id="slogo" />
          </div>
        </Link>

        <div className="mininav">
          <Link to="/home">
            <li>Home</li>
          </Link>
          <Link to="/programs">
            <li>Programs</li>
          </Link>
          <Link to="/aboutus"><li>About us</li></Link>
          <Link to="/contactus"><li>Contact</li></Link>
        </div>

        <div className="social">
          <li><img src={instagram} id="instagram" /></li>
          <li><img src={facebook} id="fb" /></li>
          <li><img src={twitter} id="twitter" /></li>
          {user != null ? <Link to="/account"><li><img src={accimg} id="accimg" /></li></Link> : <Link to="/signin"><li className='sin' id='comp1'>Signin</li></Link>}



        </div>
        <div className="navbar_icon" id='comp2'><img src={menu_icon} alt="error" /></div>

      </div>


    </div>
  )
};

export default Navb;
