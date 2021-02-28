import React, { Component } from 'react';



class StockPosting extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

 
  deletePosting = () => {
    console.log('deleted!');
    this.props.delete(this.props.id);
  }

  render() {
    

    return (
      <div>
        <p>{this.props.open}</p>
        <p>{this.props.close}</p>
      </div>
    )
  }
}

export default StockPosting;