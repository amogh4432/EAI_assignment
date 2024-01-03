import React, { useState } from 'react'
import socket from './socket'
const MainData = ({ stock,index }) => {
    const [open,setOpen] = useState(stock.open)
    const [prevValue,setPrevValue] = useState(open)
    socket.on(`dataChange${index}`, (data) => {
        setOpen(data)
        setPrevValue(open)
    })
    return (
        <div style = {{display:'flex',alignItems:"center"}}>
            <h2>{stock.symbol}  == </h2>
            {stock.errorMessage ? <p>{stock.errorMessage}</p> : <p style={{color:open - prevValue >= 0?"green":"red",fontSize:"30px"}}>{open}</p>}
        </div>
    )
}

export default MainData