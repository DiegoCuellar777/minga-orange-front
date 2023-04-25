import mobile from "/images/Group-3599.png"
import left from "/images/left.png"
import right from "/images/right.png"

export default function Carousel() {
  return (
    <div className="sm:hidden md:w-[60%] flex justify-between  items-center md:px-[5%]">
      <img src={left} alt="" />
      <img src={mobile} alt="" className='sm:hidden md:w-[85%] md:h-[110vh] md:object-fit md:object-cover md:object-center  '/>
      <img src={right} alt="" />
    </div>
  )
}
