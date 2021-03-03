import React, {Component} from 'react';
import './Stocks.css';

class Stock extends Component{
    constructor(props){
        super(props);
        this.state = {percentChange: ''};
    }

    changeState = () =>{
        this.setState({percentChange: this.props.data});
    }

    render(){
        return(
            <div className="stock">
            <p>Stock: {this.props.name}</p>
            <p className="stockText">The stock's percent change is {this.state.percentChange}</p>
            <p className="stockText">The stock's opening value is {this.props.open}</p>
            <p className="stockText">The stock's closing value is {this.props.close}</p>
            </div>
        )
    }
}
export default Stock;