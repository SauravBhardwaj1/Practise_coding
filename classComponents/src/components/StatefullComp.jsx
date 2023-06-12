import { Component } from "react";

class StatefulComponent extends Component {

    //Syntax for writing stateful components

    constructor(props){
        super(props);
        
        this.state = {
            value:0,
            msg: "Clicked me"
        }
    }

    handleClick = ()=>{
        console.log(this.state.value)

        // States cannot be directly modified
        // Use this.setState to modify state

        this.setState({ value: this.state.value+1})
    }

    render(){
        return(
            <>
                <h1>Hello from {this.props.name}</h1>
                <p>{this.state.value}</p>
                <button onClick={this.handleClick}>Click me</button>
            </>
        )
    }


}

export default StatefulComponent