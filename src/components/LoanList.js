import React from 'react'
import LoanCard from './LoanCard'

const LoanList = ({loans}) => {

const renderList = loans.map((loan) =>{

    return(
        <LoanCard loan={loan} key={loan.id}/>
    )
})
    return (
        <div>
            <div>
            {renderList}
            </div>
            
        </div>
    )
}

export default LoanList
