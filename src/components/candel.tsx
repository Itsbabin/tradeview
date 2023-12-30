import { useEffect, useState } from "react"

type candelData = {
  data : {
    open: number
    high: number
    low:  number
    volume:  number
    close:  number
    time:  number
  },
  high : number,
  low : number
}

export default function Candel({data , high , low}:candelData) {
  const [color, setColor] = useState("green")
  const [height, setHeight] = useState("0px")
  const [margin, setMargin] = useState("0px")
  
  function makePositive(number:number):number {
    if (number < 0) {
      return -number;
    } else {
      return number;
    }
  }

  const getUnit = () => {
    const unit = 500/(high - low);
      return unit;
  }

  const calculateHeight = () => {
    let unit = getUnit();
    const newHeight = (makePositive((data.open-data.close)));
    return (newHeight*unit);
  }

const calculateTopMargin = () => {
  let unit = getUnit();
  const newMargin = (high - data.high)*unit;

  return newMargin;

}
  useEffect(() => {
    data.open > data.close ? setColor("red") : setColor("green");
    const tempHeight = calculateHeight();
    setHeight(`${tempHeight}px`);
    const tempMargin = calculateTopMargin();
    setMargin(`${tempMargin}px`)
    
  }, [])
  
  return (
    <>
      <div className="candel_container" title={`high : ${data.high} and low : ${data.low}`}>
        <div className="body" style={{backgroundColor : color , height : height , marginTop : margin}}>
          <div className="shadow">

          </div>
        </div>
      </div>
    </>
  );
}
