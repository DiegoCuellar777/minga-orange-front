/* import apiUrl from '../../api';
import axios from 'axios';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';



function EditManga(props) {

    const dispatch = useDispatch()
    const {id} = props
    const title = useRef("")
    //const category =

    function saveData() {
        let data = {
            title: title.current.value,
            category_id: cat.current.value,
            cover_photo: urlPhoto.current.value,
            description: description.current.value
        }
        dispatch((data))
    }


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
    }

    return (
        <>
            <div className="bg-[#080809df] absolute flex justify-center z-10 h-[128vw] w-full">
                <div className="bg-[#010101cf] mt-8 w-[25rem] h-[30rem] flex flex-col justify-evenly fixed rounded-md shadow-[0_10px_0_rgba(256,250,250,1)]">
                    <h2 className="text-white mt-8 font-bold text-center">Edit Manga</h2>
                    <form onSubmit={(e) => handleForm(e)} className="flex flex-col items-center w-full justify-center gap-4">
                        <div className='flex-col flex w-[15rem] gap-5'>
                            <input onKeyUp={saveData} className="text-white text-[2px] px-[3px] outline-none bg-transparent border-b-[1px] placeholder:font-montserrat placeholder:text-white" ref={title} type="text" name="insert" placeholder="title of manga" id="insertTitle" />
                            <input onKeyUp={saveData} className="text-white text-[2px] px-[3px] outline-none bg-transparent border-b-[1px] placeholder:font-montserrat placeholder:text-white" ref={description} type="text" name="insert" placeholder="insert description" id="insertDescription" />
                            <input onKeyUp={saveData} className="text-white text-[2px] px-[3px] outline-none bg-transparent border-b-[1px] placeholder:font-montserrat placeholder:text-white" ref={urlPhoto} type="text" name="insert" placeholder="insert url image of manga" id="insertPhoto" />
                            <SelectCategories onChange={saveData} category={category} cat={cat} />
                        </div>
                        <div className="flex flex-col items-center w-full justify-center gap-3 mt-4">
                            <input className="bg-[#ffffff] w-[15rem] h-10 rounded-[4px] font-montserrat font-extrabold" type="submit" value="Send" />
                            <button className="bg-[#ffffff] w-[15rem] h-10 rounded-[4px] font-montserrat font-extrabold">
                                cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EditManga

 */