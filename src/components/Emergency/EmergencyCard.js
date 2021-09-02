import React from 'react'

const EmergencyCard = ({emergency}) => {
    const interest = emergency.principal * (0.025)
    const payBack = (parseInt(emergency.principal) + interest).toFixed(2)
    const deduction = (payBack / emergency.duration).toFixed(2)
    return (
        <div className="results">
           <div>
            <p>Interest</p>
            {interest}
            </div>

            <div>
            <p>Montly Deduction</p>
            {deduction}
            </div>

            <div>
            <p>Total Payback</p>
            {payBack}
            </div> 
        </div>
    )
}

export default EmergencyCard
