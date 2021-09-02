import React from 'react'

const ProjectInfo = () => {
    return (
        <div className="info">
            <h4>Project Loan</h4>
            <p>This loan is specifically designed for members who want to 
                finace special projects. The individual who needs such loan must fulfill
                 the following conditions:</p>
            <ul>
                <li>Must have been a member of the Trust for at least 6 months</li>
                <li> Must have two gurantors who must have been 6 months or more in the Trus</li>
                <li>Can acces maximum of four times his/her savings</li>
                <li>Has maximum of <strong>12 months</strong> to pay back</li>
                <li>Interest is <strong>1%</strong> of the principal with factors of number of months considered</li>
                <li>Maximum duraton fo rpayment is <strong>24 months</strong></li>
            </ul>
        </div>
    )
}

export default ProjectInfo
