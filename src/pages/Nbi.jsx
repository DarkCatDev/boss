import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/Phone.css';
import '../assets/Pc.css';


import hehe from '../img/hehe.gif';

function NBI(){
    return(
        <div className="container">
            <div className='head'>
                <Link to="/" className='no-underline'><h2>HOME</h2></Link>
            </div>
            <div className="phone">
                <div className="embossed-layer">
                    <p>If you have the Certificate of First Time Job Seeker, requesting for NBI clearance should go smoothly.</p>                    
                    <p>The office of NBI should be located in San Jose, Camarines Sur. Behind the San Jose Municipal Hall.</p>
                    <p>Pero bago ka pumunta dun, need mo muna mag apply online para sa appointment. </p>
                    <Link to="https://clearance.nbi.gov.ph/"><button>https://clearance.nbi.gov.ph/</button></Link>
                    <p>Hindi pa ako nakaka asikaso dito pero update ko nalang itong site pag tapos na ako sa NBI.</p>
                </div>

                <div className="embossed-layer">
                    <p>Police Clearance was said to be not required in Job Seeking, but if you wish to get one, you'll have to request online then go to any police station near you. Na try ko lang siya nung time na nag OJT ako, and had to pay Php 300+. Nakalimutan ko na hehe.</p>
                    <div>
                        <img src={hehe} alt="404" />
                    </div>
                    <p>Update ko ito pag naalala ko ulit. hehe</p>
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

export default NBI;