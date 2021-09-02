import React, {useState, useEffect} from 'react'
import { Nav, NavContainer, NavMenu,
    NavItem, NavLinks, MobileIcon } from './NavElement'
    import { FiAlignRight} from "react-icons/fi"

const NavBar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = ()=> {
        if(window.scrollY >=80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll", changeNav)
    }, [])


    return (
        <Nav scrollNav={scrollNav}>
        <NavContainer>
            
            <MobileIcon>
                 <FiAlignRight onClick={toggle}/>
             </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to="/" scrollNav={scrollNav}>Home</NavLinks>
                </NavItem>
                
                <NavItem>
                    <NavLinks to="/services" scrollNav={scrollNav}>Services</NavLinks>
                </NavItem>

                <NavItem>
                    <NavLinks to="/about" scrollNav={scrollNav}>About Us</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="/contacts" scrollNav={scrollNav}>Contacts</NavLinks>
                </NavItem>               
            </NavMenu>
            </NavContainer>
            </Nav>
    )
}

export default NavBar
