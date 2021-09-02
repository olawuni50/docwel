import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectResult = ({projects}) => {

    // const myPrincipal = projects.map((loan) => loan.principal)
    // const duration = projects.map((loan) => loan.duration)

    // const myInterest = myPrincipal * (duration/2) * 0.01
    // const totalPayBack = parseInt(myPrincipal) + parseInt(myInterest)
    const renderLoan = projects.map((project)=>{
        return(
          <ProjectCard project={project} key={project.id}/>
        )
    })

    


    return (
        <div>
            {/* <div>
            <p>Interest</p>
                </div>

            <div>
            <p>Total Payback</p>
   
            </div> */}

            {renderLoan}
            
        </div>
    )
}

export default ProjectResult

