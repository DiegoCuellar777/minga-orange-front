import Carousel from "../components/Carousel"
import lupa from "/images/Search.png"

export default function Index() {
    return (
    <main className='bg-black h-full w-full'>

        <div className='sm:bg-[url("/images/Group-3599.png")] sm:h-[80vh] w-screen sm:bg-cover my-12 bg-black md:bg-[url("/images/blur.png")] md:bg-cover md:bg-center backdrop-blur-3xl '>
            <h1 className='sm:hidden md:text-white md:text-7xl md:font-extrabold my-16'>Best manga reader</h1>
            <div className='sm:h-screen w-screen sm:bg-cover flex'>
                <Carousel />
                <div className='sm:bg-[#000000b1] sm:h-[80vh]  md:w-[40%] flex flex-col sm:justify-center sm:gap-9 md:gap-12'>
                    <div>
                        <h2 className=' text-white sm:text-4xl md:text-5xl font-medium sm:tracking-wider sm:mx-3 sm:text-center md:text-left md:w-[75%]'>Your favourite manga reader <span className='md:text-5xl md:font-medium sm:hidden'>😏</span></h2>
                        <h2 className=' text-white sm:text-4xl sm:font-medium sm:mx-2 sm:my-2 sm:text-center md:hidden'>😏</h2>
                    </div>
                    <p className='text-white sm:mx-8 sm:text-center md:text-justify md:w-[50%]'>is an exceptional app for all manga lovers. With a wide range of titles available, from classics to the latest releases, this app is perfect for those who want to read manga anytime, anywhere.</p>
                    <div className='flex items-center justify-between bg-[#dfd3d332] backdrop-blur-md px-4 py-2 sm:mx-4 rounded-md md:w-[75%] border-solid border-2 border-white'>
                        <img src={lupa} alt="" />
                        <span className='text-white tracking-wider text-lg w-[100%]'>Search mangas</span>
                    </div>
                </div>
            </div>
        </div>
        </main>
    )
}
