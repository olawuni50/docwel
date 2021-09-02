import React from 'react'
import CommodityInfo from '../components/Commodity/CommodityInfo'
import CommodityList from '../components/Commodity/CommodityList'
import LoanForm from '../components/LoanForm'

const CommodityPage = ({onAdd, commodities}) => {
    return (
        <div>
           
            <CommodityInfo/>
            <CommodityList commodities = {commodities}/>
          <LoanForm onAdd={onAdd}/>
            
        </div>
    )
}

export default CommodityPage
