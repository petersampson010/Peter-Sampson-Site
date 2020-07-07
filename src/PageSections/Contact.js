import React from 'react'
import {Link} from 'react-scroll';

import '../CSS/ContactCSS.scss'

const Contact = () => {

    const github = require('../images/github-logo.png')
    const linkedin = require('../images/linkedin-letters.png')

    return (
        <div id="contact">
            <div className="page-left">
                <div className="page-header">Contact Me</div>
                <div id="contacts">
                    <a href="https://github.com/petersampson010"><img src={github} target="_blank" className="contact-link"/></a>
                    <a href="https://www.linkedin.com/in/peter-sampson-86ab05145/"><img src={linkedin} target="_blank" className="contact-link"/></a>
                </div>
                <div id="or-text">..or email me on:</div>
                <div id="email">petersampson010@gmail.com</div>
            </div>
            <div className="page-line"></div>
            <div className="page-right">
                <div className="links">
                    <Link className="link" to="profile" smooth={true} duration={1000}>Profile</Link>
                    <Link className="link" to="projects" smooth={true} duration={1000}>Projects</Link>
                    <Link className="link" to="education-career" smooth={true} duration={1000}>Education & Career</Link>
                </div>
            </div>
        </div>
    )
}

export default Contact