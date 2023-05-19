import { useRef } from "react"
import SelectCategories from "./SelectCategories"
const classInput = "text-white text-[2px] px-[3px] outline-none bg-transparent border-b-[1px] placeholder:font-montserrat placeholder:text-white"

function EditManga(props) {

    const {
        cat,
        title,
        desc,
        photo,
        category,
        onConfirm,
        onCancel,
    } = props

    return (
        <>
            <div className="bg-[#080809df] absolute flex justify-center z-20 h-[128vw] w-full">
                <div className="bg-[#010101cf] mt-8 w-[25rem] h-[30rem] flex flex-col justify-evenly fixed rounded-md shadow-[0_10px_0_rgba(256,250,250,1)]">
                    <h2 className="text-white mt-8 font-bold text-center">Edit Manga</h2>
                    <div className="flex flex-col items-center w-full justify-center gap-4">
                        <div className='flex-col flex w-[15rem] gap-5'>
                            <input
                                onChange={title}
                                className={classInput}
                                type="text"
                                name="insert"
                                placeholder="title of manga"
                                id="insertTitle"
                            />

                            <input
                                onChange={desc}
                                className={classInput}
                                type="text"
                                name="insert"
                                placeholder="insert description"
                                id="insertDescription"
                            />

                            <input
                                onChange={photo}
                                className={classInput}
                                type="text"
                                name="insert"
                                placeholder="insert url image of manga"
                                id="insertPhoto"
                            />
                        </div>
                        <SelectCategories cat={cat} category={category} />
                        <div className="flex flex-col items-center w-full justify-center gap-3 mt-4">
                            <button onClick={onConfirm} className="bg-[#ffffff] w-[15rem] h-10 rounded-[4px] font-montserrat font-extrabold cursor-pointer">
                                Send
                            </button>
                            <button onClick={onCancel} className="bg-[#ffffff] w-[15rem] h-10 rounded-[4px] font-montserrat font-extrabold">
                                cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditManga

