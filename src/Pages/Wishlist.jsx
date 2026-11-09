import { faCartPlus, faHeartCircleXmark  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Header from '../Components/Header'
import Card from 'react-bootstrap/Card';



function Wishlist() {
  return (
<>
        <Header/>
      <div className='container my-5 '>
        <h1>User's Wishlist</h1>
         <div className="row pt-5">
                      {/* Duplicate column according to products */}
                      <div className="col-3">
                          {/* Cards */}
                          <Card className='shadow p-2'>
                              <Card.Img style={{height:"250px"}} variant="top" src="https://www.chanel.com/images/t_one/w_0.51,h_0.51,c_crop/q_auto:good,f_auto,fl_lossy,dpr_1.1/w_1920/chance-eau-tendre-eau-de-parfum-spray-3-4fl-oz--packshot-default-126260-9564866838558.jpg" />
                              <Card.Body className="text-center">
                                  <Card.Title>Perfume</Card.Title>
                                 <div className='d-flex justify-content-evenly'>
      <button className='btn text-danger fs-4'><FontAwesomeIcon icon={faHeartCircleXmark} /></button>
      <button className='btn text-success fs-4'><FontAwesomeIcon icon={faCartPlus} /></button>
  </div>
                              </Card.Body>
                          </Card>
                      </div>
                  </div>
      </div>
</>
  )
}

export default Wishlist
