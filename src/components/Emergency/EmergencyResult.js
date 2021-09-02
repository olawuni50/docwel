import React from 'react'
import EmergencyCard from './EmergencyCard'

const EmergencyResult = ({emergencies}) => {
    const renderEmergency = emergencies.map((emergency) =>{
        return(
            <EmergencyCard emergency={emergency} key={emergencies.id}/>
        )
    })
    return (
        <div>
            {renderEmergency}       
            
        </div>
    )
}

export default EmergencyResult
