import { useState, useEffect } from "react"

import mobile from "/images/Group-3599.png"
import left from "/images/left.png"
import right from "/images/right.png"

import axios from "axios"
import apiUrl from "../../api"

export default function Carousel() {

  let [counter, setCounter] = useState(0)
  console.log(counter);
  
  let sumar = ()=> {
    setCounter(counter+1)
    if (counter === 100) {
      setCounter(0)
    }
  }
  let restar = ()=> {

    setCounter(counter-1)
    if (counter === 0) {
      setCounter(100)
    }
  }


  return (
    <div className="sm:hidden md:w-[60%] flex justify-between  items-center md:px-[5%]">
      <img src={left} alt="" onClick={restar}/>
      <img src={mobile} alt="" className='sm:hidden md:w-[85%] md:h-[110vh] md:object-fit md:object-cover md:object-center  '/>
      <img src={right} alt="" onClick={sumar}/>
      <span className="text-white">CONTADOR: {counter} </span>
    </div>
  )
}
