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
        
        {!isOpen ?
       (<button className="fixed z-30 flex items-center w-8 h-8 pl-2 cursor-pointer bg-slate-200 left-10 top-6"
        onClick={() => setIsOpen(!isOpen)}> <AiOutlineMenu/>
        
        </button>) : (
             
         <div className="fixed h-full w-[18vw] pt-21  top-0 left-0 bg-slate-800" >
         <button className="fixed w-6 text-xl text-white bg-red-800 top-4 left-60 rounded-xl" onClick={() => setIsOpen(!isOpen)}> X </button> 
         <p className="pt-20 pl-20 text-left text-white bg-slate-500">OWASP Juice SHop</p> 
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
        </>

    )
}

export default SideBar
