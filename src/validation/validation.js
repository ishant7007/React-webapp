import React from 'react';

const validation= (props) =>{
    return(
        <div>
            {
                props.inputLength <1 ?
                <h1> YOU'VE   DELETED   EVERYTHING ,PLEASE ADD A FEW DATA</h1>:
                <p></p>
            }
        </div>
    );
};

export default validation;
