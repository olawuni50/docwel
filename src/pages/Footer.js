import React from 'react'
import {AiFillHome} from "react-icons/ai"
import {GoListUnordered} from "react-icons/go"
import {Link} from "react-router-dom"


const Footer = () => {
    return (
        <div className="footer">
            <Link to="/" className="link">
            <AiFillHome />
            </Link>

            <Link to="/select" className="link">
            <GoListUnordered/>
            </Link>
            
        </div>
    )
}

export default Footer
