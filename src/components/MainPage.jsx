import React from 'react'
import Navbar from './Navbar'
import NavPage from './NavPage'

import { useState } from 'react'
import styled, { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html {
  height: 100%
}

body {
  font-family: Arial, Helvetica, sans-serif;
  background: linear-gradient(to bottom, #f05053, #e1eec3);
  height: 100%;
  margin: 0;
  color: #555;
}
`;

const sharedStyles = css`
background-color: #eee;
height: 40px;
border-radius: 5px;
border: 1px solid #ddd;
margin: 10px 0 20px 0;
padding: 20px;
box-sizing: border-box; 
`;

const StyledFormWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
padding: 0 20px;
`;

const StyledForm = styled.form`
width: 400px;
max-width: 700px;
padding-top-20px
height: 400px;
min-height-550px
background-color: #b1b1b1;
border-radius: 10px;
box-sizing: border-box;
box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2); 
`;

const StyledInput = styled.input`
display: block;
width: 100%;
${sharedStyles}
`;

const StyledButton = styled.button`
display: block;
background-color: #bbbbbb ;
color: #fff;
font-size: 0.9rem;
border: 2;
border-radius: 5px;
height: 40px;
padding: 0 20px;
cursor: pointer;
box-sizing: border-box;
`;

const StyledError = styled.div`
color: red;
font-weight: 800;
margin: 0 0 40px 0;
`;

const initialState = {
name: '',
email: '',
message: '',
gender: ''
};


const MainPage = () => {
    const [state, setState] = useState(initialState);
    const [error, setError] = useState('');
  
    const handleSubmit = e => {
      e.preventDefault();
      console.log('submitted!');
      console.log(state);
  
      for (let key in state) {
        if (state[key] === '') {
          setError(`You must provide the ${key}`)
          return
        }
      }
      setError('');
      // const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
      // const test = regex.test(state.email);
      // console.log(test);
  
      console.log("Succeeded!!!")
    };
  
    const handleInput = e => {
      const inputName = e.currentTarget.name;
      const value = e.currentTarget.value;
  
      setState(prev => ({ ...prev, [inputName]: value }));
    };

    return (
        <>
            <section>
            {/*navbar section*/}
            <div className="bg-blue-100 h-20 w-full">    
            <Navbar/>
            </div>
            {/*NavPage section*/}
            <div className="bg-blue-200 h-screen w-full">     
             <NavPage/>
             {/* Styling the formPage*/}
             <div className="pt-2 px-0.5 bg-slate-700">
             <GlobalStyle/>
             <StyledFormWrapper >
             {/*A login form*/}
             <StyledForm  onSubmit={handleSubmit} >
             <h2>Login</h2>
             <label htmlFor="email"></label>
             <StyledInput
               type="email"
               name="email"
               placeholder='Email*'
               value={state.email}
               onChange={handleInput}
             />
             <label htmlFor="name" ></label>
             <StyledInput
               type="text"
               name="name"
               placeholder='Password*'
               value={state.name}
               onChange={handleInput}
             />

            

             {error && (
               <StyledError>
                 <p>{error}</p>
               </StyledError>
             )}
             <div className="pl-40  py-20 w-400">
             <StyledButton type="login" >Login</StyledButton>
             </div>
             <div  className="pl-40 py-20 w-400 ">
             <StyledButton type="login">Log in with Google</StyledButton>
             </div>
            </StyledForm>
             </StyledFormWrapper>
            </div>
            </div>
            </section>



        </>
    )
}

export default MainPage
