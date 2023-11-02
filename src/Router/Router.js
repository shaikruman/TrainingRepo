import React from 'react'
import { BrowserRouter,Routes, Route, Link } from 'react-router-dom'
import Home from './Home';
import About from './About';
import NoPage from './NoPage';

export default function Router() {
  return (
    
      <BrowserRouter>
      
      <Link to="hm" style={{marginRight: "20px", textAlign: "center"}}>Home Page</Link>
      
      <Link to="ab">About Us</Link>
     
        <Routes>
            <Route path='' element={<Home/>}></Route>   {/*default landing page*/}
            <Route path='hm' element={<Home/>}></Route>
            <Route path='ab' element={<About/>}></Route>  {/*here, even after page load, after if u stop server i.e connection from this app components, still the page has information abt two pages i.e home, about. bcz both r loaded in already cache memory (benefit of virtual dom) thats why react is speed*/}
            <Route path="*" element={<NoPage/>}></Route> {/*if user enters wrong url other than specified path, then to navigate user to nopage found page, use this method*/}

        </Routes>
      </BrowserRouter>
    
  )
}
