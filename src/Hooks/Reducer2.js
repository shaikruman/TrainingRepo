import React, { useReducer } from 'react'

export default function Reducer2() {
    const myCustomFunction = (a, b) => {
        
        if (b==="Inc"){
            return ++a;
        }
        else return --a;
        

    }
    var [x, updX] = useReducer(myCustomFunction, 100);
  return (
    <div  style={{textAlign: "center", marginTop: "200px", }}>
        {x}
        <br>
        </br>
      <input type='button' value="Increment" onClick={()=> {updX("Inc") }} className='btn btn-success' style={{padding:"20px"}}></input>
      <input type='button' value="Decrement" onClick={()=> {updX("Dec") }} className='btn btn-danger' style={{padding:"10px"}}></input>
    </div>
  )
}
