import React from 'react'
import MainData from './MainData';
const Displaydata = ({ data }) => {
  return (
    <div>
      {data.map((stock, index) =><MainData key={index} stock={stock} index = {index}/> )}
    </div>

  )
}


export default Displaydata