import React from 'react'
import {useState} from 'react'
import {FiSearch} from 'react-icons/fi'
import {BsPersonCircle} from 'react-icons/bs'
import {BsGlobe2} from 'react-icons/bs'

const NavBar = () => {
    const [isClicked,setIsClicked]=useState(true);
    return (
        <>
        <section className="fixed grid w-full h-[6.5vw] grid-cols-2 bg-slate-400">
        <div className="grid items-center grid-cols-2 pl-10 pr-96">
            <div className="w-10 pt-0 h-30 centered1"> <img src="/pictures/JuiceShop_Logo.png" alt="upload your face" /> </div >
            <div> <p className=" pl-30 text-white w-80">OWASP Juice Shop</p></div>
        </div>
    
        <div  className="grid grid-cols-3 pt-10 pr-0 pl-96">
          <div className="hover:underline"><button>
          {!isClicked ?
            (<button className=" cursor-pointer hover:text-white text-white"
             onClick={() => setIsClicked(!isClicked)}> __________________ X
             </button>) : (<button className="text-white w-6 h-9" onClick={() => setIsClicked(!isClicked)}>  <FiSearch/></button> )}
          </button></div>
          <div className='flex pl-3 text-white'><BsPersonCircle/> <p className="">Account</p></div>
          <div className='flex pl-3 text-white'><BsGlobe2/> <p className="">EN</p></div>
        </div>
    
        </section>
        </>
    )
}

export default NavBar
