import React, { Component } from 'react';
import classes from './App.css';
import Classes from '../components/cockpit/cockpit.css';
// import Radium,{StyleRoot} from 'radium';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/cockpit/cockpit';
import Validation from '../validation/validation';


class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }


  state = {
    persons: [
      {id:'1', name:'max',age:28},
      {id:'2' ,name:'manu', age:29},
      {id:'3' ,name : 'roy', age:27}
    ],
    showPersons : false
  }

  static getDerivedStateFromProps(props,state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount ');
  }
   
  togglePersonsHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  } 

  nameChangedHandler = (event,id) =>{
    const personIndex =this.state.persons.findIndex(p=>{
      return p.id === id;
    });

    const person ={
      ...this.state.persons[personIndex]
    };

    person.name= event.target.value;

    const persons =[...this.state.persons];
    persons[personIndex]= person;
    this.setState({persons : persons
    })
  }

  deletePersonHandler = (personIndex) =>{
    // const persons = this.state.persons.slice();
    const persons=[...this.state.persons];
    persons.splice(personIndex ,1);
    this.setState({persons: persons})
  }

  

  render() {
    console.log('[App.js] render ')
    // const style = {
    //   backgroundColor: 'green',
    //   color:'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor:'pointer',
    //   // ':hover':{
    //   //   backgroundColor: 'lightgreen',
    //   //   color: 'black'
      
    // };

    let persons = null;
    

    if (this.state.showPersons){
      persons = (
        <div>
          <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          />
        </div>
      );

     

      
      // style.backgroundColor= 'red';
      // style[':hover']={
      //   backgroundColor: 'salmon',
      //   color:'black'
      // }
    }
    
    
      return ( 
      // <StyleRoot>
      <div className ={classes.App}>
        <Cockpit
        title={this.props.appTitle}
        showPersons={this.state.showPersons}
        persons={this.state.persons}
        clicked={this.togglePersonsHandler}
        />
        {persons}
        <div className={Classes.oops}>
        <Validation
        inputLength={this.state.persons.length}
        />
        </div>
        
        
        
      </div>
      // </StyleRoot>
    );
  }
}
    

export default App;
// export default Radium(App);
