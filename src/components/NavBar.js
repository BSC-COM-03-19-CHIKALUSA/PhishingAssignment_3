import React from 'react'

const NavBar = () => {
    return (
        <>
        
        <section className="fixed grid w-full grid-cols-2 pt-0 bg-slate-400">
        <div className="grid items-center grid-cols-3 pl-0 pr-96">
            <div> <p className="">Menu_icon</p></div>
            <div className="w-20 pt-0 h-30 center"> <img src="/pictures/JuiceShop_Logo.png" alt="upload your face" /> </div >
            <div> <p className="">OWASP Juice Shop</p></div>
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
