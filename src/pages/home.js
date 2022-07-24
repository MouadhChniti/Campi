import { useEffect, useState } from 'react';
import '../styles/home.css';
import facebook from '../imgs/facebook.png'
import instagram from '../imgs/instagram.png'
import twitter from '../imgs/twitter.png'
import logoo from '../imgs/logo.png'
import menu_icon from '../imgs/menu_icon.png'
import Navb from '../components/navbar'
import { Link } from 'react-router-dom';
import Layout from '../layout/mainlayout';
import Buttons from '../components/buttonall';
import axios from 'axios'




const Home = (props) => {

  // const instance = axios.create({
  //   baseURL: 'https://jsonplaceholder.typicode.com',
  //   timeout: 1000
  // })


  // const firstfunc = async () => {
  //   let result = await instance.get("/todos")
  //   console.log(result.data)
  //   setdata(result.data)
  // };

  // const [data, setdata] = useState([])


  // useEffect(() => {
  //   firstfunc();
  // },
  //   []);

  return (
    <div>
      <Layout>
        <div className='home'>
          <div className='ff'>
            <div className="parag1">Detox your mind in our environnemt</div>
            <div className="parag2">A great night at Lavie Camping Land, where to escape city life and bring you to get in touch with nature</div>
            <div className="gn">
              <div className="cp">
                <Link to="/programs">Check our programs</Link>
              </div>

            </div >
            {/* {  data.map((item,index) => {
             return <div>{item.title}</div >
              })
              } */}
            {/* <Buttons name="hellow !   " className="" action={()=> console.log("hello world!") } ></Buttons> */}
          </div>



        </div>

      </Layout>
    </div>
  )
};

export default Home;
