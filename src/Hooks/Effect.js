import React, { useState, useEffect } from 'react'

export default function Effect() {
    var [x, updX] = useState(100);
    var [y, updY] = useState(200);
    const fun1 = () => {
         updX(2345)
         alert("it is changed slow")
         alert(x);
        }

        const fun2 = () => {
            updY(y+2);
        }
        useEffect( function(){
            alert(x);
            alert("effect of X/Y only");
            
        }, [x,y])



  return (
    <div style={{textAlign: "center", marginTop: "200px"}}>
      <h1>{x}</h1>
      <input type='button' value="Click me" className='btn btn-danger' onClick={fun1}></input>

      <input type='button' value="Click Y" className='btn btn-danger' onClick={fun2}></input>
    <h1>{y}</h1>
    </div>
  )
}

// useEffect function executes everytime the data is changed.

// we can call useEffect for specific data change, by putting that data name in square brackets in the specific useeffect which we wanna execute.