import React from 'react'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import Cards from './Cards'
import Cardsinfo from './Cardsinfo'

export default function CARD() {
  return (
    <div>
      <BrowserRouter>

          <Link to='cd' style={{marginLeft: '30px', textAlign: 'center', fontSize:'40px'}}>Cards Home</Link>
          <Link to='cdinf/mid' style={{marginLeft: '30px', textAlign: 'center', fontSize:'40px'}}>Cards Informationnnnnnn</Link>


      <Routes>
      <Route path='' element={<Cards></Cards>}></Route>
        <Route path='cd' element={<Cards></Cards>}></Route>
        <Route path='cdinf' element={<Cardsinfo/>}></Route>
      </Routes>


      </BrowserRouter>
    </div>
  )
}
