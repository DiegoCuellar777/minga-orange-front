import { useState, useEffect } from "react"
import axios from "axios"
import apiUrl from "../../api"


import mobile from "/images/Group-3599.png"
import left from "/images/left.png"
import right from "/images/right.png"



export default function Carousel() {
  useEffect(
    () => { axios(apiUrl+"carousels").then(res => setImages(res.data.carousels)).catch(err=> console.log(err)) },
    []   // Array de dependencias vacio ya que necesitamos pushear una unica vez al montarse el componente (y despues esos datos no deberian cambiar)
  )
  let [imagenesCarousel, setImages] = useState([])
  console.log(imagenesCarousel);
  let [counter, setCounter] = useState(0)
  
  let sumar = ()=> {
    setCounter(counter+1)
    if (counter === imagenesCarousel.length-1) {
      setCounter(0)
    }
  }
  let restar = ()=> {

    setCounter(counter-1)
    if (counter === 0) {
      setCounter(imagenesCarousel.length-1)
    }
  }


  return (
    <div className="sm:hidden md:w-[60%] flex justify-between  items-center md:px-[5%]">
      <img src={left} alt="" onClick={restar}/>
      <img src={imagenesCarousel[counter]?.cover_photo} alt="" className='sm:hidden md:w-[85%] md:h-[110vh] md:object-fit md:object-cover md:object-center  '/>
      <img src={right} alt="" onClick={sumar}/>
    </div>
  )
}
