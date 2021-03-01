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
      data: []
    }
  }

  
  render() {
    return (

     
      <div className = "App-header">
      

      <p>A Bear of a Project</p>

    
      <p className="App-body">Username:</p>
      
      <DropdownButton id="dropdown-item-button" title="Add a Stock">
      <Dropdown.Item as="button">AAPL</Dropdown.Item>
      <Dropdown.Item as="button">NFLX</Dropdown.Item>
      <Dropdown.Item as="button">PNRA</Dropdown.Item>

      </DropdownButton>


      <StockBoard></StockBoard>

      </div>
  
    )
      
    
    }
  }

export default App;