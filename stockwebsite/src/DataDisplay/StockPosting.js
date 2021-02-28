import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class StockPosting extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    deletePosting = () => {
        this.props.delete(this.props.id)
        console.log("deleted")
    }


    //this'll add a new stock
    //hmm, need to figure out how to make it added based on drop down menu
    submit = () => {
        var newName = {
            name:this.state.newTitle
        }
        this.props.save(this.props.id, newName);
        this.setState({editing: false});
    }



    //you should need to enter in the password to do this
    save = (id, field) => {
        this.setState({cats:this.state.cats.update(id, (n) => { return Object.assign({}, n, field); })})
    }

    render()
        {
return(

    <div>
        <p>{this.props.name}, {this.props.state}</p>
        <button onClick={this.submit}> add stock to portfolio</button>
        <button onClick={this.deletePosting}>Delete stock from portfolio </button>
       
    </div>
)
        }

    



    }

export default StockPosting;