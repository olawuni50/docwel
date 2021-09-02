import React from 'react'

const RegularCard = ({loan}) => {
    const interest = loan.principal * (loan.duration/2) * 0.01
    const payBack = (parseInt(loan.principal) + interest).toFixed(2)
    const deduction = (parseInt(loan.principal)/loan.duration).toFixed(2)
    return (
        <div className="results">
            <div>
            <p>Interest</p>
            {interest}
            </div>

            <div>
                <p>Monthly Deduction</p>
                {deduction}
            </div>

            
            <div>
                <p>Total Payback</p>
                {payBack}
            </div>
            
        </div>
    )
}

export default RegularCard
