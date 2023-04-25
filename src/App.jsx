import apiUrl from '../api'

import { useState } from 'react'
import './App.css'
import logo from "./images/Logo 2 1.png"
import menu from "./images/Vector 9.png"
import mobile from "./images/Group-3599.png"
import lupa from "./images/Search.png"
import footer from "./images/footer.png"

import fb from "./images/Facebook.png"
import vm from "./images/Vimeo.png"
import tw from "./images/Twitter.png"
import yt from "./images/Youtube.png"

import donate from "./images/donate.png"

import mob1 from "./images/mob1.png"
import mob2 from "./images/mob2.png"
import mob3 from "./images/mob3.png"
import mob4 from "./images/mob4.png"

function App() {
  const [count, setCount] = useState(0)
  let titulo = "welcolme to mindhub!"
  console.log(apiUrl)
  console.log(process.env.NODE_ENV);

  return (
    <>
      <main className='bg-black h-full w-full'>
          <nav className='h-[13.33%] w-screen flex justify-between items-center px-5 py-2 md:border-b border-slate-600'>
              <div className='h-8 w-12 px-2 flex flex-col justify-around  items-center '>
                <img src={menu} alt="logo" />
                <img src={menu} alt="logo" />
                <img src={menu} alt="logo" />
              </div>
              <img src={logo} alt="logo" className='h-[60%]'/>
          </nav>
          <div className='sm:bg-[url("./images/Group-3599.png")] sm:h-full w-screen sm:bg-cover my-12 bg-black '>
            <h1 className='sm:hidden md:text-white md:text-7xl md:font-extrabold my-16'>Best manga reader</h1>
            <div className='sm:h-screen w-screen sm:bg-cover md:bg-black flex'>
              <img src={mobile} alt="" className='sm:hidden md:w-[60%] md:h-[110vh] md:px-[10%] md:object-cover'/>
              <div className='sm:bg-[#000000b1] sm:h-[100%] md:w-[40%] flex flex-col sm:justify-center sm:gap-9 md:gap-12 md:bg-gradient-to-r from-[#0a0b2861] to-[#0c08508d] md:backdrop-blur-xl'>
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

        <footer className='w-[100%] bg-black sm:flex sm:flex-col sm:justify-center '>
          <img src={footer} alt="" className='w-[100%] rounded-b-full'/>
          <div className='flex md:justify-around md:p-24 md:items-center sm:flex-col sm:items-center sm:gap-12 sm:w-[100%] sm:p-6'>
            <div className='md:w-[15%] flex justify-between sm:w-[80%]'>
              <a href="" className='text-white'>Home</a>
              <a href="" className='text-white'>Mangas</a>
            </div>
            <img src={logo} alt="logo" className='md:h-[30%] sd:w-[80%]'/>
            <div className='md:w-[15%] flex flex-col gap-5'>
              <div className='flex md:w-[100%] justify-between'>
                <img src={fb} alt="" /><img src={tw} alt="" /><img src={vm} alt="" /><img src={yt} alt="" />
              </div>
              <img src={donate} alt="" />
            </div>
          </div>
        </footer>
      

            {/* <div className='flex justify-evenly  h-[85vh] items-center' >
              <div className='blur-[200px] h-[50%] w-2/5 bg-gradient-to-r from-black to-[#34D399] '></div>
              <div className="blur-[200px] h-80 w-2/5 bg-gradient-to-r from-[#4338CA] to-[#5E52F3] " ></div>
              <div className='h-[100vh] w-[100vh] absolute flex justify-center items-center'>
      <img src={manga1} alt="logo" className='h-1/3 absolute top-0 left-0'/>
      <img src={manga2} alt="logo" className='h-1/3 absolute top-4 left-0'/>
      <img src={manga3} alt="logo" className='h-1/3 absolute top-8 left-0'/>
      <img src={manga4} alt="logo" className='h-1/3 absolute top-12 left-0'/>
      <img src={manga5} alt="logo" className='h-1/3 absolute top-16 left-0'/>
    </div>
              
        </div> */}

  {/* <div className='h-[120vh] w-[44vw] flex gap-7 bg-gradient-to-b from-transparent to-["rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8519), rgba(0, 0, 0, 1)"]'>
    <div className='h-[100%] w-[50%] flex flex-col gap-7'>
      <img src={mob1} alt=""  className='h-[45%]'/>
      <img src={mob2} alt="" className='h-[45%]' />
    </div>
    <div className='h-[100%] w-[50%] flex flex-col justify-end gap-7 '>
      <img src={mob3} alt="" className='h-[45%]'/>
      <img src={mob4} alt="" className='h-[45%]'/>
    </div>
  </div> */}

  
    </>
  )
}

export default App
