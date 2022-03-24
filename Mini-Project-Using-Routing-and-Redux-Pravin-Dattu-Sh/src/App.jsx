import React from 'react';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Summery from './Component/Summery';
import Thankyou from './Component/Thankyou';
import Error from './Component/Error';
import CartList from './Component/CartList';
import Footer from './Component/Footer';
function App() {
  return (
    <>
    
       <BrowserRouter style={{maxWidth:"100%"}} >
<Navbar/>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/summary" element={<Summery/>} />
    <Route path="/thanks" element={<Thankyou/>} />
    
    <Route path="/cartlist" element={<CartList/>} />
    <Route path="*" element={<Error/>} />
      
 </Routes>

 <Footer/>

 
  </BrowserRouter>
    </>
  );
}

export default App;