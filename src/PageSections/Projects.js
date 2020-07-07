import React from 'react'
import {Link} from 'react-scroll'

import '../CSS/ProjectsCSS.scss'

const Projects = () => {

    const github = require('../images/github-logo.png')
    const linkedin = require('../images/linkedin-letters.png')
    
    return (
        <div id="projects">
            <div className="page-left">
                <div className="page-header">Projects</div>
                <div id="proj-box">
                    <div className="proj1">
                        <div className="proj1-title">Tropic</div>
                        <div className="proj-text">
                            This app is built with a Ruby on Rails backend and React.js frontend. The app looks to inform users of the wide benefits of tropical fruit and veg. Authentication is implemented into the app to avoid any malicious activity along with serialized API for cleaner frontend-backend communication.
                        </div>
                        <div id="proj1-img"/>
                        <div id="proj1-links">
                            <p>Frontend</p>
                            <a  href="https://github.com/petersampson010/Tropic-frontend"><img src={github} target="_blank" className="github"></img></a>
                            <a  href="https://github.com/petersampson010/Tropic-backend"><img src={github} target="_blank" className="github"></img></a>
                            <p>Backend</p>
                        </div>
                        <div className="proj1-bot"></div>
                    </div>
                    <div className="proj2">
                        <div className="proj2-title">Guess Who</div>
                        <div className="proj-text">
                            Classic children's board game bought online, users play against the computer to guess who! I applied React conditional rendering to create single page functionality. Whilst also using React state to track user input, passing information to components via props. I formulated all CSS to bring the game to life.
                        </div>
                        <div id="proj2-img"/>
                        <div id="proj1-links">
                            <p>Frontend</p>
                            <a  href="https://github.com/petersampson010/GuessWho---frontend"><img src={github} target="_blank" className="github"></img></a>
                            <a  href="https://github.com/petersampson010/GuessWho---backend"><img src={github} target="_blank" className="github"></img></a>
                            <p>Backend</p>
                        </div>
                        <div className="proj2-bot"></div>
                    </div>
                    <div className="proj3">
                    <div className="proj3-title">Secret Santa</div>
                        <div className="proj-text">
                        The frontend of this app is  purely Javascript and no React. Users log on, join friends' groups and purchase gifts to ensure quality gift giving for work, school or family secret santas. All products are scraped from Amazon so anything is accessible.
                        </div>
                        <div id="proj3-img"/>
                        <div id="proj1-links">
                            <p>Full Project</p>
                            <a  href="https://github.com/petersampson010/Secret-Santa-Project"><img src={github} target="_blank" className="github"></img></a>
                        </div>
                        <div className="proj3-bot"></div>

                </div>

                </div>
            </div>
            <div className="page-line"></div>
                <div className="page-right">
                    <div className="links">
                        <Link className="link" to="profile" smooth={true} duration={1000}>Profile</Link>
                        <Link className="link" to="education-career" smooth={true} duration={1000}>Education & Career</Link>
                        <Link className="link" to="contact" smooth={true} duration={1000}>Contact</Link>
                    </div>
                </div>
            
        </div>
    )
}

export default Projects