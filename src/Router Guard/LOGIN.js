import React, { useState } from 'react'
import {useNavigate, useLocation,  } from 'react-router-dom';


export default function LOGIN() {
    var [uname, upduname]= useState();
    var [psd, updpsd] = useState();

    var urlData = useLocation();  //useLocation is hook that allows us to get the current location(or URL) of the web app.
    console.log(urlData);
    

    const nav = useNavigate();


    const fun1=()=>{

        if (uname === "scott" && psd === "scott123"){
          
             localStorage.setItem("auth", 1);
           nav("../" + urlData.state.link)
        }
        else
        alert("Invalid user")

    }
  return (
    <div>
      <input type='text' placeholder='username' value={uname} onChange={(e)=> upduname(e.target.value)}></input>
      <br></br>
      <input type='text' placeholder='password' value={psd} onChange={(e)=> updpsd(e.target.value)}></input>
      <br></br>
      <input type='button' value="Login" onClick={fun1}></input>
      <br></br>
    </div>
  )
}
