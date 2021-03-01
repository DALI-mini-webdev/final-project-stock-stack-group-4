import React, {Component} from 'react';
import './Stocks.css';

class Stock extends Component{
    constructor(props){
        super(props);
        this.state = {percentChange: ''};
    }

    changeState = () =>{
        this.setState({percentChange: this.state.data});
    }

    render(){
        return(
            <div className="stock">
            <p>stock: {this.props.name}</p>
            <p>the stock's percent change is {this.state.percentChange}</p>
            <p>the stock's opening value is {this.props.open}</p>
            <p>the stock's closing value is {this.props.close}</p>
            </div>
        )
    }
}
export default Stock;