import React from "react";
import '../assets/Phone.css';
import '../assets/Pc.css';

import { Link } from 'react-router-dom';



function OutsideProvince(){
    return(
        <div className="container">
            <div className='head'>
                <Link to="/" className='no-underline'><h2>HOME</h2></Link>
            </div>
            <div className="phone">
                <p>Wala pa hahaha. Nasa Bikol pa ako eh.</p>
            </div>

            <div className="bc-links">
                <Link to="/"><button id="home-buttons">
                    Return
                </button></Link>
            </div>

            <div className="pc">

            </div>
        </div>
    )
}

export default OutsideProvince;