import React from 'react'
import "./App.css"
import NavBar from './components/NavBar'
import NavPage from './components/NavPage';
import SideBar from './components/SideBar';



function App() {
  return (
     < >      
     <div className="">
      <div className="pt-18">
   <NavBar/>
   <SideBar/>
       </div>
   <div className="lg:h-screen bg-neutral-900 sm:w-screen">
         <NavPage/>
   </div>
   </div>
   </>

 )
}

export default App;
