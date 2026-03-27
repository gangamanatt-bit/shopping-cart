import React from 'react'
import Header from '../components/Header'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'



function Products() {
  return (
    <>
      <Header />
      <div className='m-5'>
        <div className='row pt-5'>
          {/* duplicate column according to products*/}
          <div className='col-md-3 mb-2'>
            {/* card */}
            <Card>
              <Card.Img style={{ height: '250px' }} variant="top" src="https://tse3.mm.bing.net/th/id/OIP.ZHIPM-cqX1-Z5VUsuH4f3QHaFF?rs=1&pid=ImgDetMain&o=7&rm=3" />
              <Card.Body className='text-center'>
                <Card.Title>Card Title</Card.Title>
                <Link to={'/products/id'} className='btn btn-primary'>View More...</Link>
              </Card.Body>
            </Card>
          </div>

        </div>
      </div>
      
    </>
  )
}

export default Products