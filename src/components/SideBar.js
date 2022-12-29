import React,{useState} from 'react'
import About from '../pages/About';
import Company from '../pages/Company';
import Contact from '../pages/Contact';
import Feedback from '../pages/Feedback';
import Github from '../pages/Github';
import PhotoWall from '../pages/PhotoWall';
import ScoreBoard from '../pages/ScoreBoard';
import Version from '../pages/Version';
import {AiOutlineMenu} from 'react-icons/ai'




const SideBar = () => {
    const [isOpen,setIsOpen]=useState(false);
    return (
        <>   
        <div className="sideBar">
        {!isOpen ?
       (<button className="fixed sm:left-0  z-40 lg:left-20 flex items-center w-8 h-8 pl-1.5 cursor-pointer bg-gray-200  top-10 border-none"
        onClick={() => setIsOpen(!isOpen)}> <AiOutlineMenu/>
        
        </button>) : (
             
         <div className="fixed h-full w-[18vw] pt-21  top-0 left-0 bg-neutral-800 " >
         <button className="fixed text-xl text-white lg:w-6 hover:bg-red-800 top-4 left-60 " onClick={() => setIsOpen(!isOpen)}> X </button> 
         <p className="pt-20 text-left text-white sm:left-0 lg:pl-20 bg-slate-500 top-8">OWASP Juice SHop</p> 
         <section>
        
         <Contact/>
         <Feedback/>
         <Company/>
         <About/>
         <PhotoWall/>
         <ScoreBoard/>
         <Github/>
         <Version/>
            
         </section>
         </div>
        
             )
           }
           </div>
        </>

    )
}

export default SideBar
