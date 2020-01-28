import React, {useState} from 'react'

const Profile = () => {

    const [javascript, setJavascript] = useState(false)
    const [ruby, setRuby] = useState(false)
    const [sql, setSql] = useState(false)
    const [github, setGithub] = useState(false)
    const [react, setReact] = useState(false)
    const [html, setHtml] = useState(false)


    return (
        <div>
            <div className="profile">
                <div className="profile-left">
                    <h1 className="profile-header">Peter Sampson</h1>
                    <p className="profile-para">"Do not go gentle into that good night; Old age hould burn and rave at close of day. Rage, rage against the dying of the light" - Dylan Thomas</p>
                    <div className="skills"> 
                        <div onMouseEnter={() => setJavascript(true)} onMouseLeave={() => setJavascript(false)} className={javascript ? "javascript-a" : "javascript-l"}>Competent in Javascript; manipulating the DOM and communicating with external servers</div>
                        <div onMouseEnter={() => setSql(true)} onMouseLeave={() => setSql(false)} className={sql ? "sql-a" : "sql-l"}>Worked with sqlLite3 and Postgres on various projects</div>
                        <div onMouseEnter={() => setRuby(true)} onMouseLeave={() => setRuby(false)} className={ruby ? "ruby-a" : "ruby-l"}>Experienced with Ruby and Ruby on Rails framework as either frontend or backend API</div>
                        <div onMouseEnter={() => setHtml(true)} onMouseLeave={() => setHtml(false)} className={html ? "html-a" : "html-l"}>Capable of writing pure HTML along with dynamically designing sites using custome CSS</div>
                        <div onMouseEnter={() => setReact(true)} onMouseLeave={() => setReact(false)} className={react ? "react-a" : "react-l"}>Able to utilize react framework; class components, functional components, hooks and state</div>
                        <div onMouseEnter={() => setGithub(true)} onMouseLeave={() => setGithub(false)} className={github ? "github-a" : "github-l"}>Consistently using GitHub to contribute to others and my own work</div>
                    </div>
                </div>
                <div className="page-line"></div>
                <div className="profile-right">
                    <p>Education</p>
                    <p>Projects</p>
                    <p>Careers</p>
                    <p>Contact</p>
                </div>
            </div>
            <div className="down-arrow">▼</div>
        </div>
    )
}

export default Profile