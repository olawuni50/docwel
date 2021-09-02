import React from 'react'
import imgg from "../Images/doc.png"
import {Link} from "react-router-dom"


const Home = () => {
    return (
        <div className="home">
            <h6>OBAFEMI AWOLOWO UNIVERSITY TEACHING HOSPITAL (OAUTHC)</h6>
            <img src={imgg} alt="doctor"/>
            <h2>
                Doctor's Co-Operative investment and credit society limited (a.k.a. Doctor's Welfare)
            </h2>

            <Link to ="/select">
            <button>Get Started</button>
            </Link>
            
        </div>
    )
}

export default Home
