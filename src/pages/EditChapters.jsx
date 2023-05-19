import Nav from '../components/Nav';
import { useState, useEffect } from 'react';
import axios from 'axios';
import apiUrl from '../../api';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import mangas_actions from "../redux/actions/mangas"
import chapters_actions from "../redux/actions/chapterData"

export default function EditChapters() {

    const {manga_id} = useParams()
    const {getMangaDataAsync} = mangas_actions
    const {get_chapters} = chapters_actions

    let store = useSelector(store=>store)
    let manga = store.manga.manga
    let chapters = store.chapters.chapters
    console.log(manga)
    console.log(chapters)

    let dispatch = useDispatch()

    useEffect(() => {
        if (manga.length === 0) {
            dispatch(getMangaDataAsync(manga_id));
        }
        }, []);
    
    useEffect(() => {
        if (chapters.length === 0) {
            dispatch(get_chapters(manga_id));
        }
    }, []);

    const [chapterTitle, setTitle] = useState("")
    const [chapterImg, setImage] = useState(manga.cover_photo)
    const [chapterNum, setNum] = useState("")
    const [data, setData] =useState("")
    
    function handleTitle(e) {

        let selectedChapter = chapters.find(chapter=> chapter.title === e.target.value )
        
        setTitle(e.target.value)
        setNum(selectedChapter.order)
        setImage(selectedChapter.cover_photo)
    }

    function handleData(e) {
        
        console.log(e.target.value)

        let selectedChapter = chapters.find(chapter=> chapter.title === chapterTitle )
    
        setData(selectedChapter[e.target.value])
    }

    const [inputValue, setInputValue] = useState(""); // Agregar estado para el valor del campo de entrada

    function handleInputChange(e) {
    setInputValue(e.target.value);
    }

    return (
        <div>
            <Nav />
            <div className='w-screen h-screen bg-[url("/images/Ellipse.png")] bg-cover flex'>
                <div className='p-[5%] w-[95%] lg:w-[50%] text-[#9D9D9D] flex flex-col justify-around   items-center mx-auto'>
                <h1 className='text-4xl text-white'>Edit Chapter</h1>
                <div className='space-y-3  flex flex-col w-[80%] lg:w-[60%]'>
                    <h2 className='p-1  border-b-[1px] border-white'>{manga.title}</h2> {/* Mostrar el título del manga */}
                    <select name='chapters' id='chapters' className='p-1 border-b-[1px] border-white bg-transparent' onChange={handleTitle}>
                        <option value=''>select chapter</option>
                        {chapters.map((chapterItem) => (
                            <option key={chapterItem.order} value={chapterItem.id}>{chapterItem.title}</option>
                        ))}
                    </select>
                    <select name='chapters' id='data' className='bg-transparent  border-b-[1px] border-white' onChange={handleData}>
                        <option value=''>select data</option>
                        <option value="title">Title</option>
                        <option value="pages">Pages</option>
                        <option value="cover_photo">Cover photo</option>
                    </select>
                    <input type='text' value={data? data :' data to edit'} className='bg-transparent border-b-[1px] border-white' onChange={handleInputChange}/>
                </div>
                <div className='w-[60%] lg:w-[60%] flex flex-col space-y-7'>
                    <button className='text-white bg-[#34D399] py-5 rounded-lg'>Edit</button>
                    <button className='text-white bg-[#EE8380] py-5 rounded-lg'>Delete</button>
                </div>
                </div>
                <div className='hidden lg:flex flex-col justify-center items-center w-[50%] p-[5%]'>
                <h2 className='text-white text-center'>{chapterTitle? "Chapter #"+ chapterNum + "- "+ chapterTitle:""}</h2>
                <img className='w-[60%] object-cover' src={chapterImg? chapterImg:manga.cover_photo} alt='' /> 
                </div>
            </div>
        </div>
);
}
