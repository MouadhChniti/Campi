
import './styles/App.css';
import Home from './pages/home';
import Switch from './try';
import Prog from './pages/programs';
import Payment from './pages/payment';
import Page404 from './pages/errorpage';
import Footerb from './components/footer';
import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './pages/signup';
import Signup from './pages/signup';
import Signin from './pages/signin';
import Booking from './pages/booking';
import Contactus from './pages/contactus';
import Aboutus from './pages/aboutus';
import Provider from './components/privateroute';





const App = () => {
  // let valeur = "hello"
  // console.log("hey")


  // const [valeur1, setvaleur1] = useState("")
  // const changeval1 = (event) => {
  //   setvaleur1(event.target.value)
  // };

  // const [valeur2, setvaleur2] = useState("")
  // const changeval2 = (event) => {
  //   setvaleur2(event.target.value)
  // };

  // const [valeur3, setvaleur3] = useState("")
  // const changeval3 = (event) => {
  //   setvaleur3(event.target.value)
  // };
  // const aff = (event) => {
  //   console.log(event.target.value)
  //   setvaleur1(event.target.value)
  //   setvaleur2(event.target.value)
  //   setvaleur3(event.target.value)
  // }


  // const changeval = () => {

  // }


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/try" element={<Switch />} />
        <Route path="/home" element={
          <Provider><Home /></Provider>
        } />
        <Route path="/programs" element={<Prog />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="*" element={<Page404 />} />
        <Route path="/footer" element={<Footerb />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/aboutus" element={<Aboutus/>} />
        
        

      </Routes>
    </BrowserRouter>

  );
}

export default App;
