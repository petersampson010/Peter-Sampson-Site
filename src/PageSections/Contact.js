import React from 'react'

import '../CSS/ContactCSS.scss'

const Contact = () => {

    const github = require('../images/github-logo.png')
    const linkedin = require('../images/linkedin-letters.png')

    return (
        <div id="contact">
            <h3 className="contact-head">Find me on:</h3>
            <div className="contacts">
                <a  href="https://github.com/petersampson010"><img src={github} target="_blank" className="github"></img></a>
                <a className="linkedin" href="https://www.linkedin.com/in/peter-sampson-86ab05145/"><img src={linkedin} target="_blank" className="linkedin"></img></a>
            </div>
        </div>
    )
}

export default Contact