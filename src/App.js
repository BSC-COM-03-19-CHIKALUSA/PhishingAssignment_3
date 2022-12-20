import React from 'react'
import "./App.css"
import NavBar from './components/NavBar'
import NavPage from './components/NavPage';
import SideBar from './components/SideBar';


function App() {
  return (
   <>
       <div className="pt-18">
   <NavBar/>
   <SideBar/>
       </div>
   <div className="h-screen bg-slate-700">
         <NavPage/>
   </div>
   

   </>
 )
}

export default App;
