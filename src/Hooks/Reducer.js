import React from 'react'
import {useReducer} from 'react';


export default function Reducer() {
    var val = 100;

    function myCustomFunction(first, second){
        alert(first)
        alert(second)
    }  

    const [x, updX] = useReducer(myCustomFunction, val);  // meanign is, whenever x value is updated, a function named CustomFunction is called, whose arguments are: 1st argument is old value, 2md-new value
    const ButtonHandler=()=> {
        updX(200);
    }
  return (
    <div style={{textAlign: "center", marginTop: "100px"}}>
      <input type='button' value="Click me" className='btn btn-danger' onClick={()=> ButtonHandler()}></input>
    </div>
  )
}
