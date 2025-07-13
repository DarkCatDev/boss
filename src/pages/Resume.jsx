import React from "react";
import '../assets/Phone.css';
import '../assets/Pc.css';

import cute from '../img/cute.gif'

import { Link } from 'react-router-dom';


function Resume(){
    return(
        <div className="container">
            <div className='head'>
                <Link to="/" className='no-underline'><h2>HOME</h2></Link>
            </div>
            <div className="phone">
                <div className="embossed-layer">
                    <p>This is my personal insights about creating a Resume base sa experience and sa tips sakin ng ibang tao. Also nag research din ako kahit papano.</p>
                </div>
                <div className="embossed-layer">
                    <p>Recommended na 1 page lang ang resume, pero max na ang 2 pages. If more than 2 pages, pwedeng di pansinin ng HR or Hiring Manager kasi tatamarin yan sa pagbasa. Less is more, kung baga. Just pick what you think is needed sa work na aapplyan mo.</p>
                    <p>When it comes to the Design or Format of the Resume, mag dedepende yan sa field of work. If nasa field ka na naka focus sa output, design, or graphics, okay gumamit ng Modern Resume. Yung may design, color, at di masyadong formal. </p>
                    <p>When it comes to IT and CS field, or other fields na focus on outputs, having a portfolio is an advantage. It showcases and prove na yung skills na nilagay mo sa Resume is real. But if not output related naman ang field na aapplyan, just Skillset and Job History is fine. </p>
                </div>
                <div className="embossed-layer">
                    <p>Hindi na masyado importante mag lagay ng picture sa resume, pero I still do it. If you think it would be beneficial to put or not, nasa sayo na yan. </p>
                    <p>Ang usual na nakalagay sa Resume is the following</p>
                    <p>
                        <ul>
                            <li>Full Name</li>
                            <li>Address</li>
                            <li>Phone Number</li>
                            <li>Email Address</li>
                            <li>Background/Summary</li>
                            <li>Education</li>
                            <li>Work Experience</li>
                            <li>Skills(Hard skills and Soft Skills)</li>
                            <li>Projects(Optional)</li>
                            <li>Certifications(Optional)</li>
                            <li>Character Reference(Optional)</li>
                        </ul>
                    </p>
                </div>
                <div className="embossed-layer">
                    <p>For address, maganda ilagay yung address na tutuloyan mo if malayo ang work place from home address. Or pwede ka rin mag lagay ng dalawang address, isang home address at isang current address.</p>
                    <p>Regarding sa phone number, it is best na ang ilagay dito is not personal number. You must have a separate number for work purposes. Pero it's not required. Just for safety and privacy din.</p>
                    <p>Same goes with Email Address. Para ang work emails hindi mag mix sa personal emails at walang matatabunan. Parang yung University Email lang. </p>
                    <p>Sa Summary naman, it's more about you and your aspirations about working. Something that would catch the Hiring Manager's attention. </p>
                    <p>Educational Background naman, hindi mo kailangang lahatin mula elementary. Just the recent ones is enought, kahit nga college lang okay na. Just indicate the course, date started and graduated, name ng university, at address nito.</p>
                    <p>In Work Experience or Work History, pwede mo ilagay yung On-The-Job Training mo which is advisable. And dapat, included dito ang Name of Company, your job title, Date of OJT from start to finish, and mga contributions o nagawa mo sa time na yun (Just the highlights).</p>
                    <p>Sa Skills, importante na divided siya sa dalawa which is the Hard Skills and Soft Skills. Hard skills is yung mga natututunan like Coding, Microsoft Office Word or Video Editting, and Softskills are built in na saiyo which could be problem solving or hard working. </p>
                </div>
                <div className="embossed-layer">
                    <p>Like stated earlier, Projects are optional kapag di naman output based ang work. Kung programmer ka, hahanahap ka talaga ng projects. Pero kung hindi naman, not needed.</p>
                    <p>Certifications naman is mga na accomplish mo through workshop or contest. Like, nanalo ka sa isang contest or nag aral ka ulit ng quick course which indicates na may skills ka talaga sa work related skills na yun. As long as related siya, goods yan. </p>
                    <p>Bihira din nowadays ang Character References sa resume, pero ensure ka lang ng tatlo na hindi relatives kasi needed yan once goods na for Job Application.</p>
                </div>
                <div className="embossed-layer">
                    <p>Para naman magkaroon ng higher chance of getting hired, you can make an application or cover letter. This shows that you are really interested for the position you are applying.</p>
                    <p>I'll also share this canva presentation ng faculty namin para mas clear.</p>
                    <Link to="https://www.canva.com/design/DAGXAGSBT_w/6imBputtrFeCgJ8WJFZtQw/view?utm_content=DAGXAGSBT_w&utm_campaign=designshare&utm_medium=link&utm_source=editor&fbclid=IwY2xjawLgpVxleHRuA2FlbQIxMABicmlkETExRzNmdGgzQWZDa1RsYVJWAR6akAmr47V9me5MEmmB46hEaFTy2qHYLDWXcnEbS4vt9tZH59mUaXR3O-wV7Q_aem_f5dSqXRdu7gSh1UnOxrOew#1"><button id="home-buttons"className="wrap">https://www.canva.com/design/DAGXAGSBT_w/6imBputtrFeCgJ8WJFZtQw/view?utm_content=DAGXAGSBT_w&utm_campaign=designshare&utm_medium=link&utm_source=editor&fbclid=IwY2xjawLgpVxleHRuA2FlbQIxMABicmlkETExRzNmdGgzQWZDa1RsYVJWAR6akAmr47V9me5MEmmB46hEaFTy2qHYLDWXcnEbS4vt9tZH59mUaXR3O-wV7Q_aem_f5dSqXRdu7gSh1UnOxrOew#1</button></Link>
                    <p>Hope this helps you!!!</p>
                    <img src={cute} alt="404" />
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

export default Resume;