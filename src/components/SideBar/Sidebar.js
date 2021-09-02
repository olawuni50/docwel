import React from 'react'
import {SidebarContainer, CloseIcon, Icon,
    SidebarWrapper, SidebarMenu, SidebarLink} from "./SideBarElement"
    

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} toggle={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                
                <SidebarMenu>
                <SidebarLink to="/" onClick={toggle}>Home</SidebarLink>
                    <SidebarLink to="/regular-loan" onClick={toggle}>Regular Loan</SidebarLink>
                    <SidebarLink to="/emergency-loan" onClick={toggle}>Emergency Loan</SidebarLink>
                    <SidebarLink to="/contacts" onClick={toggle}>Project Loan </SidebarLink>
                    <SidebarLink to="/blog" onClick={toggle}>Commodity Loan</SidebarLink>
                    <SidebarLink to="/blog" onClick={toggle}>Business Loan</SidebarLink>
                    <SidebarLink to="/blog" onClick={toggle}>Exam Loan</SidebarLink>
                </SidebarMenu>
                
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
