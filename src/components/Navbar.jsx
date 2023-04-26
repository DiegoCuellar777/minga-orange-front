import { useState } from "react";

import logo from "/images/Logo 2 1.png"
import menu from "/images/Vector 9.png"

export default function Navbar() {

    let [hideShow, setHide] = useState(true)
    
    function show() {
        setHide(!hideShow)
    }


    return (
       <>
        {
            hideShow ? (
                <>
                <nav className='h-[13.33%] w-screen flex justify-between items-center px-5 py-4 md:border-b border-slate-600 sticky top-0 z-50 bg-black'>
                <div onClick={show} className='h-8 w-12 px-2 flex flex-col justify-around  items-center '>
                    <img src={menu} alt="logo" />
                    <img src={menu} alt="logo" />
                    <img src={menu} alt="logo" />
                </div>
                <img src={logo} alt="logo" className='h-[60%]'/>
                </nav>
                </>
                    
                ) :
                (
                    <>
                    
                    <nav className=' w-screen flex flex-col px-5 py-4 md:border-b border-slate-600 sticky top-0 z-50 bg-black '>
                        <div className="flex justify-between items-center text-white  flex-wrap">
                            <div onClick={show} className='h-8 w-12 px-2 flex flex-col justify-around  items-center '>
                                <img src={menu} alt="logo" />
                                <img src={menu} alt="logo" />
                                <img src={menu} alt="logo" />
                            </div>
                           
                            <img src={logo} alt="logo" className='h-[60%]'/>
                        </div>
                        <div className="block absolute top-[103px]  left-0 h-screen md:w-[25vw] sm:w-[60%] bg-gradient-to-r from-gray-700 to-black z-50" >
                            <a className="block bg-white text-black p-2 m-4 rounded-2xl md:text-2xl sm:text-lg" href="">Home</a>
                            <a className="block text-white p-2 md:text-2xl sm:text-lg m-4" href="">Mangas</a>
                            <a className="block text-white p-2 md:text-2xl sm:text-lg m-4" href="">MyMangas</a>
                            <a className="block text-white p-2 md:text-2xl sm:text-lg m-4" href="">Favorites</a>
                            <a className="block text-white p-2 md:text-2xl sm:text-lg  m-4" href="">Logout</a>
                        </div>
                        </nav>
                    
                    </>
                )
            }
       </>
    )
}
