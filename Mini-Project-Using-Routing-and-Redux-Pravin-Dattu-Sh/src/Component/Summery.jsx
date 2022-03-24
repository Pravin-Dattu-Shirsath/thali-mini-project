import React, { useState ,useEffect} from 'react'
import './Style/Summary.css';
import { useSelector} from "react-redux";

function Summery() {

//use selector
  const selectedThali =useSelector((state)  => state.counter.thali)

//thali filter id
  const order = selectedThali.filter((v, i, a) => a.findIndex(t => (t.id === v.id)) === i);
  
  const[state,setState]=useState(order)
  
//delet function
  
    function deletitem(id){
   
    var newstate=state.filter((item)=>{
      console.log(item)
     return item.id!==id;
 })
   setState(newstate)
}
  //
 const [total,setTotal]=useState()
 const newarrayt=state.map((data)=>{
        return data.totalp
  })
     const totalprice=newarrayt.reduce((p,c)=>c+p)
    
 //calling use effect totao bill
  useEffect(()=>{
     setTotal(totalprice)
  })
   
 

  
  return (
    <div className='Summary'>
    <div className='container-fluid '>  
     <table className=" table">
            <tr>
              <th>image</th>
              <th> Dish</th>
              <th>dish price</th>
              <th>Quntity </th>
              <th>price</th>
              <th>Delet</th>
           

            </tr>
            {
              state.map((data,i)=>{
                return(<tr  key={data.id}>
               <td><img src={data.image} alt="" width='80px' className=" img" /></td>
               <td>{data.dish}</td>
              <td>{data.price}₹</td>
               <td>{data.Quntity}</td>
               <td>{data.totalp}₹</td>
               <td className="" onClick={()=>{deletitem(data.id)}}>delet</td>
                </tr>
                )
              })
            }
            <tr className='total'>
      <th scope="row"></th>
      <td colSpan="2" ></td>
    
      <td >total</td>
      <td>{total}₹</td>
    </tr>
            
            </table>
          </div></div>
  )
}

export default Summery;