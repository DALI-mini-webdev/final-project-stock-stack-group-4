import React, { Component } from 'react';
import Firebase from '../firestore/index';
import Stock from './Stock';
import axios from 'axios';
import './Stocks.css';
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>


class StockBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:  [],
      allStocks: [],
      name: '',
      open: '',
      close: '',
      id: 0,
      fetched: false,
      
    }
  }

  deleteStockInfo = async (id, name) => {
    axios.get("https://www.alphavantage.co/query", {
        params:{ 
           function: "TIME_SERIES_DAILY_ADJUSTED",
           symbol: name, //the stock we want, passed as a parameter 
           apikey: "1WKONX2HMTRYF2JO",
     }})
  
      .then(res => {
    //needs to be deleted out of firebase
    Firebase.db.collection("/users/"+this.state.username+"/stocks").doc("1").delete().then(() => {
        console.log("successfully deleted!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
   });


  }

  saveStock = async (username, sName) => { 

      //username and stock Name parameters need to be filled with input from the text box and drop down
   
      axios.get("https://www.alphavantage.co/query", {
        params:{ 
           function: "TIME_SERIES_DAILY_ADJUSTED",
           symbol: sName, //the stock we want, passed as a parameter 
           apikey: "1WKONX2HMTRYF2JO",
     }})
  
      .then(res => {
            console.log(res.data)
        Firebase.db.collection("/users/"+username+"/stocks").doc(sName).set({
            open: res.data["Time Series (Daily)"]["2021-03-02"]["1. open"],
            close: res.data["Time Series (Daily)"]["2021-03-02"]["4. close"],
            id: this.state.id,
            name: sName
          }).then(ref => {
            this.setState({
              id: this.state.id + 1,
            });
            }).catch(error => {
          console.log(error.message)
          });
              
      })
      .catch((error) => {
        console.log(error);
      })
   
  }

  fetchStocks = (username) => {
    const stockList = [];
    this.setState({ButtonDisplay: "Add A Stock"})
    
    //'username' parameter needs to be something from the text box
    Firebase.db.collection('/users/' + username + '/stocks').get()
      .then(querySnapshot => {
        querySnapshot.forEach( doc => {
          console.log(doc.data());
          stockList.push(doc.data());
        })
      }).then(() => {
        this.setState({
          allStocks: stockList
        }
        
        );
        
      })
      .catch(err => {
        console.log(err.message)
      })
      
  }

  fetchData = (stock) =>{

    if (!this.state.fetched){

    axios.get("https://www.alphavantage.co/query", {
      params:{ 
         function: "TIME_SERIES_DAILY_ADJUSTED",
         symbol: stock, //the stock we want, passed as a parameter 
         apikey: "VW5DZAFLJNE2BJMT",
   }})

    .then(res => {

        //commented out for now because API has exceeded limit and doesn't work

        this.setState({data: res.data["Time Series (Daily)"]["2021-03-02"], 
        open: res.data["Time Series (Daily)"]["2021-03-02"]["1. open"], 
        close: res.data["Time Series (Daily)"]["2021-03-02"]["4. close"], fetched: true}) 

        console.log("state data: " + this.state.data)
        
    })
    .catch((error) => {
      console.log(error);
    })
    }
  }
 
  render() {
      
    console.log(this.props.stock);
    console.log("username: " +this.props.username);
      const posts = this.state.allStocks;
      const allPosts = posts.map((stock) => {
         
          return (
            <Stock classname="stockComponent"
              open= {stock.open}
              close= {stock.close}
              id={posts.id}
              delete={this.deleteStockInfo}
              name = {stock.name}
            />
          );
        }
      );
    return (
      <div>
        <p className="center"> Your Stock Board </p>
        
        <button className="addStock" onClick={() => this.saveStock(this.props.username, this.props.stock)}> Add Stock to Portfolio</button>
        <button className="deleteStock" onClick={this.deletePosting}>Delete Stock From Portfolio </button>
        <button className="refresh" onClick={() => this.fetchStocks(this.props.username)}>Refresh</button>
        <center>
        <button className="Stock-buttons" onClick={() => this.saveStock(this.props.username, this.props.stock)}> Add Stock to Portfolio</button>
        <br></br>
        <button className="center" onClick={() => this.fetchStocks(this.props.username)}>Refresh</button>
        <br></br>
        </center>
        <div className="allPosts">
        {allPosts}
        </div>
       
      </div>
    );
  }
}

export default StockBoard;