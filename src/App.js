
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { Navbar } from './components/Navbar';



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
