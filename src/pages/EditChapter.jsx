import React, { useRef } from "react"
import axios from "axios"
import apiUrl from '../../api'
import frontPage from '../assets/images/image4.png'

export default function EditChapter() {

  let nameManga = useRef()
  let coverPhoto = useRef()
  let order = useRef()
  let pages = useRef()
  function handleForm(e) {
    e.preventDefault()
    let data = {
      nameManga: nameManga.current.value,
      coverPhoto: coverPhoto.current.value,
      order: order.current.value,
      pages: pages.current.value
    }
    axios.post(apiUrl + 'chapters/chapter-form', data)
      .then(res => console.log(res))
      .catch(err => {
        console.log(err)
        alert(err.response.data.message)
      })
    console.log(data)
  }

  return (
    <>
      <div className="flex justify-evenly items-center ">
        <div className="w-1/2 h-screen flex flex-col justify-evenly items-center">
          <h2 className=" text-white w-[228px] h-[44px] not-italic font-normal text-4xl">New Chapter</h2>
          <form onSubmit={(e) => handleForm(e)} className="flex flex-col w-[80%] h-[50%] items-center justify-between" action="">
            <input type="text" placeholder="Insert title" ref={nameManga} className="w-[280px] border-b-2 border-[#424242] bg-transparent text-white" />
            <input type="text" placeholder="Insert Url cover photo" ref={coverPhoto} className="w-[280px] border-b-2 border-[#424242] bg-transparent text-white" />
            <input type='text' placeholder="Insert order" ref={order} className="w-[280px] border-b-2 border-[#424242] bg-transparent text-white"></input>
            <input type="text" placeholder="Insert Url pages" ref={pages} className="w-[280px] border-b-2 border-[#424242] bg-transparent text-white"></input>
            <input className="w-[280px] h-[69px] bg-[#34D399] rounded-[6px]" type="submit" value='Send'></input>
          </form>

        </div>
        <div className='w-[564px] h-[504px] relative cel:hidden lg:block'>
          <div className=' absolute left-0 top-0 xl:w-[472px] lg:w-[350px] h-[335px] bg-gradient-to-r from-[#4338CA] to-[#5E52F3] blur-[304px] rounded-full'>
          </div>
          <div className=' flex-none flex-col items-center w-[564px] h-[504px]'>
            <p className=" text-white text-center ">Chapter #1 - Discover the word</p>
            <img className="lg:w-[564px] lg:h-[504px] " src={frontPage} alt="anime cover" />
          </div>
        </div>
      </div>
    </>
  )
}
