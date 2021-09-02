import React from 'react'
import LoanForm from '../components/LoanForm'
import ProjectInfo from '../components/Project/ProjectInfo'
import ProjectResult from '../components/Project/ProjectResult'

const ProjectPage = ({onAdd, projects}) => {
    return (
        <div>
    
            <ProjectInfo/>
            <ProjectResult projects={projects}/>
            <LoanForm onAdd={onAdd}/>
            
        </div>
    )
}

export default ProjectPage
