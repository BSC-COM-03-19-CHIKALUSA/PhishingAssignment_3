import React from 'react'
import {NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <React.Fragment>
        <section>
         <div className="grid grid-cols-4 pt-5 pl-40 overflow-hidden text-xl font-bold text-white w-50 h-50 pr-80 bg-gray">
         <NavLink to="/"><p className="w-20 h-10 px-4 border centered">
         <div px-10 py-10><img src="/pictures/JuiceShop_Logo.png" alt="upload your face" />
         </div></p>
         </NavLink>
         <NavLink to="/francisco"> <p className="px-4 border w-50 h-50 centered">OWASP Juice Shop</p></NavLink>
        </div>

        </section>
        </React.Fragment>
    )
}

export default Navbar
