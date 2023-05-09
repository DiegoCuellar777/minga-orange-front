import { useState, useEffect, useRef } from "react"
//import { useParams } from 'react-router-dom';
import axios from "axios"
import apiUrl from '../../api';
//import imagen from "../assets/images/image4.png"
//import BrowserMangas from "../components/BrowserMangas.jsx";
//import MangaCard from "../components/MangaCard.jsx";

function Mangas() {
//    let { id } = useParams()
    const title = useRef('')
    const category_id = useRef('')
    const [mangas, setMangas] = useState([])
    const [categories, setCategories] = useState([])
    const [reload, setReload] = useState(false)

    useEffect(
        () => {
            let token = localStorage.getItem('token')
            axios.get(apiUrl + `mangas?title=${title.current.value}&category_id=&author_id=`, { headers: { Authorization: `Bearer ${token}` } })
                .then(res => setMangas(res.data.response))
                .catch(err => console.log(err))
        },
        [reload]
    )
    useEffect(
        () => {
            
            let categorieS = Object.values(category_id.current)
            let values = [] 
/*            categorieS.forEach(each => {
                 if (each.) {
                    values.push(each.value)
                }
            })  */  
            axios.get(apiUrl + 'categories')
                .then(res => setCategories(res.data.categories))
                .catch(err => console.log(err))
        },
        []
    )
    console.log()
   
    return (
        <>
            <div className="text-white flex  w-full ">
                <div className="h-full md:w-[20%] mt-8 flex items-center justify-center">
                    <div className="flex-col flex gap-10">
                        <h3 className="md:text-xl">Categories</h3>
                        <div className="h-[14rem] text-sm flex-col flex gap-3">
                            {categories ? categories.map((eachCategory, index) => (                                
                                <button className="border rounded-[4px]" ref={category_id} key={index} id={eachCategory.category_id} onClick={() => setReload(!reload)}>
                                    {eachCategory.name}
                                </button>
                            )) : null}
                        </div>
                    </div>
                </div>
                <div className="w-[80%] mt-4">

                    <h1 className="text-xl font-bold">Search your next manga</h1>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-7 h-7 ml-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    <input className='text-[17px] text-center text-[#ffffffea] bg-white text-black lg:font-bold lg:text-[18px]' type="text" name="title" id="title" ref={title} onKeyUp={() => setReload(!reload)} />

                    <div className="flex flex-wrap gap-7">
                        {mangas ? mangas.map((eachManga, index) => (
                            <div key={index}>
                                <div className="w-[10rem] text-white">
                                    <img className="" src={eachManga.cover_photo} alt="" />
                                    <p>{eachManga.title}</p>
                                </div>
                            </div>
                        )) : null}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mangas