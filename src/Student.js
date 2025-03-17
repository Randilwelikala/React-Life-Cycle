import { Component } from "react";

class Student extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h2>Name - {this.props.name}</h2>
                <h2>Age - {this.props.age}</h2>
            </div>
        )
    }

}

export default Student;