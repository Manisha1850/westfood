import React from 'react';
import Header from '../components/Layout/Header.js';
import { Link } from "react-router-dom";
import Banner from "../images/banner.png";
import "../styles/HomeStyles.css";

const Home1 = () => {
  return (
    <>
      <Header/>
      <div className="home" >
      
        <div className="headerContainer">
          
        
          <h1>Alone we can do little,<br/>
            together we can do so much
          </h1>
          <p>We Prersha foundation manage <br/>
          wastage food donation for needy people.</p>
          <Link to="/login">
            <button>DONATE</button>
          </Link>
          <div className='image-logo'>
          <img src={Banner} alt='prersha iot'/>
        </div>
        </div>
        

      </div>
      </>
  )
}

export default Home1
