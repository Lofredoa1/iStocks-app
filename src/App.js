import React from "react"
import './App.css';
import Header from "./components/header"
import Main from "./pages/main"
import StockData from "./pages/stock-data";


function App(props) {
  return (
    <div className="App">
      <Header />
      <Main StockData={StockData}/>
    </div>
  );
}

export default App;
