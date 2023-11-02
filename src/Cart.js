import React from 'react'

export default function Cart(props) {
  return (
    <div>
        <div style={{width
        : "220px", padding:"10px", marginLeft:"50px", marginTop:"20px"}} class='card' >
            <h4>{props.mname}</h4>
      <img src={props.msrc}  width="200px" height="270px" ></img>
      <div>Report: {props.mreport}</div>
      <div>Director: {props.mdirector}</div>
      <div>
        <input type='button' value="Book Tickets" className='btn btn-danger'></input>
      </div>
      
    
    </div>

    
    </div>
  )
}
// to have display side by side, what u do is, style={{display: "flex"}}
// here i prepared  a template, and using as re usable component.
