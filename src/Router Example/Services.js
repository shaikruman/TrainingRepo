import React from 'react'
import {Link, Outlet} from 'react-router-dom';
//The <Outlet> element is used as a placeholder. In this case an <Outlet>enables the Users component to render its child routes.

export default function Services() {
  return (
    <div>
     There are two types of Services
     <br></br> 
     <br></br>

     <br></br>
<Link to='hs'>HardwareServices</Link>
     <br></br>
 <Link to = 'ss'>SoftwareServices</Link>

 <br></br>
 <Outlet></Outlet>
    </div>
  )
}
// to render the child components data, make sure, you use Outlet(), in parent component, in last; and make sure,
// the routes of child components are nested inside parent router. say <route to='' element={<parent/>}> child components routig here </Route>
// here Outlet is hold both components data.
