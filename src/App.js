
import './styles/App.css';
import Home from './pages/home';
import Switch from './try';
import Prog from './pages/programs';
import Payment from './pages/payment';
import Page404 from './pages/errorpage';
import { useState, useEffect } from "react"
import './styles/home.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"





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
        <Route path="/home" element={<Home />} />
        <Route path="/programs" element={<Prog />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="*" element={<Page404 />} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;
