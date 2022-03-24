import React from 'react'
import {Link} from "react-router-dom";
import './Style/Navbar.css'
  
const Navbar = () => {
  return (
  <>

  

   

<nav class="NAVBAR navbar navbar-dark bg-primary color">
  <Link class="navbar-brand text-white" to="/">
    <img  src="https://mdbootstrap.com/img/logo/mdb-transparent.webp" height="30" class="d-inline-block align-top"
      alt="mdb logo"/>
      <Link className="text-white mx-3" to="/">Home</Link>
         
          <Link className="text-white mx-3" to="/cartlist">Cart </Link>
          <Link className="text-white mx-3" to="/thanks">thanks</Link>
  </Link>
   <Link  className="position-absolute top-5 end-0 cart  text-white"   to="/summary"><i class="fa fa-shopping-cart"> </i></Link>
</nav>

    </>
  )
}

export default Navbar