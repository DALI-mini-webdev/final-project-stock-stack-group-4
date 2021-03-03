import React, {Component} from 'react';
import './Stocks.css';
import DropdownButton from 'react-bootstrap/DropdownButton';

class Stock extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        };
    }

    deletePosting = () => {
        console.log('deleted!');
        this.props.delete(this.props.id, this.props.name);
      }

    render(){
        const percentChange = (((this.props.close - this.props.open) / this.props.open) * 100).toFixed(3);
        return(
            <div className="stock">
            <p className="stockNameText">Stock: {this.props.name}</p>
            <p className="stockText">The stock's percent change is {percentChange} %</p>
            <p className="stockText">The stock's opening value is {this.props.open}</p>
            <p className="stockText">The stock's closing value is {this.props.close}</p>
            
            </div>
        )
    }
}

export default Stock;