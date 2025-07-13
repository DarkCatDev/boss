import React from 'react';
import '../assets/Phone.css';
import '../assets/Pc.css';
import '../assets/Home.css';
import { Link } from 'react-router-dom';

import kawaii from '../img/kawaii.gif'

function Home(){
    return(
        <div className="main">
            <div className="phone">
                <div className='mess'>
                    <img src={kawaii} alt="404" />
                        <p>Congrats boss!!! Malapit ka na magtapos ng College! You are now one step closer into the real world. Hope this website helps you in your journey, Boss Ja.</p>
                </div>
                <div className="info">
                    <Link to="/start"><button id="home-buttons">
                        Preparation for Job Seeking
                    </button></Link>
                    <Link to="/outside"><button id="home-buttons">
                        Living Outside Province
                    </button></Link>
                </div>
            </div>
            <div className="pc">
                <h1>PC</h1>
            </div>
        </div>
    )
}

export default Home;