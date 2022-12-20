import React from 'react'
import "./App.css"
import NavBar from './components/NavBar'
import NavPage from './components/NavPage';



function App() {
  return (
   <>
       <div>
   <NavBar/>
       </div>
   <div className="h-screen bg-slate-700 ">
         <NavPage/>
   </div>

   </>
 )
}

export default App;
