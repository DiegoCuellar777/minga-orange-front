import React from 'react'
import pru from '../assets/images/image4.png'
import axios from 'axios'
import { useEffect, useState, useRef } from 'react'
import { Link as Anchor, useNavigate, useParams } from "react-router-dom"
import apiUrl from '../../api.js'
import { useSelector, useDispatch } from 'react-redux'

export default function Chapters() {
  const { cover_photo, title, manga_id } = useSelector(store => store.inputManga)
  console.log(cover_photo)
  const searchTitle = useRef()
  let [chapter, setChapters] = useState([])
  let [page, setPage] = useState(1)
  let [reload, setReload] = useState(false)
  useEffect(
    () => {
      axios(apiUrl + `chapters/get?manga_id=${manga_id}&title=${searchTitle.current.value}&page=${page}&limit=${4}`)
        .then(res => {
          setChapters(res.data.response)
          console.log('Este es axios ', res.data.response.cover_photo)

        })
        .catch(err => console.log(err))
    },
    [reload]
  )

  let next = () => {
    setPage(page + 1)
    setReload(!reload)
    console.log(page)
  }

  let prev = () => {
    setPage(page - 1)
    setReload(!reload)
    console.log(page)
  }

  chapter.map(each => console.log(each))


  return (
    <>
      <div className='flex flex-col items-center justify-around min-h-screen'>
        <div className='container cel:w-[80%] lg:w-[90rem] h-[30rem] bg-cover bg-center' style={{ backgroundImage: `url(${cover_photo})` }}>
          <div className=' bg-[#0000007a] h-[100%]'>
            <div className='flex flex-col justify-center items-center h-full'>
              <p className='text-white text-xl'>Chapter of</p>
              <h3 className='text-white text-5xl font-bold mb-10'>{title}</h3>
              <div className="bg-[#ffffff2a] rounded-[5px] p-2 flex items-center border-[1px] border-[#ffffff1e]  lg:bg-[#ffffff1e] w-[60%]">
                <input onKeyUp={() => setReload(!reload)} ref={searchTitle} type="text" placeholder="Search..." className="bg-transparent flex-grow px-2 outline-none text-white" />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l6-6m0 0l-6-6m6 6h-18" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-around items-center'>
          {page > 1 ? <svg onClick={prev} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg> : <div></div>}
          <div className='flex w-[100%] flex-wrap justify-center'>
            {chapter?.map(each => <Anchor key={each._id} to={`/chapters/${each._id}/${0}`} > <img className='p-3 m-2 w-52' src={each.cover_photo} alt="" /> </Anchor>)}
          </div>
          {chapter.length >= 4 ? <svg onClick={next} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg> : <div></div>}
        </div>
      </div>
    </>
  )
}
