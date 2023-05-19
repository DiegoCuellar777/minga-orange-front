import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import apiUrl from '../../api';
import axios from 'axios';
import Swal from 'sweetalert2'
import SelectCategories from '../components/SelectCategories.jsx';
import { useSelector, useDispatch } from 'react-redux'
import action from '../redux/actions/inputs_mangaForm';

const { createMangaForm } = action
import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import apiUrl from '../../api';
import axios from 'axios';
import Swal from 'sweetalert2'
import SelectCategories from '../components/SelectCategories.jsx';
import { useSelector, useDispatch } from 'react-redux'
import action from '../redux/actions/inputs_mangaForm';

const { createMangaForm } = action

function MangaForm() {

    const store = useSelector(store => console.log(store.mangaForn))
    const dispatch = useDispatch()
    const [category, setCategory] = useState([]);
    const navigate = useNavigate();

    function saveData() {
        let data = {
            title: title.current.value,
            category_id: cat.current.value,
            cover_photo: urlPhoto.current.value,
            description: description.current.value
        }
        dispatch(createMangaForm(data))
    }

    useEffect(
        () => {
            fetchData();
        },
        []
    )

    function fetchData() {
        axios.get(apiUrl + 'categories')
            .then((res) => {
                setCategory(res.data.categories);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    let title = useRef(null)
    let cat = useRef(null)
    let urlPhoto = useRef("")
    let description = useRef(null)

    function handleForm(e) {
        e.preventDefault()
        const user = JSON.parse(localStorage.getItem("user"));
        const userId = user.id;
        const token = localStorage.getItem('token')
        const headers = { headers: { Authorization: `Bearer ${token}` } }
        const data = {
            author_id: userId,
            title: title.current.value,
            cover_photo: urlPhoto.current.value,
            description: description.current.value,
            category_id: cat.current.value,
        }
        axios.post(apiUrl + 'mangas', data, headers)
            .then(res => {
                Swal.fire({
                    title: 'Manga successfully created',
                    icon: 'success',
                    showConfirmButton: true,
                    confirmButtonText: 'Go to homepage',
                    allowOutsideClick: false,
                }).then(() => {
                    navigate('/');
                });
            }).catch(err => {
                const joi = err.response.data.message
                console.log(err.response.data.message)
                Swal.fire(`${joi}`)
            })
    }
    return (
        <div>
            <div className="w-full h-screen flex flex-col bg-black items-center justify-center">
                <div className="flex flex-col items-center justify-between p-6 w-full h-[25rem]">
                    <h1 className="text-white font-montserrat text-[1.6rem] font-light">New Manga</h1>
                    <form onSubmit={(e) => handleForm(e)} className="flex flex-col items-center w-[13rem] h-[18rem] justify-around">
                        <div className='flex-col flex w-full gap-5'>
                            <input onKeyUp={saveData} className="text-white text-sm px-[3px] outline-none bg-transparent border-b-[1px] placeholder:font-montserrat placeholder:text-white" ref={title} type="text" name="insert" placeholder="Insert title" id="insertTitle" />
                            <SelectCategories onChange={saveData} category={category} cat={cat} />
                            <input onKeyUp={saveData} className="text-white text-sm px-[3px] outline-none bg-transparent border-b-[1px] placeholder:font-montserrat placeholder:text-white" ref={urlPhoto} type="text" name="insert" placeholder="insert url image of manga" id="insertPhoto" />
                            <input onKeyUp={saveData} className="text-white text-sm px-[3px] outline-none bg-transparent border-b-[1px] placeholder:font-montserrat placeholder:text-white" ref={description} type="text" name="insert" placeholder="insert description" id="insertDescription" />
                        </div>
                        <input className="bg-white w-full h-10 rounded-[4px] font-montserrat font-extrabold" type="submit" value="Send" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default MangaForm


function MangaForm() {

    const store = useSelector(store => console.log(store.mangaForn))
    const dispatch = useDispatch()
    const [category, setCategory] = useState([]);
    const navigate = useNavigate();

    function saveData() {
        let data = {
            title: title.current.value,
            category_id: cat.current.value,
            cover_photo: urlPhoto.current.value,
            description: description.current.value
        }
        dispatch(createMangaForm(data))
    }

    useEffect(
        () => {
            fetchData();
        },
        []
    )

    function fetchData() {
        axios.get(apiUrl + 'categories')
            .then((res) => {
                setCategory(res.data.categories);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    let title = useRef(null)
    let cat = useRef(null)
    let urlPhoto = useRef("")
    let description = useRef(null)

    function handleForm(e) {
        e.preventDefault()
        const user = JSON.parse(localStorage.getItem("user"));
        const userId = user.id;
        const token = localStorage.getItem('token')
        const headers = { headers: { Authorization: `Bearer ${token}` } }
        const data = {
            author_id: userId,
            title: title.current.value,
            cover_photo: urlPhoto.current.value,
            description: description.current.value,
            category_id: cat.current.value,
        }
        axios.post(apiUrl + 'mangas', data, headers)
            .then(res => {
                Swal.fire({
                    title: 'Manga successfully created',
                    icon: 'success',
                    showConfirmButton: true,
                    confirmButtonText: 'Go to homepage',
                    allowOutsideClick: false,
                }).then(() => {
                    navigate('/');
                });
            }).catch(err => {
                const joi = err.response.data.message
                console.log(err.response.data.message)
                Swal.fire(`${joi}`)
            })
    }
    return (
        <div>
            <div className="w-full h-screen flex flex-col bg-black items-center justify-center">
                <div className="flex flex-col items-center justify-between p-6 w-full h-[25rem]">
                    <h1 className="text-white font-montserrat text-[1.6rem] font-light">New Manga</h1>
                    <form onSubmit={(e) => handleForm(e)} className="flex flex-col items-center w-[13rem] h-[18rem] justify-around">
                        <div className='flex-col flex w-full gap-5'>
                            <input onKeyUp={saveData} className="text-white text-[2px] px-[3px] outline-none bg-transparent border-b-[1px] placeholder:font-montserrat placeholder:text-white" ref={title} type="text" name="insert" placeholder="Insert title" id="insertTitle" />
                            <SelectCategories onChange={saveData} category={category} cat={cat} />
                            <input onKeyUp={saveData} className="text-white text-[2px] px-[3px] outline-none bg-transparent border-b-[1px] placeholder:font-montserrat placeholder:text-white" ref={urlPhoto} type="text" name="insert" placeholder="insert url image of manga" id="insertPhoto" />
                            <input onKeyUp={saveData} className="text-white text-[2px] px-[3px] outline-none bg-transparent border-b-[1px] placeholder:font-montserrat placeholder:text-white" ref={description} type="text" name="insert" placeholder="insert description" id="insertDescription" />
                        </div>
                        <input className="bg-white w-full h-10 rounded-[4px] font-montserrat font-extrabold" type="submit" value="Send" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default MangaForm

