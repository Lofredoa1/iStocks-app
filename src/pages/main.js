import React from "react"
import { Route, Switch } from "react-router-dom";
import Home from "./home"
import About from "./about"
import Dashboard from "./dashboard";
import StockData from "./stock-data";

import Stock from "./stock";

const Main = (props) => {

    return   <div>  
    <Switch>
        <Route exact path="/" component={Home}/>      
        <Route path="/about" component={About}/>
        <Route 
            path="/stocks/:symbol"
            render={(routerProps) => <Stock {...routerProps} StockData={StockData}/>}
            />
        <Route 
            path="/stocks" 
            render={props => <Dashboard {...props} StockData={StockData}/>}
            />
      </Switch>
      </div>
}

export default Main