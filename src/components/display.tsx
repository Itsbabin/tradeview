import { useEffect, useState } from 'react'
import '../css/display.css'
import Candel from './candel'
// import axios from 'axios'

type candelData = {
  open: number
  high: number
  low:  number
  volume:  number
  close:  number
  time:  number
}

export default function Display() {
  const URL = "https://public.coindcx.com/market_data/candles?pair=B-BTC_USDT&interval=15m&limit=20"
  const [data , setdata] = useState([]);
  const [highOfMarket, setHighOfMarket] = useState(0);
  const [lowOfMarket, setlowOfMarket] = useState(99999999);


 const setHighandLow = (arr : Array<candelData>) => {
   let tempLow = 99999999;
   let tempHigh = 0;
  for (let i = 0; i < arr.length; i++) {
    const e:candelData = arr[i];
    if(tempHigh < e.high){
      tempHigh = e.high;
    }
    if(tempLow > e.low){
      tempLow = e.low
    }
  }
  setlowOfMarket(tempLow);
  setHighOfMarket(tempHigh);
 }

  const getdata = async () => {
       await fetch(URL, {
        method: "GET"})
       .then( async (response) => {
         const recivedata = await response.json();
         setHighandLow(recivedata);
         setdata(recivedata)
       })
       .catch((err) =>{
        console.log(err)
       })
  }
  useEffect(() => {
    getdata();
    console.log(`high : ${highOfMarket} and low : ${lowOfMarket}`);
  }, [])
  
  return (
    <>
     <div className="container">
        <div className="chart">
          {
            data.map((e : candelData) => {
              return <Candel key={e.time} data={e} high={highOfMarket} low={lowOfMarket} />
            })
          }
        </div>
     </div>
     <div className="show">
     </div>
    </>
  )
}
