import React, {useState} from 'react'
import About from '../Components/About'
import Education from '../Components/Education'

const Page1 = () => {

    return (
        <div className="page1">
            <About/>
            <div className="page-line"></div>
            <Education/>
        </div>
    )
}

export default Page1