import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function View() {
  return (
    <div className='container my-5 pt-5'>
      <div className='row align-items-center' style={{height:"80vh"}}>
       <div className='col-lg-6 text-center'>
         <img style={{height:"200px"}} className='img-fluid' src="https://image-optimizer-reg.production.sephora-asia.net/eyJlZGl0cyI6eyJyZXNpemUiOnt9fX0=/images/product_images/zoom_1_Product_689304214223-Anastasia-Beverly-Hills-Liquid-Eyeliner-True-Black-Matte-Updated_13bee9e55c56423223c80b731646416decea8a8d_1683040323.png" alt="product" />
         <div className='d-flex justify-content-evenly mt-5'>
           <button className='btn btn-info'>ADD TO WISHLIST</button>
                      <button className='btn btn-success'>ADD TO CART</button>

         </div>
       </div>
       <div className='col-lg-6'>
        <h3 className='fw-bold'>Title</h3>
<h2 className='fw-bold'>$ 30</h2>
<h4 className='fw-bold'>Brand : </h4>
<h4 className='fw-bold'>Category : </h4>
<h4 className='fw-bold'>Description : </h4>
<h5 className='fw-bold'>Client Reviews</h5>
<div className='border rounded shadow my-5'>
  <p><span className='fw-bolder'>Name:</span>Message</p>
  <p>Rating:5<FontAwesomeIcon icon={faStar} className='text-warning' />

</p>

</div>
       </div>
      </div>
      
    </div>
  )
}

export default View
