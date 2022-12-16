import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../pages/Home';
import Francisco from '../pages/Francisco';
import Kondwani from '../pages/Kondwani';
import Driana from '../pages/Driana';
import Langwani from '../pages/Langwani';
  

const NavPage = () => {
    return (
        <React.Fragment>
        <section>
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route  path="/francisco" element={<Francisco/>}/>
        <Route  path="/kondwani" element={<Kondwani/>}/>
        <Route  path="/langwani" element={<Langwani/>}/>
        <Route  path="/driana" element={<Driana/>}/>
        </Routes>
        </section>
        </React.Fragment>
    )
}

export default NavPage
