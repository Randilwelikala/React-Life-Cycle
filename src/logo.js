import { Component } from "react";
import logo from './logo.svg';

class Logo extends Component{
    constructor(props){
        super(props);

    }

    render(){

        return(
            <>
            <img src={logo} className = "App-logo" alt ="logo-2"/>

            </>           
            
        )
    }
}

export default Logo;