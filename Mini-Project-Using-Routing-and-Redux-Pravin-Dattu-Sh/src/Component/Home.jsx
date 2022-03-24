import React, { useState } from 'react'
import './Style/Home.css';
import {Link} from "react-router-dom";
function Home() {
  const [display,setdisplay]=useState("none")
  function menubtn(){
    display==="none"? setdisplay("block"):setdisplay("none")
  }
  return (
    <div className='Home'>
    
      <div className='jumbo'>
      {/* menu */}
      <div onClick={menubtn} className='Menuitem '>
      <header>---Menu---</header>
      <div style={{display:display}}>
      <ul>
      <h4>* Thali</h4>
        <li>Paneer Dish  <span>110</span></li>
        <li>Daal <span>80</span></li>
        <li>Curd <span>60</span></li>
        <li>Sweet(gulab jamun) <span>30</span></li>
        <li>Chapati <span>10</span></li>
      </ul>
      </div>
      
      </div>
      {/* order */}
      <div className='Orderhome'>
        <h1>Order Now <span>
        <Link to="/cartlist"> <i class="fa fa-shopping-cart"></i></Link>
       </span>
        </h1> 
       <img src="https://cdn.pixabay.com/photo/2021/06/28/14/08/rice-6371751_960_720.jpg" alt="" />
     
      </div>
 
      </div>
      <h4 className='text1'>
"People who love to eat are always the best people." </h4> 
    </div>
  )
}

export default Home