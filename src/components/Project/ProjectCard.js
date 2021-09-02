import React from 'react'

const ProjectCard = ({project}) => {
    const interest = project.principal * (project.duration /2) * 0.01
    const payback = interest + parseInt(project.principal)
    const deduction = (payback/ parseInt(project.duration)).toFixed(2)
    return (
        <div className="results">
             <div>
                 <p>Interest</p>      
            {interest}
            </div>

            <div>
                <p>Total Payback</p>
            {payback}
            </div> 

            <div>
                <p>Monthly Deduction</p>
            {deduction}
            </div> 
            
        </div>
    )
}

export default ProjectCard
