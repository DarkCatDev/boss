import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/Phone.css';
import '../assets/Pc.css';
import '../assets/Id.css';

import IdPic from '../img/id.png';

function ID(){
    return(
        <div className="container">
            <div className='head'>
                <Link to="/" className='no-underline'><h2>HOME</h2></Link>
            </div>
            <div className="phone">
                <img src={IdPic} alt="" />
                <div className="embossed-layer">
                    <p>PhylSis ID is the most suitable Valid Government ID you can have. But if you don't have it, you can also use the other Valid Ids below.</p>                    
                    <p>
                        <ul>
                            <li>UMID or Unified Multi-Purpose ID</li>
                            <li>Passport</li>
                            <li>Driver's License</li>
                            <li>PRC ID</li>
                            <li>Voter's ID</li>
                        </ul>
                    </p>
                </div>
                <div className="embossed-layer">
                    <p>If you don't have the mentioned Identification cards. You'll have to secure at least two of the folliwing in order to apply for SSS, PhilHealth or Pag-Ibig:</p>
                    <p>
                        <ul>
                            <li>Birth Certificate</li>
                            <li>Baptismal Certificate</li>
                            <li>Barangay Clearance</li>
                            <li>NBI Clearance</li>
                            <li>Transcript of Records</li>
                        </ul>
                    </p>
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

export default ID;