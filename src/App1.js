// import React, { useState } from 'react';
// import './App.css';
// import Person from './Person/Person';

// const App = (props)=>{
//     const [personsState, setPersonsState]=useState({
//         persons: [
//           {name:'max',age:28},
//           {name:'manu', age:30},
//           {name : 'roy', age:29}
//         ],
//         otherstate: 'some other values'
//       });

//       const switchNameHandler = ()=>{
//         // console.log('was clicked');
//         setPersonsState ({
//           persons: [
//           {name:'maxhsdjd',age:28},
//           {name:'manudcbx', age:30},
//           {name : 'roynxcm', age:29}
//         ]});
//     };
//     return (
//       <div className ="App">
//         <h1>My First React Code</h1>
//         <p>This is really working!</p>
//         <button onClick={switchNameHandler}>hello mofo</button>
//         <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
//         <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Racing </Person>
//         <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
//       </div>
//     );
//   }


// export default App;
