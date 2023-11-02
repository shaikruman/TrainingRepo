import React, { useReducer, useState } from 'react'



export default function Reducer4Age() {

    
    var [y, updateY] = useState("")

function myFunction(old, latest) {
    if (latest > 70)
         updateY("Age should be less than 70")
    
    else if (latest < 20)
         updateY("Age should be more than 20")
    return latest;
}
var [x, updateX] = useReducer(myFunction, 40);
  return (
    <div>
      <input type='text' value={x} onChange={(e)=>updateX(e.target.value)}></input>
      <div>{y}</div>
    </div>
  )
}
