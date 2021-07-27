import React from "react"
import {Link} from "react-router-dom"

const Dashboard = (props) => {

    return <div className="stocks">
        {props.StockData.map((stock) => {
            const {name, symbol} = stock;

            return (
                <Link to={`/stocks/${symbol}`} key={symbol} >
                    <ul>
                        <li>{name}</li>
                    </ul>
                </Link>
            )
        })}
    </div>
    
}

export default Dashboard