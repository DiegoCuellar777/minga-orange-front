import { useState, useEffect, useRef } from "react"
import { Link as Anchor, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import mangas_actions from '../redux/actions/mangaGet_Me'
import categories_actions from '../redux/actions/mangasGet'
import BrowserMangas from "../components/BrowserMangas.jsx";
import CategoriesList from "../components/CategoriesList"
import ScrollTop from "../components/ScrollTop"
import MangaCard_Me from "../components/MangaCard_Me"
import ErrorEdit from "../components/ErrorEdit"
import EditManga from "../components/EditManga"
import InfoModal from "../components/InfoModal"
import DeleteMangaAlert from '../components/DeleteMangaAlert.jsx'
import NewMangaCard from "../components/NewMangaCard";

function MyMangas() {

    const { read_categories } = categories_actions

    const store = useSelector(store => store)
    const categories = useSelector(store => store.mangasGet_reducer.categories)
    const { delete_mangas_me, upd_mangas_me } = mangas_actions
    const dispatch = useDispatch()
    const tit = useRef('')
    const cat = useRef('')
    const [title, setTitleValue] = useState('');
    const [cates, setCates] = useState([])
    const [elementId, setElementId] = useState('');
    const [titleEdit, setTitleEdit] = useState('')
    const [photoEdit, setPhotoEdit] = useState('')
    const [descEdit, setDescEdit] = useState('')
    const [categoryEdit, setCateEdit] = useState('')
    const [catEdit, setCatEdit] = useState('')
    const [errorEdit, setErrorEdit] = useState(false)
    const [info, setInfo] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [editItemId, setEditItemId] = useState('')
    const [showAlertDelete, setShowAlertDelete] = useState(false);

    //const navigate = useNavigate()
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

    const openModalEdit = (id) => {
        setIsModalOpen(true)
        setEditItemId(id)
    }
    const confirmEdit = () => {
        const data = {}
        if (titleEdit) {
            data.title = titleEdit
        }
        if (photoEdit) {
            data.cover_photo = photoEdit
        }
        if (descEdit) {
            data.description = descEdit
        }
        if (categoryEdit) {
            data.category_id = categoryEdit
        }
        if (
            titleEdit == ""
            && photoEdit == ""
            && descEdit == ""
            && categoryEdit == ""
        ) {
            setErrorEdit(true)
        }
        if (
            titleEdit.length !== 0
            || photoEdit.length !== 0
            || descEdit.length !== 0
            || categoryEdit.length !== 0
        ) {
            dispatch(upd_mangas_me({ id: editItemId, ...data }))
            setIsModalOpen(false)
            setInfo(true)
        }
    }
    const closeInfo = () => {
        setInfo(false)
    }
    const closeErrorEdit = () => {
        setErrorEdit(false)
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
    }

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
            {info && (
                <InfoModal
                    message="Successfully updated!"
                    onCancel={closeInfo}
                />
            )}
            {errorEdit && (
                <ErrorEdit
                    message="Ups! Unable to send empty"
                    onCancel={closeErrorEdit}
                />
            )}
            {showAlertDelete && (
                <DeleteMangaAlert
                    message="Are you sure want to delete?"
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
            <ScrollTop />
            <div className="md:right-1 md:bottom-[-10rem] md:opacity-60 z-0 md:h-[60%] md:w-[50%] md:absolute rounded-full md:bg-gradient-to-r from-black to-indigo-800 md:blur-[115px]"></div>
            <div className="text-white z-1 flex items-center  w-full md:min-h-screen">
                <div className="w-[25%] md:w-[20%] lg:w-[15%] h-[79vw] flex items-start pt-[13rem] justify-center">
                    <div className="flex-col flex gap-3 md:gap-10">
                        <h3 className="text-[4px] font-light md:text-xl">Categories</h3>
                        <div className="h-full md:h-full text-[3px] md:text-sm flex-col flex gap-1 md:gap-3">
                            <CategoriesList categories={categories} cates={cates} setCats={setCats} />
                        </div>
                    </div>
                </div>
                <div className="w-[80%] flex flex-col justify-between  md:w-[80%] lg:w-[80%] lg:ml-10 mt-4">
                    <h1 className="md:text-[2rem] md:mt-16 md:mb-[3rem]">My mangas <span className="drop-shadow-[0_0_25px_rgba(256,0,0,1)]">❤️</span></h1>

                    <BrowserMangas tit={tit} title={title} setTitleValue={setTitleValue} />
                    <div className="md:w-full lg:w-[90%] mb-16 flex flex-wrap gap-2 md:gap-7 md:mr-2 w-full min-h-[16rem] md:min-h-[34rem] lg:min-h-[50rem] xl:min-h-[47vw]">
                        <NewMangaCard />
                        <MangaCard_Me cates={cates} title={title} openModalEdit={openModalEdit} deleteShowAlert={deleteShowAlert} setElementId={setElementId} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default MyMangas







