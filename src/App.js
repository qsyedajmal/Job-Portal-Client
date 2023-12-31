
import './App.css';
<<<<<<< HEAD
import {Navbar}  from './components/Navbar';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
=======
import { Navbar } from './components/Navbar';

>>>>>>> e3a7761652c5689c52592022607a9cd09bad20a8


function App() {
  return (
<<<<<<< HEAD
     <> 

   

      <BrowserRouter>

      

       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/my-job" element={<h1>Home</h1>} />
        <Route path="/salary" element={<h1>Home</h1>} /> 
        <Route path="/post-job" element={<Home/>} />
       </Routes>

       

      
     
      </BrowserRouter>
    
=======
     <>

       <Navbar/>
>>>>>>> e3a7761652c5689c52592022607a9cd09bad20a8

     </>

  );
}

export default App;
