import React from "react";
import '../assets/Phone.css';
import '../assets/Pc.css';
import '../assets/PhilHealth.css';

import PhilHealthPic from '../img/PhilHealthPic.png';
import { Link } from 'react-router-dom';


function PhilHealth(){
    return(
        <div className="container">
            <div className='head'>
                <Link to="/" className='no-underline'><h2>HOME</h2></Link>
            </div>
            <div className="phone">
                <div className="embossed-layer">
                    <p>Sa PhilHealth naman, madali lang basta meron kang required documents. Sabi ka lang sa window regarding sa pag register or membership for PhilHealth at bibigyan ka ng form.</p>
                    <img src={PhilHealthPic} alt="404" id="img4"/>
                    <Link to="https://maps.app.goo.gl/CtrZ6vehp6ryqsjY6"><button id="home-buttons">https://maps.app.goo.gl/CtrZ6vehp6ryqsjY6</button></Link>
                    <p><b>Address: MFXQ+J89, Goa, Camarines Sur</b></p>
                </div>
                <div className="embossed-layer">
                    <p>May library sa 2nd floor at pwede ka dun maki gamit ng table para mag fillout ng form. Dun din ako ng fillout. Although madalas sarado pag lunch time at weekends    .</p>
                    <p>Also, dapat alam mo din ang information ng parents and siblings mo. Including Full name, Birth date and age. </p>
                </div>
                <div className="embossed-layer">
                    <p>Photocopy of Birth certificate and back to back ID with signature is also needed. Although di siya dagsain ng tao, pero meron padin pila pa minsan minsan. Tyempo nalang kung maka punta ng walang pila.</p>
                </div>
            </div>

            <div className="bc-links">
                <Link to="/start"><button id="home-buttons">
                    Return
                </button></Link>
            </div>

            <div className="pc">

            </div>
        </div>
    )
}

export default PhilHealth;