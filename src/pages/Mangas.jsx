import { useState, useEffect, useRef } from "react"
import { Link as Anchor, useParams, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import actions from '../redux/actions/mangasCards'
import axios from "axios"
import apiUrl from '../../api';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
//import BrowserMangas from "../components/BrowserMangas.jsx";
//import MangaCard from "../components/MangaCard.jsx";
const { pageMangasCards } = actions

function Mangas() {

    const store = useSelector(store => console.log(store.pageMangas))
    const params = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const title = useRef("")
    const category_id = useRef("")
    const [mangas, setMangas] = useState([])
    const [categories, setCategories] = useState([])
    const [reload, setReload] = useState(false)
    const [idArr, setId] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    
    function captureText() {
        setReload(!reload)
        dispatch(pageMangasCards({
            title: title.current.value,
            page: currentPage, 
            /*             id: ,
            category_id: ,*/
        }))
    }
    console.log(title.current.value)
    
    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            navigate(`/mangas/${currentPage - 1}`)
        }
        captureText()
    }
    const nextPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage + 1);
            navigate(`/mangas/${currentPage + 1}`)
        }
        captureText()
    }
    
    function setCats(ids) {
        if (!idArr.includes(ids)) {
            setId([...idArr, ids])
        } else {
            setId(idArr.filter((e) => e != ids))
        }
        setReload(!reload)
    }
    
    useEffect(
        () => {
            let token = localStorage.getItem('token')
            axios.get(apiUrl + `mangas?title=${title.current.value}&category_id=${idArr.join(',')}&order=1&limit=&page=${currentPage}`, { headers: { Authorization: `Bearer ${token}` } })
                .then(res => setMangas(res.data.response))
                .catch(err => console.log(err))
        },
        [currentPage, idArr, reload]
    )
    useEffect(
        () => {
            axios.get(apiUrl + 'categories')
                .then(res => setCategories(res.data.categories))
                .catch(err => console.log(err))
        },
        []
    )

    return (
        <>
            <div className="text-white flex items-center w-full min-h-screen">
                <div className="h-full w-full md:w-[20%] mt-8 flex items-center justify-center">
                    <div className="flex-col flex gap-10 ">
                        <h3 className="md:text-xl">Categories</h3>
                        <div className="h-[14rem] text-sm flex-col flex gap-3">
                            {categories ? categories.map((eachCategory, index) => (
                                <button className={`text-start ${idArr.includes(eachCategory._id) ? 'text-white' : 'text-[#9d9d9d]'}`} ref={category_id} data-valor={eachCategory._id} key={index} id={eachCategory._id} onClick={() => setCats(eachCategory._id)}>
                                    {eachCategory.name}
                                </button>
                            )) : null}
                        </div>
                    </div>
                </div>
                <div className="md:w-[80%] mt-4">

                    <h1 className="md:text-[1.6rem] mt-16 mb-[4rem]">Search your next manga 🤤</h1>
                    <div className="rounded-[5px] mt-4 mb-8 md:p-2 flex items-center border-[1px] border-[#ffffff1e] w-[45%] h-11 lg:bg-[#ffffff1e]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-7 h-7 ml-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                        <input className='md:text-[17px] text-center text-[#ffffffea] bg-transparent placeholder:text-white placeholder:text-sm outline-none text-white lg:text-[18px]' type="text" placeholder="Search" name="title" id="title" ref={title} onKeyUp={() => captureText()} />
                    </div>
                    <div className="flex flex-wrap gap- md:gap-7 w-full min-h-[22rem]">
                        {mangas ? mangas.map((eachManga, index) => (
                            <Anchor to={`/manga/${eachManga._id}`} key={index}>
                                <div /* onClick={()=> console.log(eachManga._id)} */ className="w-[5rem] md:w-[10rem] text-white min-h-[18rem] flex-col flex justify-between">
                                    <img className="" src={eachManga.cover_photo} alt="" />
                                    <p className="">{eachManga.title}</p>
                                </div>
                            </Anchor>
                        )) : null}
                    </div>
                </div>
            </div>
            <div className="flex w-full justify-around mb-[4rem]">
                {currentPage > 1 ? (
                    <button onClick={prevPage} className="bg-white w-[8rem] h-[3rem] flex items-center justify-center rounded-md font-bold text-black"><span>Previous page <AiOutlineArrowLeft /></span></button>
                ) : <button className="text-black opacity-50 w-[8rem] h-[3rem] flex items-center justify-center rounded-md font-bold bg-[#9d9d9d]" disabled><span>Previous page <AiOutlineArrowLeft /></span></button>}
                {mangas && mangas.length >= 6 ? (
                    <button onClick={nextPage} className="bg-white w-[8rem] h-[3rem] flex items-center justify-center rounded-md font-bold text-black"><span>Next page <AiOutlineArrowRight /></span></button>
                ) : <button className="text-black opacity-50 w-[8rem] h-[3rem] flex items-center justify-center rounded-md font-bold bg-[#9d9d9d]" disabled><span>Next page <AiOutlineArrowRight /></span></button>}
            </div>
        </>
    )
}

export default Mangas