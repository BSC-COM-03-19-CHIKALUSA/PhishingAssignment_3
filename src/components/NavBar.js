import React from 'react'

const NavBar = () => {
    return (
        <>
        
        <section className="fixed grid w-full h-[6.5vw] grid-cols-2 bg-slate-400">
        <div className="grid items-center grid-cols-2 pl-0 pr-96">
            <div className="w-20 pt-0 h-30 centered1"> <img src="/pictures/JuiceShop_Logo.png" alt="upload your face" /> </div >
            <div> <p className=" pl-50 w-80">OWASP Juice Shop</p></div>
        </div>
    
        <div  className="grid grid-cols-3 pt-10 pr-0 pl-96">
          <div> <p className="">Search_icon</p></div>
          <div> <p className="">Account</p></div>
          <div> <p className="">EN</p></div>
        </div>
    
        </section>
        </>
    )
}

export default NavBar
