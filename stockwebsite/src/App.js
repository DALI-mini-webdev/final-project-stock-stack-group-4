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
      stock: '',
      data: [], 
    }
    this.handleClick = this.handleClick.bind(this);
    
  }



  handleClick = (event) => {
    this.setState ={isLoggedIn: true} 
    console.log("button clicked")

  }

  chooseStock = (stockName) =>{
    console.log(stockName)
    this.setState({stock: stockName})
    this.setState({username: 'Cindy'})
    
  }


  
  onChangeFunction = () => {
    //this.setState({username: event.target.value})
    this.setState({username: 'Emma'})
    console.log("state username: " + this.state.username)

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

          
  
          <p className="App-body">Add a Stock:</p>
          <Stock />
          <DropdownButton class="Button-style" id="dropdown-item-button" title="Add a Stock"  >
          <Dropdown.Item as="button" onSelect={()=>this.chooseStock('AAPL')}>AAPL</Dropdown.Item>
          <Dropdown.Item as="button" onSelect={()=>this.chooseStock('NFLX')}>NFLX</Dropdown.Item>
          <Dropdown.Item as="button" onSelect={()=>this.chooseStock('PNRA')}>PNRA</Dropdown.Item>
          </DropdownButton>
        
          <StockBoard username={this.state.username} stock={this.state.stock}></StockBoard>
          
  
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