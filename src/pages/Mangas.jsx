import { useState, useEffect, useRef } from "react"
import { Link as Anchor, useParams, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import actions from '../redux/actions/mangasCards'
import axios from "axios"
import apiUrl from '../../api';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import mangaNoFound from '../assets/images/R.png'
//import BrowserMangas from "../components/BrowserMangas.jsx";
//import MangaCard from "../components/MangaCard.jsx";
const { pageMangasCards } = actions

function Mangas() {

    const imageMangaNoFound = <img className="absolute w-[10rem] right-80" src={mangaNoFound} alt="mangaNofound" />
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
            axios.get(apiUrl + `mangas?title=${title.current.value}&category_id=${idArr.join(',')}&order=1&limit=6&page=${currentPage}`, { headers: { Authorization: `Bearer ${token}` } })
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
            <div className="md:right-1 md:bottom-[-10rem] md:opacity-60 z-0 md:h-[60%] md:w-[50%] md:absolute rounded-full md:bg-gradient-to-r from-black to-indigo-800 md:blur-[115px]"></div>
            <div className="text-white z-1 relative flex items-center w-full md:min-h-screen">
                <div className="h-[100vw] md:h-screen w-[25%] md:w-[20%] lg:w-[15%] flex items- justify-center">
                    <div className="flex-col flex gap-3 md:gap-10">
                        <h3 className="text-[4px] font-light md:text-xl">Categories</h3>
                        <div className="h-full md:h-full text-[3px] md:text-sm flex-col flex gap-1 md:gap-3">
                            {categories ? categories.map((eachCategory, index) => (
                                <button className={`text-start ${idArr.includes(eachCategory._id) ? 'text-white' : 'text-[#9d9d9d]'}`} ref={category_id} data-valor={eachCategory._id} key={index} id={eachCategory._id} onClick={() => setCats(eachCategory._id)}>
                                    {eachCategory.name}
                                </button>
                            )) : <p className="text-[#9d9d9d]">No categories found</p>}
                        </div>
                    </div>
                </div>
                <div className="w-[80%] flex flex-col justify-between lg:min-h-[83vw] md:w-[80%] lg:w-[80%] lg:ml-10 mt-4">
                    <h1 className="md:text-[2rem] md:mt-16 md:mb-[3rem]">Search your next manga <span className="drop-shadow-[0_0_30px_rgba(256,150,0,1)]">🤤</span></h1>
                    <div className="rounded-[5px] mt-2 md:mt-4 mb-3 md:mb-8 md:p-2 flex items-center border-[1px] border-[#ffffff1e] w-[95%] md:w-[40%] h-11 lg:bg-[#6060601e]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-8 ml-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                        <input className='md:text-[17px] md:mr-6 w-full text-center text-[#b5b3b3] bg-transparent placeholder:text-[#b5b3b3] placeholder:text-sm outline-none lg:text-[18px]' type="text" placeholder="Search" name="title" id="title" ref={title} onKeyUp={() => captureText()} />
                    </div>
                    <div className="md:w-full lg:w-[90%] flex flex-wrap gap-2 md:gap-7 md:mr-2 w-full min-h-[16rem] md:min-h-[34rem] lg:min-h-[60vw] xl:min-h-[47vw]">
                        {mangas.length > 0 ? mangas.map((eachManga, index) => (
                            <Anchor to={`/manga/${eachManga._id}`} key={index} className="w-[22vw] md:w-[10rem] lg:w-[12rem] text-white md:h-[16rem] lg:h-[21rem] lg:min-h-[21rem]">
                                <div /* onClick={()=> console.log(eachManga._id)} */ className="h-full flex-col flex justify-between">
                                    <img className="sm:h-[3rem] h-[8rem] md:h-[14rem] cursor-pointer md:w-[10rem] lg:w-full lg:h-[19rem] object-cover rounded-sm" src={eachManga.cover_photo} alt="" />
                                    <p className="text-[2px] font-[200] sm:font-[300] cursor-pointer0.0..0. sm:text-sm md:text-md">{eachManga.title}</p>
                                </div>
                            </Anchor>
                        )) : <div className="flex items-center justify-center w-full">
                            {imageMangaNoFound}
                            <p className="text-[#ffffff] text-4xl font-black relative">¡Ups! No Mangas found</p>
                        </div>}
                    </div>
                    <div className="flex w-full md:w-[95%] lg:w-[75%] justify-evenly md:justify-between my-6 md:my-[2.4rem]">
                        {currentPage > 1 ? (
                            <button onClick={prevPage} className="bg-white text-[0px] w-[3rem] h-4 md:w-[4rem] md:h-[1.5rem] flex items-center justify-center rounded-md font-bold md:text-md text-black"><span> <AiOutlineArrowLeft className="text-[0.8rem]" /></span></button>
                        ) : <button className="text-[0px] w-[3rem] h-4 opacity-50 md:w-[4rem] md:h-[1.5rem] flex items-center justify-center rounded-md font-bold md:text-md bg-[#9d9d9d]" disabled><span> <AiOutlineArrowLeft className="text-[0.8rem]" /></span></button>}
                        {mangas && mangas.length >= 6 ? (
                            <button onClick={nextPage} className="bg-white text-[0px] w-[3rem] h-4 md:w-[4rem] md:h-[1.5rem] flex items-center justify-center rounded-md font-bold md:text-md text-black"><span> <AiOutlineArrowRight className="text-[0.8rem]" /></span></button>
                        ) : <button className="text-[0px] w-[3rem] h-4 opacity-50 md:w-[4rem] md:h-[1.5rem] flex items-center justify-center rounded-md font-bold md:text-md bg-[#9d9d9d]" disabled><span> <AiOutlineArrowRight className="text-[0.8rem] md:text-sm" /></span></button>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mangas