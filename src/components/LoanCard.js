import React from 'react'

const LoanCard = ({loan}) => {
    return (
        <div>
            <div>{loan.principal}</div>
            <div>{loan.interest}</div>
            <div>{loan.duration}</div>
            
        </div>
    )
}

export default LoanCard
