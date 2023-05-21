
export default function BrowserMangas(props) {

    const {title, tit, setTitleValue} = props

    return (
        <form className='rounded-[5px] mt-2 md:mt-4 mb-3 md:mb-8 md:p-2 flex items-center border-[1px] border-[#ffffff1e] w-[95%] md:w-[40%] h-11 lg:bg-[#6060601e]' action="">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-8 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <input className='md:text-[17px] md:mr-6 w-full text-center text-[#b5b3b3] bg-transparent placeholder:text-[#b5b3b3] placeholder:text-sm outline-none lg:text-[18px]' type="text" placeholder="Search" name="title" id="title" ref={tit} defaultValue={title} onChange={(e) => setTitleValue(e.target.value)} />
        </form>
    )
} 
