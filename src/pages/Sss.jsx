import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/Phone.css';
import '../assets/Pc.css';
import '../assets/Sss.css';
import office from '../img/pic.png';
import cute from '../img/cute.gif';


function SSS(){
    return(
        <div className="container">
            <div className='head'>
                <Link to="/" className='no-underline'><h2>HOME</h2></Link>
            </div>
            <div className="phone">
                <div className="embossed-layer">
                    <p>Before going to the office of SSS, request for an SS number first online. Because you'll only have to return again since it takes time to fill out the online form, and SSS is usually packed with people.</p>
                    <p>Link to SSS site: <Link to="https://www.sss.gov.ph/become-an-sss-member/"><button id="home-buttons">
                    https://www.sss.gov.ph/become-an-sss-member/
                </button></Link> </p>
                    <p>Note! If you are going to fill out the form, it is best to use a browser. If it is opened through messenger or social media, and the app is closed while your email address is already type. The system or site may assume you are still filling out the form and may not be able to use your email address. </p>
                    
                </div>
                <div className="embossed-layer">
                    <p>After filling it out, you'll receive an email from SSS regarding a link to the site for another form to fillout. This time, it will be most of your personal informations. Don't be afraid filling it out.</p>
                    <p>After completing the second form, you need to check your information thoroughly. If satisfied, save and download your forms. You'll need it when you go to the SSS Office</p>
                    <p>The SSS office is located inside the Municipal Hall of San Jose. </p>
                    <img src={office} alt="404" id='img1'/>
                    <Link to="https://maps.app.goo.gl/zX3G7ScPE6JYitdaA"><button id="home-buttons">
                    https://maps.app.goo.gl/zX3G7ScPE6JYitdaA
                    </button></Link>
                    <p></p>
                </div>

                <div className="embossed-layer">
                    <p>The hall is usually packed with people and it is advisible to be early. But don't skip breakfast or lunch if you are going in the afternoon.</p>
                    <p><img src={cute} alt="404" id="img2"/></p>
                    <p>But before joing the queue, print the SSS form you have acquired and have it photocopy at least 1. prepare photocopy of your Birth Certificate and Photocopy of Valid Id with signature on it. Also, on the upper right corner of the photocopy documents except the SSS form and its copy, write the SS number which is in the SSS form.</p>
                    <p>The queue may take a while so prepare snacks and water para di ka magutom at mauhaw. Also prepare entertainment in your phone so you won't get bored if you went alone.</p>
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

export default SSS;