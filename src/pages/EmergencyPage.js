import React from 'react'
import EmergencyInfo from '../components/Emergency/EmergencyInfo'
import EmergencyResult from '../components/Emergency/EmergencyResult'
import LoanForm from '../components/LoanForm'

const EmergencyPage = ({onAdd, emergencies}) => {
    return (
        <div>
    
            <EmergencyInfo/>
            <EmergencyResult emergencies={emergencies}/>
            <LoanForm onAdd={onAdd}/>
            
        </div>
    )
}

export default EmergencyPage
