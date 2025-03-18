import { Component } from "react";

class Search extends Component{
    constructor(props){
        super(props);

        this.state = {text:''}
    }

    onSearch = (event)=> {
        this.setState({text:event.target.value});
        this.props.onSearch(event);
    }

    render(){
        return(
            <div>
                <input type="text"onChange={this.onSearch}></input>
                <p>You Typed - {this.state.text}</p>
            </div>
        )
    }
}

export default Search;