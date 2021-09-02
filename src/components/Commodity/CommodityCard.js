import React from 'react'

const CommodityCard = ({commodity}) => {
    const interest = commodity.principal * 0.1
    const payBack = (parseInt(commodity.principal) + interest).toFixed(2)
    const deduction = (payBack / parseInt(commodity.duration)).toFixed(2)
    return (
        <div className="results">
            <div>
            <p>Interest</p>
            <div>{interest}</div>
            </div>

            <div>
            <p>Total Payback</p>
            <div>{payBack}</div>
            </div>

            <div>
            <p>Monthly Deduction</p>
            <div>{deduction}</div>
            </div>


            
        </div>
    )
}

export default CommodityCard
