import React, { Component } from 'react';
import Firebase from '../firestore/index';
import Stock from './Stock';
import axios from 'axios';
import './Stocks.css';


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
      username: '',
    }
  }

  deletePosting = () => {
    this.props.delete(this.props.id)
    console.log("deleted")
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
  
        Firebase.db.collection("/users"+username+"stocks").doc(sName).set({
            open: res.data["Time Series (Daily)"]["2020-12-15"]["1. open"],
            close: res.data["Time Series (Daily)"]["2020-12-15"]["4. close"],
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
    
    //'username' parameter needs to be something from the text box
    Firebase.db.collection('/users' + username + 'stocks').get()
      .then(querySnapshot => {
        querySnapshot.forEach( doc => {
          console.log(doc.data());
          stockList.push(doc.data());
        })
      }).then(() => {
        this.setState({
          allStocks: stockList
        });
        
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
         apikey: "1WKONX2HMTRYF2JO",
   }})

    .then(res => {

        //commented out for now because API has exceeded limit and doesn't work
        this.setState({data: res.data["Time Series (Daily)"]["2020-12-15"], 
        open: res.data["Time Series (Daily)"]["2020-12-15"]["1. open"], 
        close: res.data["Time Series (Daily)"]["2020-12-15"]["4. close"], fetched: true})
        console.log(this.state.data)

    })
    .catch((error) => {
      console.log(error);
    })
    }
  }


 
  render() {
      
      const posts = this.state.allStocks;
      const allPosts = posts.map((stock) => {
          this.fetchData(stock);
          return (
            <Stock classname="stockComponent"
              open= {stock.open}
              close= {stock.close}
              id={posts.id}
              name = {stock.name}
            />
          );
        }
      );
    return (
      <div>
        <p className="center"> Stock Board </p>
        
        {/* right now, the user and stock passed to the "saveStock" function is hard-coded - needs
        to be changed to the input from the text box and drop down  */}
        <button className="center" onClick={this.saveStock(this.state.username, 'ACLS')}> add stock to portfolio</button>
        <button className="center" onClick={this.deletePosting}>Delete stock from portfolio </button>
       
        {/*also needs to be changed to the username from the text box instead of hard coded*/ }
       
       
        {this.fetchStocks(this.props.username)}
        <div className="allPosts">
        {allPosts}
        </div>
       

      
      </div>
    );
  }
}

export default StockBoard;


