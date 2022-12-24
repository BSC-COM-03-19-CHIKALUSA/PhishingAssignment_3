import React from 'react'
import {FiSearch} from 'react-icons/fi'
import {BsPersonCircle} from 'react-icons/bs'
import {BsGlobe2} from 'react-icons/bs'

const NavBar = () => {
    return (
        <>
        
        <section className="fixed grid w-full h-[6.5vw] grid-cols-2 bg-slate-400">
        <div className="grid items-center grid-cols-2 pl-0 pr-96">
            <div className="w-20 pt-0 h-30 centered1"> <img src="/pictures/JuiceShop_Logo.png" alt="upload your face" /> </div >
            <div> <p className=" pl-50 w-80">OWASP Juice Shop</p></div>
        </div>
    
        <div  className="grid grid-cols-3 pt-10 pr-0 pl-96">
          <div> <p className="w-8 h-8 p-0"><FiSearch/></p></div>
          <div className='flex'><BsPersonCircle/> <p className="">Account</p></div>
          <div className='flex'><BsGlobe2/> <p className="">EN</p></div>
        </div>
    
        </section>
        </>
    )
}

export default NavBar
