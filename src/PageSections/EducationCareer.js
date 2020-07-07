import React from 'react';
import {Link} from 'react-scroll';


import Contact from './Contact';
import '../CSS/EducationCareerCSS.scss'

const EducationCareer = () => {
    return (
            <div id="education-career">
                <div className="page-left">
                    <div className="page-header">Education & Career</div>
                    <div className="edca-section">
                        <div className="edca-title">Park Langley School for Boys</div>
                        <div id="school"></div>
                        <div className="edca-text">At school I enjoyed maths and science; particulary physics. I was also part of school sports teams where I was lucky enough to travel to Australia and South Africa in summer tours.</div>
                        <div className="edca-date">09/2006 - 06/2013</div>
                    </div>
                    <div className="edca-section">
                        <div className="edca-title">University of Birmingham</div>
                        <div id="uob"></div>
                        <div className="edca-text">I gained a BSc in Mechanical Engineering whilst at University. This was my first exposure to programming  and scientific software. I learned to produce a product that had been thoroughly tested and stylishly represented using these softwares.</div>
                        <div className="edca-date">10/2014 - 07/2017</div>
                    </div>
                    <div className="edca-section">
                        <div className="edca-title">Alpine Elements - Hotel Assistant</div>
                        <div id="alpine"></div>
                        <div className="edca-text">I spent six months in the french alps, where I was able to ski every day and enjoy a break from studying. I assisted the hotel in all areas but mainly ensuring all guests room requirements were met.</div>
                        <div className="edca-date">10/2017 - 06-2018</div>
                    </div>
                    <div className="edca-section">
                        <div className="edca-title">IDE GROUP - IT Support Specialist</div>
                        <div id="ide"></div>
                        <div className="edca-text">Whilst studying to get a job in the tech industry I supported hospital and gym staff with their day to day IT issues. Here I learnt good customer experience and technical problem solving training.</div>
                        <div className="edca-date">10/2018 - 09/2019</div>
                    </div>
                    <div className="edca-section">
                        <div className="edca-title">Flatiron School</div>
                        <div id="flatiron"></div>
                        <div className="edca-text">I graduated from the Full Stack Software Engineering program in January 2020. Learning a wide set of skills starting with Ruby and Ruby on Rails and moving onto Javascript and the React framework. Being on campus with such skilled instructors and coaches was a great inspiration. The school not only taught me the technical skills needed to be a successful programmer but also the mindset and attitude.</div>
                        <div className="edca-date">10/2019 - 01/2020</div>
                    </div>
                    <div className="edca-section">
                        <div className="edca-title">Infosys - Technology Associate</div>
                        <div id="infosys"></div>
                        <div className="edca-text">I am currently undergoing my first role as a software developer. Learning best professional practices and getting exposure to the software development life cycle. I have recieved training in Java, SQL and Adobe Experience Manager for frontend development.</div>
                        <div className="edca-date">03/2020 - Present</div>
                    </div>
                </div>
                <div className="page-line"></div>
                <div className="page-right">
                    <div className="links">
                        <Link className="link" to="profile" smooth={true} duration={1000}>Profile</Link>
                        <Link className="link" to="projects" smooth={true} duration={1000}>Projects</Link>
                        <Link className="link" to="contact" smooth={true} duration={1000}>Contact</Link>
                    </div>
                </div>
            </div>
    )

}

export default EducationCareer
