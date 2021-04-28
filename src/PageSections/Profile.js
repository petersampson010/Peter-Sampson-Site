import React, {useState} from 'react'
import {Link} from 'react-scroll';

import About from '../Components/About';
import '../CSS/ProfileCSS.scss'

const Profile = () => {

    const [javascript, setJavascript] = useState(false)
    const [ruby, setRuby] = useState(false)
    const [sql, setSql] = useState(false)
    const [github, setGithub] = useState(false)
    const [react, setReact] = useState(false)
    const [html, setHtml] = useState(false)
    const [java, setJava] = useState(false)
    const [redux, setRedux] = useState(false)
    const [jest, setJest] = useState(false)
    const [reactNative, setReactNative] = useState(false)


    // const 

    return (
            <div id="profile">
                <div className="page-left">
                    <div id="header">Peter Sampson</div>
                    <div id="skills"> 
                        <div onMouseEnter={() => setJavascript(true)} onMouseLeave={() => setJavascript(false)} id={javascript ? "javascript-a" : "javascript-l"}>Competent in Javascript; manipulating the DOM and communicating with external servers</div>
                        <div onMouseEnter={() => setSql(true)} onMouseLeave={() => setSql(false)} id={sql ? "sql-a" : "sql-l"}>Worked with sqlLite3 and Postgres on various projects</div>
                        <div onMouseEnter={() => setReact(true)} onMouseLeave={() => setReact(false)} id={react ? "react-a" : "react-l"}>Able to utilize react framework; class components, functional components, hooks and state</div>
                        <div onMouseEnter={() => setHtml(true)} onMouseLeave={() => setHtml(false)} id={html ? "html-a" : "html-l"}>Capable of writing pure HTML along with dynamically designing sites using custom CSS</div>
                        <div onMouseEnter={() => setRuby(true)} onMouseLeave={() => setRuby(false)} id={ruby ? "ruby-a" : "ruby-l"}>Experienced with Ruby and Ruby on Rails framework as either frontend or backend API</div>
                        <div onMouseEnter={() => setGithub(true)} onMouseLeave={() => setGithub(false)} id={github ? "github-a" : "github-l"}>Consistently using GitHub to contribute to others and my own work</div>
                        <div onMouseEnter={() => setReactNative(true)} onMouseLeave={() => setReactNative(false)} id={reactNative ? "reactNative-a" : "reactNative-l"}>Familiar with React Native programming, having created multiple mobile apps in my spare time</div>
                        <div onMouseEnter={() => setJest(true)} onMouseLeave={() => setJest(false)} id={jest ? "jest-a" : "jest-l"}>Experienced in testing Javascript code with Jest's testing framework</div>
                        <div onMouseEnter={() => setRedux(true)} onMouseLeave={() => setRedux(false)} id={redux ? "redux-a" : "redux-l"}>Gained good experience in working with Redux to simplify personal React projects</div>
                        <div onMouseEnter={() => setJava(true)} onMouseLeave={() => setJava(false)} id={java ? "java-a" : "java-l"}>Capable in Java programming language with emphasis on efficienct code</div>
                    </div>
                    <div id="profile-text-img">
                        <img src={require('../images/me2.jpeg')} alt="image of myself here" id="my-image"/>
                        <About/>
                        <img src={require('../images/me.jpeg')} alt="image of myself here" id="my-image"/>
                    </div>
                    <div className="page-break"></div>
                </div>
                <div className="page-line"></div>
                <div className="page-right">
                    <div className="links">
                        <Link className="link" to="projects" smooth={true} duration={1000}>Projects</Link>
                        <Link className="link" to="education-career" smooth={true} duration={1000}>Education & Career</Link>
                        <Link className="link" to="contact" smooth={true} duration={1000}>Contact</Link>
                    </div>
                </div>
            </div>
    )
}

export default Profile