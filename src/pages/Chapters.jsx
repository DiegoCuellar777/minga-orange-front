import React from 'react'
import pru from '../assets/images/image4.png'
import axios from 'axios'
import { useEffect, useState, useRef } from 'react'
import { Link as Anchor, useNavigate } from "react-router-dom"
import apiUrl from '../../api.js'
import { useSelector, useDispatch } from 'react-redux'

export default function Chapters() {
  const { cover_photo, title, manga_id } = useSelector(store => store.inputManga)
  console.log(cover_photo)
  let [chapter, setChapters] = useState([])
  let [page, setPage] = useState(1)
  useEffect(
    () => {
      axios(apiUrl + `chapters/get?manga_id=${manga_id}&page=${page}&limit=${4}`)
        .then(res => {
          setChapters(res.data.response)
          console.log('Este es axios ', res.data.response.cover_photo)

        })
        .catch(err => console.log(err))
    },
    [page]
  )

  let next = () => {
    setPage(page + 1)
    console.log(page)
  }

  let prev = () => {
    setPage(page - 1)
    console.log(page)
  }

  chapter.map(each => console.log(each?._id))


  return (
    <>
      <div className='flex flex-col items-center justify-around h-screen'>
        <div className='container w-[90rem] h-[30rem] bg-cover bg-center' style={{ backgroundImage: `url(${cover_photo})` }}>
          <div className=' bg-[#0000007a] h-[100%]'>
            <div className='flex flex-col justify-center items-center h-full'>
              <p className='text-white text-xl'>Chapter of</p>
              <h3 className='text-white text-5xl font-bold mb-10'>{title}</h3>
              <button className='bg-[#ffffff2a] rounded-[5px] p-2 flex items-center border-[1px] border-[#ffffff1e] w-[30rem] lg:bg-[#ffffff1e]'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-7 h-7 ml-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <p className='text-white text-lg font-thin ml-2'>Search</p>
              </button>
            </div>
          </div>
        </div>

        <div className='flex justify-around items-center'>

          {page > 1 ? <svg onClick={prev} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg> : <div></div>}
          {chapter?.map(each => <Anchor key={each._id}  to={`/chapters/${each._id}/${0}`} > <img className='p-3 m-2 w-52' src={each.cover_photo} alt="" /> </Anchor>)}

          {chapter.length >= 4 ? <svg onClick={next} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg> : <div></div>}
        </div>
      </div>
    </>
  )
}
