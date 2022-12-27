import React from 'react'
import {useState} from 'react'
import {FiSearch} from 'react-icons/fi'
import {BsPersonCircle} from 'react-icons/bs'
import {BsGlobe2} from 'react-icons/bs'

const NavBar = () => {
    const [isClicked,setIsClicked]=useState(true);
    return (
        <>
        <section className="fixed sm:grid sm:grid-cols-2 w-full lg:h-[6.5vw] lg:grid-cols-2 lg:flex sm:pt-1 sm:h-[8vw] bg-slate-400">
        <div className="items-center  pl-10 pr-96">
            <div className="flex pl-40 pt-6 "> <img className=" lg:h-20 lg:w-30 sm:w-15 sm:h-10 " src="/pictures/JuiceShop_Logo.png" alt="upload your face" />
            <p className=" lg:flex lg:w-80 lg:items-center sm:pl-14 text-white">OWASP Juice Shop</p></div>
        </div>
    
        <div  className="lg:grid lg:grid-cols-3 lg:pt-10 lg:pr-0 lg:pl-96 sm:pt-1 sm:grid sm:grid-cols-1 sm:left-40">
          <div className="hover:underline"><button>
          {!isClicked ?
            (<button className=" cursor-pointer text-lg text-white"
             onClick={() => setIsClicked(!isClicked)}> ___________X
             </button>) : (<button className="text-white w-6 text-2xl  h-9" onClick={() => setIsClicked(!isClicked)}>  <FiSearch/></button> )}
          </button></div>
          <div className='flex pl-3 text-white'><BsPersonCircle/> <p className="">Account</p></div>
          <div className='flex pl-3 text-white'><BsGlobe2/> <p className="">EN</p></div>
        </div>
    
        </section>
        </>
    )
}

export default NavBar
