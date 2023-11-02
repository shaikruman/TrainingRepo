import React, { useRef } from 'react'

export default function Ref() {
    const inputRef = useRef();
    function fun1() {
        alert(inputRef.current.value)
        inputRef.current.style.backgroundColor = "blue"
    }
  return (
    <div>
        hi
      <input type='text' ref={inputRef}></input>
      <br>
      </br>
      <input type='button' value="Click me" onClick={fun1}></input>
    </div>
  )
}
