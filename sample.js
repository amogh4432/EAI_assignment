const data = [
    {
      "symbol": "AAPL",
      "open": 193.9,
      "refreshInterval": 1
    },
    {
      "symbol": "MSFT",
      "open": 376,
      "refreshInterval": 3
    },
    {
      "symbol": "GOOGL",
      "open": 139.63,
      "refreshInterval": 1
    },
    {
      "symbol": "AMZN",
      "open": 153.1,
      "refreshInterval": 1
    },
    {
      "symbol": "NVDA",
      "open": 498.13,
      "refreshInterval": 5
    },
    {
      "symbol": "UNH",
      "open": 525.98,
      "refreshInterval": 4
    },
    {
      "symbol": "NVO",
      "open": 103.55,
      "refreshInterval": 2
    },
    {
      "symbol": "WMT",
      "open": 157.53,
      "refreshInterval": 1
    },
    {
      "symbol": "XOM",
      "open": 100.37,
      "refreshInterval": 4
    },
    {
      "symbol": "MA",
      "open": 426.68,
      "refreshInterval": 2
    }
  ];

  for(var i = 0;i < data.length;i++){
      setInterval(()=>{
        // console.log(data[i])

      data[i].open += 10
    //   console.log(data[i])
    },data[i].refreshInterval*1000)
  }
  console.log(data)