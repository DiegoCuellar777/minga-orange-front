import axios from 'axios'
import { Link as Anchor, useNavigate} from "react-router-dom"
import { useEffect, useState, useRef } from 'react'
import apiUrl from '../../api.js'
import { useSelector,useDispatch } from 'react-redux'
import mangasActions from '../redux/actions/mangas'

export default function MangaDetails() {
  const {readOneManga} = mangasActions
  const store = useSelector(store => console.log('STORE ',store))
  const dispatch = useDispatch()
  let manga_id = '6453ed48cf3118bcb0e205bf'
  let [img, setImg] = useState()
  let [title, setTitle] = useState('')
  let [details, setDetails] = useState('')
  useEffect(
    () => {
      axios(apiUrl + `mangas/${manga_id}`)
        .then(res => {
          setImg(res.data.response.cover_photo)
          setTitle(res.data.response.title)
          setDetails(res.data.response.description)
          dispatch(readOneManga({
            cover_photo: res.data.response.cover_photo,
            title: res.data.response.title,
            manga_id: manga_id
          }))
        })
        .catch(err => console.log(err))
    },
    []
  )

  return (
    <>

      <div>
        <img className='w-[602px] h-[736px]' src={img} alt="" />
      </div>
      <div className='xl:w-[482px] lg:w-[350px] relative h-auto'>
        <div className='absolute left-0 top-0 xl:w-[472px] lg:w-[350px] h-[335px] bg-gradient-to-r from-[#4338CA] to-[#5E52F3] blur-[304px] rounded-full'></div>
        <div className='flex-none flex-col items-center break-words'>
          <div className='flex justify-between text-white'>
            <p>shonen</p>
            <p><img src="" alt="" /> Nombre autor</p>
          </div>
          <h3 className='flex items-center tracking-wider leading-[140%] font-semibold w-auto text-white text-left xl:text-[48px] lg:text-[35px]'>
            {title}
          </h3>
          <p className='mt-5 flex items-center tracking-wider leading-[120%] font-normal not-italic w-auto text-white text-left xl:text-[16px] lg:text-[15px]'>
            {details}
          </p>
          <Anchor img={img} to={'/chapters/get'} className="flex justify-center mt-5  rounded-[5px] text-gray-500 bg-gradient-to-r from-[#4338CA] to-[#5E52F3]  xl:text-[16px] lg:text-[15px]">Read Now</Anchor>
        </div>
      </div>


    </>
  )
}
