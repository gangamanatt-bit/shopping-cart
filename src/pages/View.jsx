import React from 'react'
import Header from '../components/Header'


function View() {
  return (
    <>
      <Header/>
      <div className="container my-5">
        <div style={{height:'80vh'}} className="row pt-5 align-items-center">
            <div className="col-lg-6 text-center">
                <img className='img-fluid' src="https://tse3.mm.bing.net/th/id/OIP.ZHIPM-cqX1-Z5VUsuH4f3QHaFF?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
                <div className="d-flex justify-content-evenly mt-5">
                    <button className="btn btn-info">ADD TO WISHLIST</button>
                    <button className="btn btn-success">ADD TO CART</button>
                </div>
            </div>
            <div className="col-lg-6">
                <h3>title</h3>
                <h2 className="text-danger">$ 30</h2>
                <h4>Brand:</h4>
                <h4>Category:</h4>
                <h4>Description:</h4>
                <h3>Client Reviews:</h3>
                <div className="border rounded p-2 shadow my-1">
                    <p><span>name:</span> message</p>
                    <p className="text-warning"></p>
                </div>

            </div>
        </div>
      </div>
      
    </>
  )
}

export default View
