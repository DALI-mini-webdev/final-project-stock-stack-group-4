import './App.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {Component} from 'react';
import StockBoard from './components/StockBoard';
import Stock from './components/Stock';
import React from 'react';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: false,
      data: []
    }
  }


  // stockData = this.state.data



  fetchData = () =>{
    
    axios.get("https://www.alphavantage.co/query", {
      params:{ 
         function: "TIME_SERIES_DAILY_ADJUSTED",
         symbol: "IBM", //this can be changed depending on which stock we want
         //^^^^ this can be a variable, and be based on what we choose from the dropdown menu
         apikey: "1WKONX2HMTRYF2JO",
   }})

    .then(res => {
      
      this.setState({data: res.data["Time Series (Daily)"]})
      this.setState({data: this.state.data["2020-09-30"]})
      //date can be changed later 
     
     
    })
    .catch((error) => {
      console.log(error);
    })
  }

  renderData = () => {
    if (this.state.data){
      console.log("inside if")
      console.log(this.state.data)
     
      return(
        <div>
          
          Open: {this.state.data["1. open"]}
        </div>
      )
    } else{
      console.log("no data")
      return null
    }
  }

  handleClick = (event) => {
    this.setState({ isLoggedIn: true})
    console.log("button clicked")
    
  }

  onChangeFunction = (event) => {
    this.setState({username: event.target.value})
  }

  chooseStock = (stockName) =>{
    stockName.fetchData();
    stockName.renderData();
  }


  chooseStock = (stockName) =>{
    //when I choose a certain stock from the dropdown menu, save its name as a variable
    //call Meria's method on stockName
    stockName.fetchData();
    stockName.renderData();
  }


  render() {

    if(this.state.isLoggedIn === true) {
      console.log(this.state.isLoggedIn);
      console.log("true option");
      var sayHello = 'welcome, ' + this.state.username
      return (
        <div className = "App-header">
          
          
          <p className="Title">A Bear of a Project</p>
          <p className="Title-line">______________</p>

          <h1 className="Welcome">{ sayHello }</h1>

          <br></br>
          <br></br>

      <DropdownButton id="dropdown-item-button" title="Add a Stock">
      <Dropdown.Item as="button" onClick = {()=>this.chooseStock("AAPL")}>AAPL</Dropdown.Item>
      <Dropdown.Item as="button" onClick = {()=>this.chooseStock("NFLX")}>NFLX</Dropdown.Item>
      <Dropdown.Item as="button" onClick = {()=>this.chooseStock("IRBT")}>IRBT</Dropdown.Item>
      <Dropdown.Item as="button" onClick = {()=>this.chooseStock("UPWK")}>UPWK</Dropdown.Item>
      <Dropdown.Item as="button" onClick = {()=>this.chooseStock("FVRR")}>FVRR</Dropdown.Item>
      <Dropdown.Item as="button" onClick = {()=>this.chooseStock("RDFN")}>RDFN</Dropdown.Item>
      <Dropdown.Item as="button" onClick = {()=>this.chooseStock("BYND")}>BYND</Dropdown.Item>
      <Dropdown.Item as="button" onClick = {()=>this.chooseStock("ETSY")}>ETSY</Dropdown.Item>
      <Dropdown.Item as="button" onClick = {()=>this.chooseStock("TDOC")}>TDOC</Dropdown.Item>
      <Dropdown.Item as="button" onClick = {()=>this.chooseStock("ZG")}>ZG</Dropdown.Item>
      <Dropdown.Item as="button" onClick = {()=>this.chooseStock("ZM")}>ZM</Dropdown.Item>
      <Dropdown.Item as="button" onClick = {()=>this.chooseStock("PINS")}>PINS</Dropdown.Item>
      <Dropdown.Item as="button" onClick = {()=>this.chooseStock("ROKU")}>ROKU</Dropdown.Item>
      <Dropdown.Item as="button" onClick = {()=>this.chooseStock("MELI")}>MELI</Dropdown.Item>
      <Dropdown.Item as="button" onClick = {()=>this.chooseStock("ISRG")}>ISRG</Dropdown.Item>
      <Dropdown.Item as="button" onClick = {()=>this.chooseStock("AMZN")}>AMZN</Dropdown.Item>
      <Dropdown.Item as="button" onClick = {()=>this.chooseStock("ARKG")}>ARKG</Dropdown.Item>
      <Dropdown.Item as="button" onClick = {()=>this.chooseStock("SPCE")}>SPCE</Dropdown.Item>
      <Dropdown.Item as="button" onClick = {()=>this.chooseStock("CLOV")}>CLOV</Dropdown.Item>
      <Dropdown.Item as="button" onClick = {()=>this.chooseStock("IPOE")}>IPOE</Dropdown.Item>
      <Dropdown.Item as="button" onClick = {()=>this.chooseStock("MSFT")}>MSFT</Dropdown.Item>
      <Dropdown.Item as="button" onClick = {()=>this.chooseStock("GOOG")}>GOOG</Dropdown.Item>
      <Dropdown.Item as="button" onClick = {()=>this.chooseStock("FB")}>FB</Dropdown.Item>
      <Dropdown.Item as="button" onClick = {()=>this.chooseStock("TSLA")}>TSLA</Dropdown.Item>
      <Dropdown.Item as="button" onClick = {()=>this.chooseStock("TSM")}>TSM</Dropdown.Item>
      <Dropdown.Item as="button" onClick = {()=>this.chooseStock("JPM")}>JPM</Dropdown.Item>
      <Dropdown.Item as="button" onClick = {()=>this.chooseStock("WMT")}>WMT</Dropdown.Item>
      <Dropdown.Item as="button" onClick = {()=>this.chooseStock("PYPL")}>PYPL</Dropdown.Item>
      
      </DropdownButton>

      <Stock data = {this.state.data}/>
    <button onClick = {this.fetchData}>click to fetch data</button>
    {this.renderData()}

          

          
          <button  onClick = {this.fetchData}>click to fetch data</button>
          {this.renderData()}
  


          <p className="App-body">Add a Stock:</p>
          <Stock />
          <DropdownButton class="Button-style" id="dropdown-item-button" title="Add a Stock">
          <Dropdown.Item as="button">AAPL</Dropdown.Item>
          <Dropdown.Item as="button">NFLX</Dropdown.Item>
          <Dropdown.Item as="button">PNRA</Dropdown.Item>
          </DropdownButton>

          <StockBoard></StockBoard>
  
          <br></br>
          <p></p>
  
        </div>
      )}

    if(this.state.isLoggedIn === false) {
      console.log(this.state.isLoggedIn);
      console.log("false option");
      return(
          <div className = "App-header">
  
          <p className="Title">A Bear of a Project</p>
          <p className="Title-line">______________</p>
  
  
          
          <p className="Name-enter">Enter your username below:</p>
          <input type="text" onChange={this.onChangeFunction}/>
          <br></br>
          <button className="Submit-button" onClick={this.handleClick}> Submit </button>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
       
    
   </div>
  
        );
    }
    
    
  }
}


export default App;