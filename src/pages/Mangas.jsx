import { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import actions from '../redux/actions/mangasCards'
import mangas_actions from '../redux/actions/mangasGet'
import axios from "axios"
import apiUrl from '../../api';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import mangaNoFound from '../assets/images/R.png'
import store from "../redux/store"
import CategoriesList from "../components/CategoriesList"
import NavPages from "../components/NavPages"
import MangaCard from "../components/MangaCard"
import ScrollTop from "../components/ScrollTop"
//import BrowserMangas from "../components/BrowserMangas.jsx";
//import MangaCard from "../components/MangaCard.jsx";
const { pageMangasCards } = actions
const { read_mangas, read_categories } = mangas_actions

function Mangas() {

    const store = useSelector(store => store)
    const imageMangaNoFound = <img className="w-[10rem] absolute right-100 bottom-52" src={mangaNoFound} alt="mangaNofound" />
    const mangas = useSelector(store => store.mangasGet_reducer.mangas)
    const categories = useSelector(store => store.mangasGet_reducer.categories)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const title = useRef("")
    const category_id = useRef("")
    const [reload, setReload] = useState(false)
    const { cates, setCates } = useState([])
    const [currentPage, setCurrentPage] = useState(1)

    console.log(store)

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
        if (!cates.includes(ids)) {
            setCates([...cates, ids])
        } else {
            const filteredCategories = cates.filter((e) => e !== ids)
            setCates(filteredCategories)
        }
    }

    function captureText() {
        dispatch(pageMangasCards({
            title: title.current.value,
            page: currentPage,
        }))
    }

    useEffect(
        () => {
            dispatch(read_mangas({ title: title.current.value || "", cates, currentPage }))
        },
        [cates]
    )

    useEffect(
        () => {
            if (categories.length === 0) {
                dispatch(read_categories())
            }
        },
        []
    )

    return (
        <>
            <ScrollTop />
            <div className="md:right-1 md:bottom-[-10rem] md:opacity-60 z-0 md:h-[60%] md:w-[50%] md:absolute rounded-full md:bg-gradient-to-r from-black to-indigo-800 md:blur-[115px]"></div>
            <div className="text-white z-1 relative flex items-center w-full md:min-h-screen">
                <div className="h-[100vw] md:h-screen w-[25%] md:w-[20%] lg:w-[15%] flex items- justify-center">
                    <div className="flex-col flex gap-3 md:gap-10">
                        <h3 className="text-[4px] font-light md:text-xl">Categories</h3>
                        <div className="h-full md:h-full text-[3px] md:text-sm flex-col flex gap-1 md:gap-3">
                            <CategoriesList categories={categories} cates={cates} setCats={setCats}/>
                        </div>
                    </div>
                </div>
                <div className="w-[80%] flex flex-col lg:min-h-[83vw] md:w-[80%] lg:w-[80%] lg:ml-10 mt-4">
                    <h1 className="md:text-[2rem] md:mt-16 md:mb-[3rem]">Search your next manga <span className="drop-shadow-[0_0_30px_rgba(256,150,0,1)]">🤤</span></h1>
                    <div className="rounded-[5px] mt-2 md:mt-4 mb-3 md:mb-8 md:p-2 flex items-center border-[1px] border-[#ffffff1e] w-[95%] md:w-[40%] h-11 lg:bg-[#6060601e]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-8 ml-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                        <input className='md:text-[17px] md:mr-6 w-full text-center text-[#b5b3b3] bg-transparent placeholder:text-[#b5b3b3] placeholder:text-sm outline-none lg:text-[18px]' type="text" placeholder="Search" name="title" id="title" ref={title} onKeyUp={() => captureText()} />
                    </div>
                    <div className="md:w-full lg:w-[90%] flex flex-wrap gap-2 md:gap-7 md:mr-2 w-full min-h-[16rem] md:min-h-[34rem] lg:min-h-[60vw] xl:min-h-[47vw]">
                    <MangaCard mangas={mangas} imageMangaNoFound={imageMangaNoFound} />
                    </div>
                    <NavPages prevPage={prevPage} mangas={mangas} nextPage={nextPage} currentPage={currentPage} AiOutlineArrowLeft={AiOutlineArrowLeft} AiOutlineArrowRight={AiOutlineArrowRight} />
                </div>
            </div>
        </>
    )
}

export default Mangas