import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Services from './Services';
import HardwareServices from './HardwareServices';
import SoftwareServices from './SoftwareServices';


export default function Main() {
  return (
    <div>
      <BrowserRouter>
      <Link to='hm' style={{margin: '30px', marginLeft:'30px'}}>Home</Link>
      <Link to='sr' style={{margin: '30px', marginLeft:'30px'}}>Services</Link>

      <Routes>
        <Route path='hm' element={<Home/>}></Route>


        <Route path='sr' element={<Services/>}>
                <Route path='hs' element={<HardwareServices/>}></Route>
                <Route path='ss' element={<SoftwareServices/>}></Route>
        </Route>
        

      </Routes>
      </BrowserRouter>
    </div>
  )
}
