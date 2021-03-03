import React, {Component} from 'react';
import './Stocks.css';
import DropdownButton from 'react-bootstrap/DropdownButton';

class Stock extends Component{
    constructor(props){
        super(props);
        this.state = { };
    }

    changeState = () =>{
        this.setState({percentChange: this.props.data});
    }

    render(){
        return(
            <div className="stock">
            <p>Stock: {this.props.name}</p>
            <p className="stockText">The stock's opening value is {this.props.open}</p>
            <p className="stockText">The stock's closing value is {this.props.close}</p>
            </div>
        )
    }
}
export default Stock;