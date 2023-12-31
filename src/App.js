
import './App.css';
import {Navbar}  from './components/Navbar';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';


function App() {
  return (
     <> 

   

      <BrowserRouter>

      

       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/my-job" element={<h1>Home</h1>} />
        <Route path="/salary" element={<h1>Home</h1>} /> 
        <Route path="/post-job" element={<Home/>} />
       </Routes>

       

      
     
      </BrowserRouter>
    

     </>

  );
}

export default App;
