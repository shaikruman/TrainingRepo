import React, { useState } from 'react'


// here i used useState, not reducer


export default function Reducer3() {
    var x = 0;
    var [x, updX] = useState(x);
    function fun1(){
        updX(x+1);

    }
  return (
    <div>
        {x}
     <input type='button' value="Increment" onClick={fun1}></input> 
    </div>
  )
}
