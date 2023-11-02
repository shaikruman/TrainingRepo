import React from 'react'
import Data from './Materials';
import { useNavigate } from 'react-router-dom';

export default function Cards() {
    const nav = useNavigate()
    const Fun1=(mid)=>{
        
        
        nav(`../cdinf/${mid}`)
    }
  return (
    <div style={{display: 'flex'}}>
      {
        Data.map((OneProduct)=>{
            return (
            <div className='card'>
            <h3>{OneProduct.mname}</h3>
            <img src={OneProduct.mimage} style={{width:'200px', height:'200px'}} alt='logo'></img>
            <br></br>
            Price: {OneProduct.mprice}
            <br></br>
            <input type='button' value='Click me' className='btn btn-primary' onClick={Fun1.bind(this,OneProduct.mid)}></input>

            </div>
            )
        })
      }
    </div>
  )
}
