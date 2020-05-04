import React, {Component} from 'react'
import classes from './Person.css'
// import Radium from 'radium';

class Person extends Component {
    render(){   
    console.log('[Person.js] rendering...')
    return(
    // const style ={
    //     '@media (min-width : 500px)':{
    //         width:'450 px'
        
    
    // <div className="Person" style={style}>
    <div className={classes.Person} >
        <p onClick={this.props.click} >
            HI!! I am {this.props.name} and i am {this.props.age} years old</p>
        <p>{this.props.children }</p>
        <input 
        type="text"
         onChange={this.props.changed}
          value={this.props.name}></input>
    </div>
    
    );
};
}



  
// export default Radium(person);
export default Person ;  