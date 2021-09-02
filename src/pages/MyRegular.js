import React from 'react'
import LoanForm from '../components/LoanForm'
import RegularInfo from '../components/Regular/RegularInfo'
import RegularResult from '../components/Regular/RegularResult'

const MyRegular = ({onAdd, loans}) => {
    return (
        <div>
        
            <RegularInfo/>  
            <RegularResult loans={loans}/>          
            <LoanForm onAdd={onAdd}/>
    
         
            
            
        </div>
    )
}

export default MyRegular
