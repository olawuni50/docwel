import React from 'react'

const ExamCard = ({exam}) => {
    const interest = exam.principal * (0.02)
    const deduction = ((exam.principal/exam.duration) + interest).toFixed(2)
    const totalAmount = (deduction * exam.duration).toFixed(2)
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
            {totalAmount}
            </div>
            
        </div>
    )
}

export default ExamCard
