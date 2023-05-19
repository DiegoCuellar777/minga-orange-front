import { useState, useEffect, useRef } from "react"
import { Link as Anchor, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import actions from '../redux/actions/mangasCards'
import categories_actions from '../redux/actions/mangasGet'
import mangas_actions from '../redux/actions/mangaGet_Me'
import { AiOutlineArrowRight, AiOutlineArrowLeft, AiFillPlusCircle, AiFillEdit, AiFillDelete } from "react-icons/ai";
import { BsFillPatchPlusFill } from "react-icons/bs";
import { RiEditBoxFill } from "react-icons/ri";
import mangaNoFound from '../assets/images/R.png'
import MangaDetails from "./MangaDetails"
//import EditManga from "../components/EditManga.jsx"
import DeleteMangaAlert from '../components/DeleteMangaAlert.jsx'
//import EditManga from "../components/EditManga.jsx"
//import BrowserMangas from "../components/BrowserMangas.jsx";
import SelectCategories from "../components/SelectCategories"
import EditManga from "../components/EditManga"
//import MangaCard from "../components/MangaCard.jsx";

function MyMangas() {

    const { read_mangas_me, delete_mangas_me, upd_mangas_me } = mangas_actions
    const { read_categories } = categories_actions

    const imageMangaNoFound = <img className="w-[10rem] absolute right-100 bottom-52" src={mangaNoFound} alt="mangaNofound" />
    const store = useSelector(store => store)
    const mangas_me = useSelector(store => store.mangasGetMe_reducer.mangas_me)
    const categories = useSelector(store => store.mangasGet_reducer.categories)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const category_id = useRef("")
    const tit = useRef('')
    const cat = useRef('')
    const [title, setTitleValue] = useState('');
    const [reload, setReload] = useState(false)
    const [cates, setCates] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [editItemId, setEditItemId] = useState('')
    const [showAlertDelete, setShowAlertDelete] = useState(false);
    const [elementId, setElementId] = useState('');
    const [titleEdit, setTitleEdit] = useState('')
    const [photoEdit, setPhotoEdit] = useState('')
    const [descEdit, setDescEdit] = useState('')
    const [categoryEdit, setCateEdit] = useState('')
    const [catEdit, setCatEdit] = useState('')

    console.log(editItemId)

    //const [currentPage, setCurrentPage] = useState(1)

    //function captureText() {
    //    setReload(!reload);
    //    dispatch(
    //       pageMangasCards({
    //  title: title,
    //page: currentPage,
    /*             id: ,
    category_id: ,*/
    //       })
    //   )
    //}

    /* const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            navigate(`/mymangas/${currentPage - 1}`)
        }
        captureText()
    }
    const nextPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage + 1);
            navigate(`/mymangas/${currentPage + 1}`)
        }
        captureText()
    }  */



    const editChapter = (id) => {
        navigate(`/chapter-form/${id}`)
    }
    const moreChapter = (id) => {
        navigate(`/edit/${id}`)
    }

    const mangaDetails = (id) => {
        navigate(`/manga/${id}`)
    }

    
    const openModalEdit = (id) => {
        setIsModalOpen(true)
        setEditItemId(id)
    }
    const confirmEdit = () => {
        const data = {}
        if (titleEdit){
            data.title = titleEdit
        }
        if (photoEdit){
            data.cover_photo = photoEdit
        }
        if (descEdit) {
            data.description = descEdit
        }
        if (categoryEdit) {
            data.category_id = categoryEdit
        }
        console.log(data)
        dispatch(upd_mangas_me({ id: editItemId, ...data}))
        setIsModalOpen(false)
    }
    const closeModalEdit = () => {
        setIsModalOpen(false)
    }


    const deleteShowAlert = (id) => {
        setShowAlertDelete(true)
        setElementId(id)
    }
    const confirmDelete = () => {
        dispatch(delete_mangas_me({ id: elementId }))
        setShowAlertDelete(false)
    }
    const handleCancel = () => {
        setShowAlertDelete(false)
    }

    function setCats(ids) {
        if (!cates.includes(ids)) {
            setCates([...cates, ids])
        } else {
            const filteredCategories = cates.filter((e) => e !== ids)
            setCates(filteredCategories)
        }
        setReload(!reload)
    }

    useEffect(
        () => {

            dispatch(read_mangas_me({ title: title || "", cates }))

        },
        [cates, reload]
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
            {showAlertDelete && (
                <DeleteMangaAlert
                    message="¿Estás seguro de eliminar?"
                    onConfirm={confirmDelete}
                    onCancel={handleCancel}
                />
            )}
            {isModalOpen && (
                <EditManga
                    cat={(e) => setCatEdit(e?.target?.value)}
                    category={(e) => setCateEdit(e?.target?.value)}
                    title={(e) => setTitleEdit(e?.target?.value)}
                    photo={(e) => setPhotoEdit(e?.target?.value)}
                    desc={(e) => setDescEdit(e?.target?.value)}
                    onConfirm={confirmEdit}
                    onCancel={closeModalEdit}
                />
            )}
            <div className="md:right-1 md:bottom-[-10rem] md:opacity-60 z-0 md:h-[60%] md:w-[50%] md:absolute rounded-full md:bg-gradient-to-r from-black to-indigo-800 md:blur-[115px]"></div>
            <div className="text-white z-1 flex items-center  w-full md:min-h-screen">
                <div className="h-[100vw] md:h-screen w-[25%] md:w-[20%] lg:w-[15%] flex items- justify-center">
                    <div className="flex-col flex gap-3 md:gap-10">
                        <h3 className="text-[4px] font-light md:text-xl">Categories</h3>
                        <div className="h-full md:h-full text-[3px] md:text-sm flex-col flex gap-1 md:gap-3">
                            {categories ? categories.map((eachCategory, index) => (
                                <button className={`text-start ${cates?.includes(eachCategory._id) ? 'text-white' : 'text-[#9d9d9d]'}`} ref={category_id} data-valor={eachCategory._id} key={index} id={eachCategory._id} onClick={() => setCats(eachCategory._id)}>
                                    {eachCategory.name}
                                </button>
                            )) : <p className="text-[#9d9d9d]">No categories found</p>}
                        </div>
                    </div>
                </div>
                <div className="w-[80%] flex flex-col justify-between  md:w-[80%] lg:w-[80%] lg:ml-10 mt-4">
                    <h1 className="md:text-[2rem] md:mt-16 md:mb-[3rem]">My mangas <span className="drop-shadow-[0_0_25px_rgba(256,0,0,1)]">❤️</span></h1>
                    <div className="rounded-[5px] mt-2 md:mt-4 mb-3 md:mb-8 md:p-2 flex items-center border-[1px] border-[#ffffff1e] w-[95%] md:w-[40%] h-11 lg:bg-[#6060601e]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-8 ml-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                        <input className='md:text-[17px] md:mr-6 w-full text-center text-[#b5b3b3] bg-transparent placeholder:text-[#b5b3b3] placeholder:text-sm outline-none lg:text-[18px]' type="text" placeholder="Search" name="title" id="title" ref={tit} defaultValue={title} onChange={(e) => setTitleValue(e.target.value)} />
                    </div>
                    <div className="md:w-full lg:w-[90%] mb-16 flex flex-wrap gap-2 md:gap-7 md:mr-2 w-full min-h-[16rem] md:min-h-[34rem] lg:min-h-[0rem] xl:min-h-[47vw]">
                        <Anchor to={`/manga-form`} key="-1" className="relative sm:h-[3rem] h-[8rem] md:h-[14rem] md:w-[12rem] lg:h-[19rem]">
                            <div className="bg-[#4d4d4d27] animate-pulse duration-300 ease-in-out w-full h-full absolute z-0 rounded-md"></div>
                            <div className="w-full h-full flex flex-col items-center justify-center duration-300 ease-in-out hover:text-[#ff3b3b] animate-pulse z-1 absolute">
                                <AiFillPlusCircle className="w-full h-[27%]" />
                                <p className="text-[2px] font-[200] cursor-pointer sm:font-[700] sm:text-sm md:text-lg"> New Manga </p>
                            </div>
                        </Anchor>
                        {mangas_me.length > 0 ? mangas_me.map((eachManga, index) => (
                            <div /* onClick={() => mangaDetails(eachManga._id)} */ key={index} className="h-full w-[22vw] md:w-[10rem] text-[#ffffff90] z-10 lg:w-[12rem] text-white hover:text-white md:h-[16rem] lg:h-[21rem] lg:min-h-[21rem] flex-col flex justify-between hover:scale-[1.05] hover:-translate hover:drop-shadow-[0_0_100px_rgba(250,0,0,0.5)] duration-100 ease-in">
                                <img className="sm:h-[3rem] h-[8rem] relative z-1 cursor-pointer md:h-[14rem] lg:h-[19rem] object-cover rounded-md" src={eachManga.cover_photo} alt="" />
                                <div className="w-[22vw] md:w-[10rem] lg:w-[12rem] md:h-[14rem] lg:h-[19rem] sm:h-[3rem] h-[8rem] flex flex-col items-center justify-between absolute z-10">

                                    <div className="w-full relative z-4 h-full flex justify-end p-3 text-[#ffffff] drop-shadow-[0_1px_1px_rgba(100,0,0,1)] hover:drop-shadow-[0_2px_3px_rgba(100,0,0,1)] duration-100">
                                        <BsFillPatchPlusFill onClick={()=>moreChapter(eachManga._id)} className="hover:text-[#ffffff80] duration-100" />
                                        <RiEditBoxFill onClick={()=>editChapter(eachManga._id)} className="hover:text-[#ffffff80] duration-100" />
                                    </div>
                                    <div className="flex justify-evenly gap-2 items-center w-[50%] h-[10%] bg-[#ff3b3bbe]  rounded-t-md ">
                                        <button onClick={() => openModalEdit(eachManga._id)} className="rounded-full  hover:text-[#ffffff80]"> <AiFillEdit className="w-4 h-4 " /> </button>
                                        <button onClick={() => deleteShowAlert(() => setElementId(eachManga._id))} className="rounded-full  hover:text-[#ffffff80]"> <AiFillDelete className="w-4 h-4 " /> </button>
                                    </div>

                                </div>
                                <p onClick={() => mangaDetails(eachManga._id)} className="text-[2px] font-[200] cursor-pointer sm:font-[300] sm:text-sm md:text-md ">{eachManga.title}</p>
                            </div>
                        )) : <div className="flex relative items-center justify-center w-screen">
                            {imageMangaNoFound}
                            <p className="text-[#ffffff] relative text-4xl bottom-52  font-black">¡Ups! No Mangas found</p>
                        </div>}
                    </div>
                </div>
            </div>
        </>
    )
}
export default MyMangas



/* 
                    <div className="flex w-full md:w-[95%] lg:w-[75%] justify-evenly md:justify-between my-6 md:my-[2.4rem]">
                        {currentPage > 1 ? (
                            <button onClick={prevPage} className="bg-[#ca2828] text-[0px] w-[3rem] h-4 md:w-[4rem] md:h-[1.5rem] flex items-center justify-center rounded-md font-bold md:text-md text-white"><span> <AiOutlineArrowLeft className="text-[0.8rem]" /></span></button>
                        ) : <button className="text-[0px] w-[3rem] h-4 opacity-50 md:w-[4rem] md:h-[1.5rem] flex items-center justify-center rounded-md font-bold md:text-md bg-[#402222]" disabled><span> <AiOutlineArrowLeft className="text-[0.8rem]" /></span></button>}
                        {mangas && mangas.length >= 6 ? (
                            <button onClick={nextPage} className="bg-[#ca2828] text-[0px] w-[3rem] h-4 md:w-[4rem] md:h-[1.5rem] flex items-center justify-center rounded-md font-bold md:text-md text-white"><span> <AiOutlineArrowRight className="text-[0.8rem]" /></span></button>
                        ) : <button className="text-[0px] w-[3rem] h-4 opacity-50 md:w-[4rem] md:h-[1.5rem] flex items-center justify-center rounded-md font-bold md:text-md bg-[#402222]" disabled><span> <AiOutlineArrowRight className="text-[0.8rem] md:text-sm" /></span></button>}
                    </div> */