import './App.css'
import { Routes,Route } from "react-router-dom";
import Main  from './mainAssets/Main'
import Contact from './mainAssets/contact';

const  App=()=> {

  return (
    <>
    <Routes>
      <Route path='/' element={<Main/>} />
      <Route path="contact" element={<Contact/>} />
    </Routes>

         </>
  )
}

export default App
