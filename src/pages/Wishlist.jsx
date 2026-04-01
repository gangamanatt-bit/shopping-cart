import React from 'react'
import Header from '../components/Header'
import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeWishlistItem } from './redux/Slices/wishlistSlice'
import Swal from 'sweetalert2';
import { addToCart } from './redux/Slices/cartSlice';





function Wishlist() {


const userWishlist=useSelector(state=>state.wishlistReducer)
const dispatch=useDispatch()
 const userCart=useSelector(state=>state.cartReducer)


const handleCart=(product)=>{

  const existingProduct = userCart?.find(item=>item.id==product?.id)
  dispatch(addToCart(product))
  dispatch(removeWishlistItem(product.id))
    Swal.fire({
      title:"Success!!",
      text:existingProduct?`product ${existingProduct.title} quantity incremented`:'product added to cart',
      icon:"success",
      confirmButtonText:'ok'

    })
}

  return (
    <>
    <Header/>
    <div className="container my-5">
     {
      userWishlist?.length>0?
       <>
      <h1 className="pt-5 text-primary">User Wishlist</h1>
        <div className='row pt-5'>
          {/* duplicate column according to products*/}
        {
          userWishlist?.map(item =>(
              <div className='col-md-3 mb-2'>
            {/* card */}
            <Card>
              <Card.Img style={{ height: '250px' }} variant="top" src={item?.thumbnail} />
              <Card.Body className='text-center'>
                <Card.Title>{item?.title}</Card.Title>
                <div className="d-flex justify-content-center">
                  <button onClick={()=>dispatch(removeWishlistItem(item?.id))} className="btn text-danger fs-5"><FontAwesomeIcon icon={faHeartCircleXmark}/></button>
                   <button onClick={()=>dispatch(handleCart(item?.id))} className="btn text-success fs-5"><FontAwesomeIcon icon={faCartPlus}/></button>

                </div>
              </Card.Body>
            </Card>
          </div>
          ))
        }

        </div>
      </>
      :
      <div className="d-flex flex-column justify-content-center align-items-center">
        <img src="https://cdn-icons-png.flaticon.com/512/16961/16961608.png" alt="list" />
        <h1>Your wishlist is empty</h1>
        <Link to={'/'} className='btn btn-primary'>Add more</Link>
      </div>
     }
    </div>
      

    </>
  )
}

export default Wishlist
