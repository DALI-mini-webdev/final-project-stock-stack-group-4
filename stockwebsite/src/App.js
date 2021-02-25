import './App.css';
import axios from 'axios';
import {Component} from 'react';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }

  fetchData = () =>{
    
    axios.get("https://www.alphavantage.co/query", {
      params:{ 
         function: "TIME_SERIES_DAILY_ADJUSTED",
         symbol: "IBM", //this can be changed depending on which stock we want
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

  render() {
    return (
      <div>
        <p className="App-header">A Bear of a Project</p>
        <p className="App-body">Username:</p>
        <p className="App-body">Add a Stock:</p>

        <button onClick = {this.fetchData}>click to fetch data</button>
        {this.renderData()}
      
      </div>


    );
  }
}

export default App;