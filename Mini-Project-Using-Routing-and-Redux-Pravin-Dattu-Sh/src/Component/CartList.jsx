import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import './Style/CartList.css';

import {addtothali} from "../reducers";
function CartList() {
  const [thali,setThali]=useState([{"totalp":"","id":1,"dish":"paneer dish","price":110,"Quntity":1,"image":"https://www.vegrecipesofindia.com/wp-content/uploads/2020/01/paneer-butter-masala-5-500x500.jpg"},
  {"totalp":"","id":2,"dish":"Dal","price":80,"Quntity":1,"image":"https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/moong-dal-recipe.jpg"},
  {"totalp":"","id":3,"dish":"Curd","price":60,"Quntity":1,"image":"https://cdn2.foodviva.com/static-content/food-images/fruit-recipes/fruit-raita-recipe/fruit-raita-recipe1.jpg"},
   {"totalp":"","id":4,"dish":"sweet","price":30,"Quntity":1,"image":"https://www.sharmispassions.com/wp-content/uploads/2017/04/Sweetpotatojamun2-475x500.jpg"},
   {"totalp":"","id":5,"dish":"chapati","price":10,"Quntity":1,"image":"https://www.thecuriouschickpea.com/wp-content/uploads/2020/11/homemade-roti-8-720x720.jpg"}       ])

//add customer selected ordder
   const[tquntity,setTquntity]=useState(1)
  
const dispatch = useDispatch()        
     const addtotable=(ele)=>{
       ele.Quntity=tquntity;
       ele.totalp=Number(ele.Quntity)*Number(ele.price)
          dispatch(addtothali(ele))
         }
//function decrement
         function decrement(){
           if(tquntity>1){
     setTquntity(tquntity-1)
           }   
         }
  //function increment
         function increment(){
           
     setTquntity(tquntity+1)
             
         }
  //chwck oute function
         function clickchekoute(){
           alert("your order pass sucssesfully")
         }
  
 
  return (
    <div className='CARTLIST'>
<div className='d-flex m-5 '>
  {
    thali.map((data)=>{
      return(
       <div class=" m-5 cardSHOW float-sm-start"  key={data.id}>

 
         
            <div>
              <img class="card-img-top" src={data.image} alt="" />
            </div>
            <h3 class="card-title">{data.dish}</h3>
            <h5 class="card-text">Price: <span className='green'>{data.price}</span> </h5>
         <div className='quntity'><button onClick={decrement}>-</button> <input   type="text" value={tquntity}/><button onClick={increment}>+</button></div> 
      
         <button onClick={()=>addtotable(data)}>Add to cart</button>
       </div>
      )
    })
  }
  
</div>
      
<div className='text-center m-5'>
     <Link to="/summary" onClick={clickchekoute} > <button className='btn btn-primary' >checkoute</button></Link>
     </div>
    </div>
  )
}

export default CartList;