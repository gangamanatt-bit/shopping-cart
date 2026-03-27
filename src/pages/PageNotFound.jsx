import React from 'react'
import { Link } from 'react-router-dom'
Link
function PageNotFound() {
  return (
    <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center flex-column' >
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC7CHTujHl-3yhmgZ9AlwzFq-m1wR7bXppmg&s" alt="" className="w-25" />
      <h1 className="mt-5">We are sorry page not found</h1>
      <Link to={'/'} className='btn btn-dark'>Back to home</Link>
      
    </div>
  )
}

export default PageNotFound