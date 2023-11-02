import React, { useState } from 'react'

export default function Binding() {
   
    var [sno, updsno] = useState(100)
    var [name, newname] = useState("Ruman")
    function fun1 () {
        alert("Hi")
        updsno(222);

    }
  return (
    <div style={{textAlign: "center", marginTop: "100px"}}>
      <input type='text' value={sno} onChange={(e)=> {  updsno(e.target.value)      }}></input>
      <br></br>
      <input type='text' value={name} onChange={(e)=> { newname(e.target.value)}}></input>
      <input type='button' value="Click me" className='btn btn-danger' onClick={fun1}></input>

      <h1>{sno}</h1>
      <h2>{name}</h2>
    </div>
  )
}
