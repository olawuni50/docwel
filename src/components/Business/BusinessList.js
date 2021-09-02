import React from 'react'
import BusinessCard from './BusinessCard'

const BusinessList = ({businesses}) => {
    const renderBusiness = businesses.map((business) => {
        return(
            <BusinessCard business={business} key={business.id}/>
        )
    })
    return (
        <div>
            {renderBusiness}
            
        </div>
    )
}

export default BusinessList
