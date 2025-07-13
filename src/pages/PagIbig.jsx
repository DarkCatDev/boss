import React from "react";
import '../assets/Phone.css';
import '../assets/Pc.css';
import '../assets/PagIbig.css';

import pagibig from '../img/pagibig.jpg';
import pagibigoffice from '../img/PIOffice.png';

import { Link } from 'react-router-dom';


function PagIbig(){
    return(
        <div className="container">
            <div className='head'>
                <Link to="/" className='no-underline'><h2>HOME</h2></Link>
            </div>
            <div className="phone">
                <div className="embossed-layer">
                    <p>Pag-Ibig Home Development Mutual Funds, isa sa mga requirements para sa work. Bago ka mag punta sa office nila sa Goa, mag online application muna para di hassle pabalik-balik. </p>
                    <img src={pagibig} alt="404" className="pagibig-pic"/>
                    <p>Pwede mo i follow yung picture sa taas. O Punta ka sa link na to at ingat sa pag fillout. Check mo lang lagi if tama ang na type.</p>
                    <Link to='https://www.pagibigfundservices.com/virtualpagibig/'><button id="home-buttons" className="wrap">https://www.pagibigfundservices.com/virtualpagibig/</button></Link>
                    <p>Click mo yung be a member. Then Register, tulad ng sabi sa picture.</p>
                </div>

                <div className="embossed-layer">
                    <p>After mo mag fillout, makaka receive ka ng email from Pag-Ibig regarding sa RTN o Registered Tracking Number mo. Keep mo lang and wag mo i delete kasi importante yan. </p>
                    <p>It will take at least 3 work days para ma accomodate ka nila kaya punta ka nalang after nung 3 work days or later.</p>
                </div>

                <div className="embossed-layer">
                    <img src={pagibigoffice} alt="" id="img3" />
                    <Link to='https://maps.app.goo.gl/mSnRWdaUMR6jqx3i6'><button id="home-buttons" className="wrap">https://maps.app.goo.gl/mSnRWdaUMR6jqx3i6</button></Link>
                    <p><b>Address: 3 Gov Jose T. Fuentebella National Hwy</b></p>
                    <p>katabi lang siya ng Partido College. Kunting lakad lang.</p>
                    <p>Pag umaga hangang madaling araw, tapat siya ng araw kaya dapat may payong ka para di mainitan. Mahina din ang internet sa loob. </p>
                </div>

                <div className="embossed-layer">
                    <p>Pag dating dun, ipakita mo lang sa guard RTN mo at bibigyan ka nun ng form na susulatan mo. Di ba, ang daming forms HAHA. And after fillout, waiting nalang until bigyan ka ng MDI o Member's Data Form.</p>
                    <p>Umalis agad ako kasi wala naman sinabi yung guard na further instructions haha, pero according sa friends ko, sinabihan sila ma magbayad through Gcash Pay Bills ng Php 200 gamit ang RTN nila.</p>
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

export default PagIbig;