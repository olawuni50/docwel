import React from 'react'
import {Link} from "react-router-dom"
import img from "../Images/ph.png"

const SecondHome = () => {
    return (
        <div className="second-home">
            <h6>OBAFEMI AWOLOWO UNIVERSITY TEACHING HOSPITAL (OAUTHC)</h6>
                  <img src={img} alt="phone"/>
            <h3> Select Package:</h3>
      
            <div className="loan-package">
                <ul style={{listStyle:"square"}}>

                <Link to="/regular-loan" className="links">
            <li>Regular Loan</li>
            </Link>

            <Link to="/emergency-loan" className="links">
            <li>Emergency Loan</li>
            </Link>
            
            <Link to="/project-loan" className="links">
            <li>Project Loan</li>
            </Link>
            
            <Link to="/commodity-loan" className="links">
            <li>Commodity Loan</li>
            </Link>
            
            <Link to="/business-loan" className="links">
            <li>Business Loan</li>
            </Link>
            
            <Link to="/exam-loan" className="links">
            <li>Exam Loan</li>
            </Link>

            </ul>
            </div>
            


            
        </div>
    )
}

export default SecondHome
