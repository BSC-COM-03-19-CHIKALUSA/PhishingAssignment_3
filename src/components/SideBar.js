import React,{useState} from 'react'

const SideBar = () => {
    const [isOpen,setIsOpen]=useState(false);
    return (
        <>   
        {!isOpen ?
       (<button className="fixed z-30 flex items-center bg-blue-700 cursor-pointer rounded-3xl left-10 top-6" onClick={() => setIsOpen(!isOpen)}>menu</button>) : (
             
         <div className="fixed h-full w-[22vw] top-0 left-0 bg-blue-400" >
         <button className="fixed w-6 text-xl text-white bg-red-800 top-4 left-60 rounded-2xl" onClick={() => setIsOpen(!isOpen)}> X </button> 
         <p className="pl-20 mt-7">OWASP Juice SHop</p> 
        </div>
             )
           }
        </>

    )
}

export default SideBar
