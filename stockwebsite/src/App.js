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
    this.handleClick = this.handleClick.bind(this);
  }


  stockData = this.state.data



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


  chooseStock = (stockName) =>{
    //when I choose a certain stock from the dropdown menu, save its name as a variable
    //call Meria's method on stockName
    stockName.fetchData();
    stockName.renderData();
  }

   handleClick(event) {
    this.setState ={ isLoggedIn: true} 
    console.log("button clicked")
    
  }

  render() {

    const onChangeFunction = (event) => {
      console.log(event.target.value);
      document.addEventListener("keyup", function(event) {
        if (event.code === 'Enter') {
          var username = event.target.value
          this.setState = ({ isLoggedIn: true });
          console.log(this.state.isLoggedIn);
        }
      return username
      });

    }

    if(this.state.isLoggedIn === true) {
      console.log(this.state.isLoggedIn);
      console.log("true option");
      // var sayHello = 'welcome' + username
      return (
        <div className = "App-header">
  

      <DropdownButton id="dropdown-item-button" title="Add a Stock">
      <Dropdown.Item as="button" onClick = {()=>this.chooseStock("AAPL")}>AAPL</Dropdown.Item>
      <Dropdown.Item as="button" onClick = {()=>this.chooseStock("NFLX")}>NFLX</Dropdown.Item>
      <Dropdown.Item as="button" onClick = {()=>this.chooseStock("PNRA")}>PNRA</Dropdown.Item>
      
      </DropdownButton>

   

          <p className="Title">A Bear of a Project</p>
          <p className="Title-line">______________</p>

          {/* <h1>{ sayHello }</h1> */}

          
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
          <input type="text" onChange={onChangeFunction}/>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

          

  
       
    <Stock data = {this.state.data}/>
    <button onClick = {this.fetchData}>click to fetch data</button>
    {this.renderData()}
   </div>
  
        );
    }
    
    
  }
}

    
  
  




    

    
  
  



export default App;