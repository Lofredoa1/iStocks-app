import React from "react"
import { Link } from "react-router-dom"

const Header = (props) => {
    return (
        <div className="nav">
            <Link to="/">
                <div className="logo">iStocks</div>
            </Link>
            <Link to="/stocks">
                <div>Stocks</div>
            </Link>
            <Link to="/about">
                <div>About</div>
            </Link>
        </div>
    )
}

export default Header