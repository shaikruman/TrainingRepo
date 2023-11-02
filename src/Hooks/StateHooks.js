import React, { useState } from 'react'

export default function StateHooks() {
    const [sno,updsno] = useState(100);
    const [name, updname] = useState("Ruman");
    
    const ClickHandler=(event)=>{
        event.preventDefault();
        updsno(
            143
        )
        updname("Scott Williams")
        
        
    }
  return (
    <div>
    <div style={{textAlign: "center", fontSize: "100px", display: "block"    }}>
      {sno}
      <h4>{name}</h4>
    </div>


    <div style={{textAlign: "center"}}>
    <input type='button' value="Click me" onClick={ClickHandler} className='btn btn-success'></input>
    </div>

    </div>
    
  )
}
