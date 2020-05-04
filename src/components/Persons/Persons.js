import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component   {
  // static getDerivedStateFromProps(props,state) {
  //   return state;
  // }

  // componentWillReciveProps(props) {
  //   console.log('[Persons.js] componentWillReciveProps', props);
  // }



  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(){
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return {message: 'snapshot'};
  }

  // componentWillUpdate(){

  // }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('[Persons.js] componentDidUpdate ');
    console.log(snapshot);
  }

  render(){
  console.log('[Persons.js] rendering... ');
   return this.props.persons.map((person,index) =>{
        
      return( <Person 
        click={() =>this.props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id }
        changed={(event) =>this.props.changed(event,person.id)} />
      )
      });
    };
}

export default Persons;