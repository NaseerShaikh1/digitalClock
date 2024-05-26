import React, { useEffect, useState } from 'react'
import  "./style.css";
const DigitalClock = () => {
    const [data, setData] = useState(new Date())
    useEffect(
        
        ()=>{
            const interval = setInterval(()=>{
                setData(new Date())
            },1000)
            return ()=>{
                clearInterval(interval)
            }
        }

)
const formatTime = ()=>{
    const hours = data.getHours()
    const minutes = data.getMinutes()
    const seconds = data.getSeconds()
    const hour = hours > 12? hours - 12 : hours
    const meditrain =  hours>12?"PM":"AM"
    return `${zero(hour)}:${zero(minutes)}:${zero(seconds)}:${meditrain}`
}
function zero (numb){
    return numb < 10? (`0${numb}`) : ("")+numb
}

  return (
    

    
    <div className='clock-container' style={{display:'flex', justifyContent:'center', alignItems:'center', minHeight:'90vh'}}>
       <div className="clock">
        <span>{formatTime()}</span>
       </div>
      
    </div>
   
  )
}

export default DigitalClock
