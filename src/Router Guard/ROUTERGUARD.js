import React from 'react'
import {BrowserRouter, Routes, Route, Link, Navigate} from 'react-router-dom';
import HOME from './HOME';
import ABOUT from './ABOUT';
import SERVICES from './SERVICES';
import LOGIN from './LOGIN';
import PRODUCTS from './PRODUCTS';
import LOGOUT from './LOGOUT';

export default function ROUTERGUARD() {
  return (<div>
    <BrowserRouter>
            <Link to='hm' style={{marginRight: '30px', marginLeft: '50px', fontSize: '60px'}}>Home Page</Link>
            <Link to='ab'style={{marginRight: '30px', marginLeft: '50px', fontSize: '60px'}}>About US</Link>
            <Link to='ser'style={{marginRight: '30px', marginLeft: '50px', fontSize: '60px'}}>Services Offered</Link>
            <Link to='pr' style={{marginRight: '30px', marginLeft: '50px', fontSize: '60px'}}>Productsss</Link>
            <Link to='lg'style={{marginRight: '30px', marginLeft: '50px', fontSize: '60px'}}>Logout</Link>
        <Routes>
          <Route path='' element={<HOME></HOME>}></Route>
          {/* you can also re qrite above statment as   <Route index element={<Home/>} /> */}
            <Route path='hm' element={<HOME/>}></Route>
            <Route path='ab' element = {<ABOUT/>}></Route>
            <Route path='ser' element={<MyRoute urlPath='ser'><SERVICES/></MyRoute>}></Route>
            <Route path='login' element={<LOGIN/>}></Route>
            <Route path='pr' element={<MyRoute urlPath='pr'><PRODUCTS></PRODUCTS></MyRoute>}></Route>
            <Route path='lg' element={<LOGOUT></LOGOUT>}></Route>
        </Routes>
    </BrowserRouter>
    </div>
  )
}
const MyRoute=({children, urlPath})=>{
  
  if (localStorage.getItem("auth")){
            return children
        }
        else
        return <Navigate to="../login" state={{link:urlPath}}></Navigate>


}

// we can use even below code
// const MyRoute = () => {
//   if (localStorage.getItem("auth")){
//     return <SERVICES></SERVICES>
//   }
//   else 
//   return <Navigate to='../login'></Navigate>



// const MyRoute=({children})=>{
  //or
  // const MyRoute=(obj)=>{ if ... return obj.children}
  

//     if (localStorage.getItem("auth")){
//         return children
//     }
//     else
//     return <Navigate to='../login'></Navigate>   //here, we use ../ bcz login page is not present inside the services component thats why.

// }
