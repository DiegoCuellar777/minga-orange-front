import logo from "../images/Logo 2 1.png"
import menu from "../images/Vector 9.png"

export default function Navbar() {
    return (
        <nav className='h-[13.33%] w-screen flex justify-between items-center px-5 py-2 md:border-b border-slate-600'>
            <div className='h-8 w-12 px-2 flex flex-col justify-around  items-center '>
                <img src={menu} alt="logo" />
                <img src={menu} alt="logo" />
                <img src={menu} alt="logo" />
            </div>
            <img src={logo} alt="logo" className='h-[60%]'/>
        </nav>
    )
}
