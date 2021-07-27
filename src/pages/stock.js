import React from "react"

const Stock = (props) => {
    let stock = props.StockData.filter(data => data.symbol === props.match.params.symbol)[0]
    console.log(stock)
        
    
    return <div>
        <h2>Name:{stock.name} </h2>
        <h2>Price:{stock.lastPrice}</h2>
    </div>
}

export default Stock