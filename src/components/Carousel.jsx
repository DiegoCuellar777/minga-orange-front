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
  const [currentImage, setCurrentImage] = useState(0);


useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage) => {
        if (currentImage === imagenesCarousel.length - 1) {
          return 0;
        } else {
          return currentImage + 1;
        }
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [imagenesCarousel.length]);





  return (
    <div className="sm:hidden md:w-[60%] flex justify-between  items-center md:px-[5%]">

      <img src={imagenesCarousel[currentImage]?.cover_photo} alt="" className='sm:hidden md:w-[90%] md:h-[110vh] md:object-fit md:object-cover md:object-center  '/>

    
    </div>
  )
}
