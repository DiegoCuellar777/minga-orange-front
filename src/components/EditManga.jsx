import { useRef } from "react"
import SelectCategories from "./SelectCategories"
const classInput = "text-black text-sm px-[3px] outline-none bg-transparent border-b-[2px] placeholder:font-montserrat placeholder:font-[500] placeholder:text-black"

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
            <div className="bg-[#000000c0] absolute flex justify-center z-20 h-[107vw] w-full">
                <div className="bg-[#ffffff] mt-8 w-[25rem] top-28 h-[30rem] flex flex-col justify-evenly fixed rounded-xl">
                    <h2 className="text-black mt-8 font-bold text-xl text-center">Edit Manga</h2>
                    <div className="flex flex-col items-center w-full justify-center gap-4">
                        <div className='flex-col flex w-[15rem] gap-5'>
                            <input
                                onChange={title}
                                className={classInput}
                                type="text"
                                name="insert"
                                autoComplete="off"
                                placeholder="title of manga"
                                id="insertTitle"
                            />

                            <input
                                onChange={desc}
                                className={classInput}
                                type="text"
                                name="insert"
                                autoComplete="off"
                                placeholder="insert description"
                                id="insertDescription"
                            />

                            <input
                                onChange={photo}
                                className={classInput}
                                type="text"
                                name="insert"
                                autoComplete="off"
                                placeholder="insert url image of manga"
                                id="insertPhoto"
                            />
                        </div>
                        <SelectCategories cat={cat} class={classInput} category={category} />
                        <div className="flex flex-col items-center w-full justify-center gap-3 mt-4">
                            <button onClick={onConfirm} className="bg-[#ffffff] hover:bg-[#0A7AFF] w-[15rem] text-[#0A7AFF] hover:text-white transition-colors h-10 border-[2px] rounded-xl border-[#0A7AFF] rounded-[4px font-montserrat font-extrabold cursor-pointer">
                                Send
                            </button>
                            <button onClick={onCancel} className="bg-[#ffffff] hover:bg-[#EE8380] w-[15rem] text-[#EE8380] hover:text-white transition-colors h-10 border-[2px] rounded-xl border-[#EE8380] font-montserrat font-extrabold">
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

