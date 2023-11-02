import React, { useState } from 'react'

export default function Operationassign() {
    var [n1, nn1] = useState(0);
    var [n2, nn2] = useState(0);
   
    var n4 = Number(n1)+Number (n2);
   


    var [n3, updn3] = useState(0);
    function fun1 (){
        alert("hiiii")
        
        updn3(n4);
    }
    function fun2 ( e) {
        console.log(n4)
        updn3(e.target.value)
    }
    
  return (
    <div style={{textAlign: "center", marginTop: "200px"}}>
        <h1>Number 1</h1>
      <input type='number' value={n1} onChange={(e)=> {  nn1(e.target.value) }}></input>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1>Number 2</h1>
      <input type='number' value={n2} onChange={(e)=> {  nn2(e.target.value) }}></input>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1>Result</h1>
      <input type='number' value={n3} onChange={fun2}></input>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <input type='button' value="Addition" onClick={fun1}></input>
      <br></br>
      <br></br>
      <input type='button' value="Subtraction"></input>
      {n4}


    </div>
  )
}
