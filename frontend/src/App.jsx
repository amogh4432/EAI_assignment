import axios from 'axios';
import { useState } from 'react';
import Displaydata from './Displaydata';
import socket from './socket';
import './App.css';
function App() {
const [stockDataStore, setStockDataStore] = useState([]);
const [count, setCount] = useState('');
const [apicallingState, setApiCallingState] = useState(false);

socket.on("connect", () => {
  console.log(`connected ${socket.id}`); 
})

socket.on("disconnect", () => {
  console.log("disconnected kfsjdlf")
})

function abc(event){
  const value=parseInt(event.target.value)
  if(value<=20 && value >=0){
    setCount(value)
  }
  else if(!value){
    setCount('')
  }
  else{
    alert("Please enter the number between 0 and 20")
    document.getElementById("input1").focus()
  }
}

function handleClick(event){
  setApiCallingState(true)
  setStockDataStore([])
  axios.post('http://localhost:5000/numberofstocks',{
    numberofstocks:count,
    socketID:`${socket.id}`
  }
  ).then(response => {
    if(response.data.err){
      setStockDataStore([])
      alert(response.data.err)
    }
    else{
      setStockDataStore(response.data)
    }
  })
  .catch(error =>{
    console.log(error)
  }).finally( () => {
    setApiCallingState(false)
  })

}

  return (
    <div className="App">
      {/* <label htmlFor="input1">Enter number of stocks: </label> */}
      <input type="text" name="numberofstock" placeholder='Enter the number of stocks' id="input1" value={count} onChange={abc} />
      <button type="submit" onClick={handleClick}>Enter</button>
      {apicallingState && <h1>Loading....</h1>}
      {stockDataStore.length!==0 && <Displaydata data={stockDataStore}/>}
    </div>
  );
}

export default App;
