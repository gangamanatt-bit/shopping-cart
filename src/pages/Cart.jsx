import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { decrementItem, emptyCart, incrementItem, removeCartItem } from './redux/Slices/cartSlice'




function Cart() {
  const userCart=useSelector(state=>state.cartReducer)
  const [cartTotal,setCartTotal]=useState(0)
  const dispatch=useDispatch()
  useEffect(()=>{
    setCartTotal(userCart?.reduce((acc,curr)=>acc+curr.totalPrice,0))
  },[userCart])
  const handleDecrementCart=(product)=>{
    if(product.quantity>1){
      dispatch(decrementItem(product.id))
    }else{
      dispatch(removeCartItem(product.id))
    }
  }
  const handleCheckOut=()=>{
    dispatch(emptyCart())
    Swal.fire({
      title:"order placed successfully",
      text:"Thank u",
      icon:"Success"
    })
  }
  return (
    <>
    <Header/>
     {userCart?.length>0 ?
     <div className="container pt-5">
        <h1 className="text-danger my-5">User Cart Summary </h1>
        <div className="row mb-5">
          <div className="col-md-8 border rounded p-5">
            <table className="table">
               <thead>
                <tr>
                  <th># </th>
                  <th>Name </th>
                  <th>Image </th>
                  <th> Quantity</th>
                  <th>price </th>
                  <th>... </th>
                </tr>
               </thead>
               <tbody>
                {userCart?.map((item,index)=>(
                  <tr key={item.id}>
                  <td>{index+1}</td>
                  <td>{item?.title}</td>
                  <td><img width={'50px'} height={'50px'} src={item?.thumbnail} alt="" /></td>
                 <td>
                    <div className="d-flex">
                      <button onClick={()=>handleDecrementCart(item)} className="btn fs-1">-</button>
                      <input style={{width:'50px'}} type="text" value={item?.quantity} className="formcontrol" readOnly/>
                      <button onClick={()=>dispatch(incrementItem(item?.id))} className="btn fs-1">+</button>
                    </div>
                 </td>
                 <td>$ 30</td>
                 <td><button onClick={()=>dispatch(removeCartItem(item?.id))} className='btn text-danger fs-4'>x</button></td>
                </tr>
                ))}
               </tbody>
            </table>
            <div className="float-end mt-3">
              <button onClick={()=>dispatch(emptyCart())} className="btn btn-danger">Empty Cart</button>
              <Link to={'/'} className='btn btn-info ms-5'>Shop More</Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="border rounded p-5 shadow">
               <h3>Total: <span>{userCart?.length}</span>Items</h3>
               <h3> <span className='text-danger'>{cartTotal}</span>Items</h3>
                <hr/>
             <div className="d-grid">
               <button onClick={handleCheckOut} className="btn btn-success">CHECKOUT</button>
             </div>
               
            </div>
          </div>
        </div>
      </div>
      :
        <div className="d-flex flex-column justify-content-center align-items-center">
              <img src="https://cdn-icons-png.flaticon.com/512/16961/16961608.png" alt="list" />
              <h1>Your wishlist is empty</h1>
              <Link to={'/'} className='btn btn-primary'>Add more</Link>
            </div>}
    </>
  )
}

export default Cart
