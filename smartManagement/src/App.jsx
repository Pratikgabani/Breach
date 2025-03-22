import React from 'react'
import Landing from './Components/Landing'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./Components/Login";
import SignUp from './Components/SignUp';

function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Landing />}></Route>
      <Route path="/SignUp" element={<SignUp />}></Route>
      <Route path="/Login" element={<Login />}></Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
