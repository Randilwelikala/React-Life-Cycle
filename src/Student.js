import { Component } from "react";

class Student extends Component{
    constructor(props){
        super(props);
        this.state = {year:0,color:"black"};
    }

    static getDerivedStateFromProps(nextProps, PrevState){
        console.log('getDerivedStateFromProps');
        const newYear = new Date().getFullYear() - nextProps.age;
        console.log(newYear);
        if(newYear === PrevState.Year){
            return null;
        }else{
            return({Year:newYear});
        }
            
    }

    componentDidMount(){
        console.log('ComponentDidMount');
        setTimeout(()=>{
            this.setState({color:'red'});

        },1000);
        
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log('shouldComponentUpdate');
        return true;
    }

    
    

    render(){
        
        return(
            <div style = {{backgroundColor:this.state.color}}>
                <h2>Name - {this.props.name}</h2>
                <h2>Age - {this.props.age}</h2>
                <h2>Year - {this.state.Year}</h2>
            </div>
        );
    }}



export default Student;