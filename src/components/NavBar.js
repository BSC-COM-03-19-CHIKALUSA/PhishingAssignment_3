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
        <div className="items-center  pl-10 pr-96">
            <div className="flex pl-40 pt-6 "> <img className=" h-20 w-30  " src="/pictures/JuiceShop_Logo.png" alt="upload your face" />
            <p className=" flex w-80 items-center text-white">OWASP Juice Shop</p></div>
        </div>
    
        <div  className="grid grid-cols-3 pt-10 pr-0 pl-96">
          <div className="hover:underline"><button>
          {!isClicked ?
            (<button className=" cursor-pointer text-lg text-white"
             onClick={() => setIsClicked(!isClicked)}> _________________X
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
