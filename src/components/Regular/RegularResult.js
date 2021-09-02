import React from 'react'
import RegularCard from './RegularCard'

const RegularResult = ({loans}) => {
    const renderRegular = loans.map((loan) =>{
        return(
            <RegularCard loan={loan} key={loan.id}/>
        )
    })

    
    return (
        <div>
            {renderRegular}

        </div>
    )
}

export default RegularResult
