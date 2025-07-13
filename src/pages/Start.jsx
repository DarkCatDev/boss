import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/Phone.css';
import '../assets/Pc.css';
import '../assets/Start.css';


function Start(){
    return(
        <div>
            <div className='head'>
                <Link to="/" className='no-underline'><h2>HOME</h2></Link>
            </div>
            <div className="phone">
                <div className="embossed-layer">
                    <p>Before we get into Job Searching, there are certain things you'll need. Aside from Transcript of Record which is provided by the university a few weeks after graduation, you will need the following.</p>
                    <ul>
                        <li>Birth Certificate</li>
                        <li>Valid ID</li>      
                        <li>Certificate of First Time Job Seeker</li>                     
                        <li>NBI Clearance</li>
                        <li>SSS</li>                        
                        <li>Pag-Ibig</li>
                        <li>Phil-Health</li>
                        <li>Resume</li>
                    </ul>
                    <p>
                        You might already have some of the mentioned documents, but the other won't take too long to get once you have the prelimanary documents.
                    </p>
                    <p>
                        Click the buttons below to redirect you to certain pages for specific documents.
                    </p>
                </div>

                <div className="links">
                    <Link to="/bc"><button id="link-buttons">
                        Birth Certificate Reminder
                    </button></Link>
                    <Link to="/vid"><button id="link-buttons">
                        Valid Identification Cards
                    </button></Link>
                    <Link to="/cftjs"><button id="link-buttons">
                        Acquiring Certificate of First Time Job Seeker
                    </button></Link>
                    <Link to="/nbi"><button id="link-buttons">
                        Acquiring NBI Clearance or Police Clearance
                    </button></Link>
                    <Link to="/sss"><button id="link-buttons">
                        Acquiring Social Security Number/SSS
                    </button></Link>
                    <Link to="/pagibig"><button id="link-buttons">
                        Acquiring Pag-Ibig Membership
                    </button></Link>
                    <Link to="/ph"><button id="link-buttons">
                        Registering for Phil-Health
                    </button></Link>
                    <Link to="/resume"><button id="link-buttons">
                        Creating a Resume
                    </button></Link>
                </div>
            </div>
            <div className="pc">
                <h1>PC</h1>
            </div>
        </div>
    )
}

export default Start;