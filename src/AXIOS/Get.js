import React, { useState } from 'react'
import axios from 'axios';



export default function Get() {
    var [tabData, UpdtabData] = useState();
    function GetData(){
        alert('Exec..')
        axios.get('https://restcountries.com/v3.1/all').then(function(dt){
            console.log(dt.data)
            UpdtabData(dt.data.map((info)=>{
                console.log(info)
                return(
                <tr>
                    <td>{info.name.common}</td>
                    <td>{info.population}</td>
                    <td>{<img src={info.flags.png} alt='logo'></img>}</td>
                </tr>
                )
            }))
        })
    }
  return (
    <div className='container'>
      <input type='button' value='Click me' onClick={GetData}></input>
      <table border='1'>
        <thead>
            <th>Name</th>
            <th>Population</th>
            <th>Country Flag</th>
        </thead>
        <tbody>
        {tabData}
        </tbody>
       
        
      </table>
    </div>
  )
}


// import React, {useState} from 'react';
// import axios from 'axios';





// export default function Get() {
//     var [tabData, UpdtabData] = useState();
//     function GetData(){
//         alert("executing...")
//         axios.get('https://restcountries.com/v3.1/all').then((dt)=>{
//             //console.log(dt.data.name.common);
//             console.log(dt.data);
//             UpdtabData((dt.data.map((info)=>{
//                 console.log(info)
//                 return(
//                     <tr>
//                         <td>{info.name.common}</td>
//                         <td>{info.population}</td>
//                         <td>
//                             {<img src={info.flags.png} alt='logo'></img>}
//                         </td>
//                     </tr>
//                 )
//             }))

//             )

//         })
//     }
//   return (
//     <div className='container'>
//       <input type='button' value='Click me' onClick={GetData}></input>
//       <table border='1'>
//         <thead style={{padding: '20px'}}>
//             <th>Name</th>
//             <th>Population</th>
//             <th>Image</th>
//         </thead>
//       </table>
//       {tabData}
//     </div>
//   )
// }

