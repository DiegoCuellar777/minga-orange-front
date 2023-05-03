import { useState, useEffect } from 'react';
import { useRef } from 'react';
import apiUrl from '../../api.js';
import axios from 'axios';


function MangaForm() {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    function fetchData() {
        axios.get(apiUrl + 'categories')
            .then((res) => {
                setCategory(res.data.categories);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    
    let title = useRef(null)
    let cat = useRef(null)
    let description = useRef(null)

    function handleForm(e) {
        e.preventDefault()
        let data = {
            title: title.current.value,
            cat: cat.current.value,
            description: description.current.value 
        }
        axios.post(apiUrl + 'mangas' , data).then(res=>console.log(res))
    }
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-between p-6 w-full h-[22rem]">
                <h1 className="text-white font-montserrat text-[1.5rem] font-light">New Manga</h1>
                <form onSubmit={(e) => handleForm(e)} className="flex flex-col w-[12rem] h-[15rem] justify-around">
                    
                        <input className="text-white text-[2px] outline-none bg-transparent border-b-[1px] placeholder:font-montserrat" ref={title} type="text" name="insert" placeholder="Insert title" id="insertTitle" />
                        <select 
                            ref={cat}
                            name="select"
                            className="text-white border-b-[1px] outline-none bg-transparent text-[2px] font-montserrat"
                            id=""
                        >
                            <option className='text-black' disabled value="">Insert category</option>
                            {category.map((option) => (
                                <option className='text-black' key={option.id}>
                                    {option.name}
                                </option>
                            ))}
                        </select>
                        <input className="text-white text-[2px] outline-none bg-transparent border-b-[1px] placeholder:font-montserrat" ref={description} type="text" name="insert" placeholder="insert description" id="insertDescription" />
                        
                    <input className="bg-white w-[12rem] h-10 rounded-[4px] font-montserrat font-extrabold" type="submit" value="Send" />
                </form>
            </div>
        </div>
    )
}

export default MangaForm

