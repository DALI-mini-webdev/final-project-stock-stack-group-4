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
      isLoggedIn: true,
      username: '',
      data: [], 
    }
    this.handleClick = this.handleClick.bind(this);
    
  }


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
    this.setState ={isLoggedIn: true} 
    console.log("button clicked")
  

  }

  

  onChangeFunction = (event) => {
    this.setState({username: event.target.value})

  }



  render() {

    
    console.log(this.state.isLoggedIn)
    if(this.state.isLoggedIn === true) {
      console.log(this.state.isLoggedIn);
      console.log("true option");
      // var sayHello = 'welcome' + username
      return (
        <div className = "App-header">
  
          <p className="Title">A Bear of a Project</p>
          <p className="Title-line">______________</p>

          {/* <h1>{ sayHello }</h1> */}

          
          <button onClick = {this.fetchData}>click to fetch data</button>
          {this.renderData()}
  

          <p className="App-body">Add a Stock:</p>
          <Stock />
          <DropdownButton class="Button-style" id="dropdown-item-button" title="Add a Stock">
          <Dropdown.Item as="button">AAPL</Dropdown.Item>
          <Dropdown.Item as="button">NFLX</Dropdown.Item>
          <Dropdown.Item as="button">PNRA</Dropdown.Item>
          </DropdownButton>

        

          <StockBoard username={this.state.username}></StockBoard>
  
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
          <br></br>
          <br></br>
          <br></br>
          <br></br>

          </div>
  
        )
    }
    
    }
  }



export default App;