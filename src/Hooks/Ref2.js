import React, { useRef } from 'react'

export default function Ref2() {
    const inputRef = useRef();
    const inputRef2 = useRef();

    
   
    function fun1(){
        
        inputRef.current.style.backgroundColor = 'lightblue'
        inputRef2.current.focus();


    }
  return (
    <div>
      <input type='text' ref={inputRef} placeholder='Enter your name'></input>
      <br></br>
      <br></br>
      <br></br>
      <input type='text' ref={inputRef2} placeholder='Enter your age'></input>
      <br></br>
      <br></br>
      <br></br>
      <input type='button' value="click me" onClick={fun1}></input>
    </div>
  )
}
