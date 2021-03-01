import React, {Component} from 'react';

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
            <div>
            <p>will return stock's percent increase or decrease</p>
            <p>the stock's percent change is {this.state.percentChange}</p>
            </div>
        )
    }
}
export default Stock;