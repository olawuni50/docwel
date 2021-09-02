import styled from "styled-components"

import {Link as LinkR} from "react-router-dom"

export const Nav = styled.nav`
/* background: #05386B; */
background: ${({scrollNav})=> (scrollNav ? "#05386B" : "transparent")};
height: 60px;
margin-top: -80px;
display: flex;
justify-content: center;
align-items: center;
top:0;
position: sticky;
z-index: 10;
font-size: 1rem;
box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);

@media screen and (max-width: 960px){
    transition: 0.8s all ease;
}

`

export const NavContainer = styled.div`
display:flex;
justify-content:space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: auto;
`

export const Image = styled.img`
width:40%;
padding: 10px;

@media screen and (max-width: 768px){
    width: 100%;
}
`

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 768px){
    display: block;
    position:absolute;
    top:0;
    right:0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #C3073F;
}
`

export const NavMenu = styled.ul`
display: flex;
list-style:none;
align-items: center;
text-align:center;
margin-right: -22px;


@media screen and (max-width: 768px){
    display:none;
}
`

export const NavItem = styled.li`
height: 80px;
`

export const NavLinks = styled(LinkR)`
/* color: ${({scrollNav})=> (scrollNav ? "#fff" : "#EEE2DC")}; */
color: #333;
display: flex;
font-size: 16px;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;


&.active{
    border-bottom: 3px solid red;
}

&:hover{
    color:#fff;
}

`