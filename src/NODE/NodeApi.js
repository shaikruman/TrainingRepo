import React from 'react'
import axios from 'axios';

 
  



export default function NodeApi() {
    function GetApi1(){
        axios.get('http://localhost:1000/met1').then((dt)=> {
        console.log(dt.data)
        })
    }

    function GetApi2(){
        axios.get('http://localhost:1000/met2').then((dt)=> {
        console.log(dt.data.result)
        })
    }
  return (
    <div>
      <input type='button' value='GETAPi1' onClick={GetApi1}></input>
      <input type='button' value='GETAPI2' onClick={GetApi2}></input>
    </div>
  )
}

