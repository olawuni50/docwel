import React from 'react'
import CommodityCard from './CommodityCard'


const CommodityList = ({commodities}) => {
    const renderCommodity = commodities.map((commodity) =>{
        return(
            <CommodityCard commodity={commodity} key={commodity.id}/>
        )
    })


    return (
        <div>
            {renderCommodity}
        </div>
    )
}

export default CommodityList
