import logo from "/images/Logo 2 1.png"


import footer from "/images/footer.png"
import fb from "/images/Facebook.png"
import vm from "/images/Vimeo.png"
import tw from "/images/Twitter.png"
import yt from "/images/Youtube.png"
import donate from "/images/donate.png"

export default function Footer() {
    return (
        <footer className='w-[100%] bg-black sm:flex sm:flex-col sm:justify-center '>
            <img src={footer} alt="" className='w-[100%] rounded-b-full'/>
            <div className='flex md:justify-around md:p-24 md:items-center sm:flex-col sm:items-center sm:gap-12 sm:w-[100%] sm:p-6'>
                <div className='md:w-[15%] flex justify-between sm:w-[75%]'>
                    <a href="" className='text-white'>Home</a>
                    <a href="" className='text-white'>Mangas</a>
                </div>
                <img src={logo} alt="logo" className='md:h-[30%] sd:w-[80%]'/>
                <div className='md:w-[15%] flex flex-col gap-5 items-center' >
                    <div className='flex md:w-[100%] justify-between sm:w-[75%]'>
                        <img src={fb} alt="" /><img src={tw} alt="" /><img src={vm} alt="" /><img src={yt} alt="" />
                    </div>
                    <img src={donate} alt="" className="sm:w-[75%] text-center "/>
                </div>
            </div>
        </footer>
    )
}
