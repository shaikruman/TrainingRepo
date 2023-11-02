import React, { useEffect, useState } from 'react'

export default function Hook() {

    var [x, updX] = useState(100);
    const fun1 = () => {
        console.log("fun executed")
    }
    

    useEffect(function(){
       fun1() 
    },[] );
    useEffect(function(){
        console.log("variable x updated") 
    },[x>107])
  return (
    <div>
      <input type='button' value="Click me" onClick={()=>{updX(x+1)}}></input>
      <br></br>
      {x}
    </div>
  )
}
