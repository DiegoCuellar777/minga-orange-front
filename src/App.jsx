import apiUrl from '../api.js'

import { useState } from 'react'
import './App.css'

import Main from './layouts/Main.jsx'
import Index from './pages/Index.jsx'


function App() {

  return (
    <>
      <Main>
        <Index />
      </Main>
      

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
