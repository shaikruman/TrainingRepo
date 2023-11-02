import React from 'react'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Compo1 from './Compo1';
import Compo2 from './Compo2';




export default function Imp() {
  return (
    <div>
      <BrowserRouter>
      <Link to='c1' style={{marginLeft: '30px', padding:'45px', textAlign: 'center'}}>Component 1 Tab</Link>
      <Link to='c2/3/ruman'>Component 2 Tab</Link>
      <Routes>
        <Route path='c1' element={<Compo1/>}></Route>
        <Route path='c2/:Id/:Name' element={<Compo2/>}></Route>
      </Routes>
      
      </BrowserRouter>
    </div>
  )
}
