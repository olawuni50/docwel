import React from 'react'

const BusinessCard = ({business}) => {
   
    const interest = business.principal * (business.duration/2) * 0.01
    const payBack = (parseInt(business.principal) + interest).toFixed(2)
    const credit = parseInt(business.principal) - interest
    const deduction = (business.principal / business.duration).toFixed(2)

    return (
        <div className="business">
        <div className="results">
            <div>
            <p>Interest</p>
            <div>{interest}</div>
            </div>

            <div>
            <p>Montly Deduction</p>
            {deduction}
            </div>

            <div>
            <p>Total Payback</p>
            <div>{payBack}</div>
            </div>

        </div>
        <p> <span style={{color:"red", fontSize:"1.5rem"}}>!</span> 
        The interest of {interest} will be deducted from the principal before disbursement,
        thus, you will credited {credit}, monthly deduction will commence (Moratorium)
        months after loan is disbursed.</p>
        </div>
    )
}

export default BusinessCard
