import React from 'react'
import BusinessForm from '../components/Business/BusinessForm'
import BusinessInfo from '../components/Business/BusinessInfo'
import BusinessList from '../components/Business/BusinessList'


const BusinessPage = ({onAdd, businesses}) => {
    return (
        <div>
     
            <BusinessInfo/>
            <BusinessList businesses={businesses}/>
           <BusinessForm onAdd={onAdd}/>
            
        </div>
    )
}

export default BusinessPage
