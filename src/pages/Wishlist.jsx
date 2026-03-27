import React from 'react'
import Header from '../components/Header'
import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons'



function Wishlist() {
  return (
    <>
    <Header/>
    <div className="container my-5">
      <>
      <h1 className="pt-5 text-primary">User Wishlist</h1>
        <div className='row pt-5'>
          {/* duplicate column according to products*/}
          <div className='col-md-3 mb-2'>
            {/* card */}
            <Card>
              <Card.Img style={{ height: '250px' }} variant="top" src="https://tse3.mm.bing.net/th/id/OIP.ZHIPM-cqX1-Z5VUsuH4f3QHaFF?rs=1&pid=ImgDetMain&o=7&rm=3" />
              <Card.Body className='text-center'>
                <Card.Title>Card Title</Card.Title>
                <div className="d-flex justify-content-center">
                  <button className="btn text-danger fs-5"><FontAwesomeIcon icon={faHeartCircleXmark}/></button>
                                    <button className="btn text-danger fs-5"><FontAwesomeIcon icon={faCartPlus}/></button>

                </div>
              </Card.Body>
            </Card>
          </div>

        </div>
      </>
    </div>
      

    </>
  )
}

export default Wishlist
