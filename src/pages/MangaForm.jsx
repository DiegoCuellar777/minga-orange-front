import SelectCategories from '../components/SelectCategories';

function Mangas() {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-between p-6 w-full h-[22rem]">
                <h1 className="text-white font-montserrat text-[1.5rem] font-light">New Manga</h1>
                <form className="flex flex-col w-[12rem] h-[7rem] justify-around">
                    <input className="text-white text-[2px] outline-none bg-transparent border-b-[1px] placeholder:font-montserrat" type="text" name="insert" placeholder="Insert title" id="insertTitle" />
                    <SelectCategories />
                    <input className="text-white text-[2px] outline-none bg-transparent border-b-[1px] placeholder:font-montserrat" type="text" name="insert" placeholder="insert description" id="insertDescription" />
                </form>
                <button className="bg-white w-[12rem] h-10 rounded-[4px] font-montserrat font-extrabold">
                    Send
                </button>
            </div>
        </div>
    )
}

export default Mangas