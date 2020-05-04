import React from 'react';
import classes from './cockpit.css';

const cockpit = (props)=>{
    const assignedClasses = []; 
    let btnClass ='';
    if (props.showPersons){
        btnClass= classes.Red;
    }
    
    if (props.persons.length <=2) {
      assignedClasses.push(classes.red);
    }
    if (props.persons.length <=1) {
      assignedClasses.push(classes.bold);
    }
     
    

return(
        <div className={classes.cockpit}>
        <h1>{props.title}</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</ p>
        <button
          // style={style}
          className={btnClass}
          onClick={props.clicked }>Toggle Persons</button>
        </div>
    );
};

export default cockpit;