import React from 'react'
import { useParams } from 'react-router-dom'

export default function Compo2() {
    var param = useParams();
  return (
    <div>
      This is component 2
      {param.Id} - {param.Name}
    </div>
  )
}
