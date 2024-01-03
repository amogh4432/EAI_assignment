require('dotenv').config()
const axios = require("axios")
const express = require('express')
const app = express()
const stocksSymbol= require("./stockname") 
const cors =require('cors')
const socketio =require('socket.io')
const { getRandomInt, getRandomExtremes } = require('./utility')
const server = require('http').Server(app);
const io = socketio(server);
app.use(cors())
app.use(express.json())

var result = []

async function fetchStockData(symbol) {
  console.log(symbol)
  try {
    const url=`https://api.polygon.io/v1/open-close/${symbol}/2023-12-29?adjusted=true&apiKey=${process.env.API_KEY}`
    const response = await axios.get(url);
    result.push({
      symbol:response.data.symbol,open:parseFloat(response.data.open),refreshInterval:getRandomInt()
    })
  } catch (error) {
    console.error(`Error fetching data for ${symbol}:`, error.message);
  }
}
async function fetchMultipleStocks() {
  for (const symbol of stocksSymbol) {
    await fetchStockData(symbol);
    await new Promise(resolve => setTimeout(resolve, 13000));
  }
}


startCounter = ()=>{
  result.forEach((item,index)=>{
    setInterval(()=>{
      item.open += getRandomExtremes()
      io.emit(`dataChange${index}`,item.open)
    },item.refreshInterval*1000)
  })
}

app.post('/numberofstocks', async(req, res) => {
  const numberofstocks=parseInt(req.body.numberofstocks)
  const socketID = req.body.socketID
  if(numberofstocks > result.length){
    res.json({
      err:`Please enter the number less than ${result.length}`
    })
  }
  else {
    const data = result.slice(0,numberofstocks)
    res.json(data)
  }
})

server.listen(process.env.PORT, async() => {
  console.log(`app listening on port ${process.env.PORT}`)
  await fetchMultipleStocks()
  console.log(result)
  startCounter()  
})

io.on("connection",(socket) => {
  console.log(`socket ${socket.id} connected`)
  socket.on("disconnect", (socket) => {
    console.log(`disconnect ${socket.id} disconnected`)
  })
})
