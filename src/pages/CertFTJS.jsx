import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/Phone.css';
import '../assets/Pc.css';
import '../assets/CertFTJS.css';


function Cert(){
    return(
        <div className="container">
            <div className='head'>
                <Link to="/" className='no-underline'><h2>HOME</h2></Link>
            </div>
            <div className="phone">
                <div className="embossed-layer">
                    <p>In order to get NBI Clearance, you'll need a Certificate of First Time Job Seeker. It also said contains a benefit of no transaction fee in requesting for NBI clearance. You can request it in your barangay.</p>                    
                    <p>There is no requirements in requesting the Certificate but you may need to properly check your full name and age that you'll give to the secretary in Barangay. It may also take a while depending on the availability of the barangay captain. It may take days so ensure you request it as soon as you are graduated and free of time.</p>
                    <p>I think barangay offices aren't open on weekends but try mo padin boss hehe</p>
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

export default Cert;