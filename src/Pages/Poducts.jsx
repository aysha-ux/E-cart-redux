import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Products() {
    return (
        <>
            <div className='m-5'>
                <div className="row pt-5">
                    {/* Duplicate column according to products */}
                    <div className="col-3">
                        {/* Cards */}
                        <Card className='shadow p-2'>
                            <Card.Img style={{height:"250px"}} variant="top" src="https://www.chanel.com/images/t_one/w_0.51,h_0.51,c_crop/q_auto:good,f_auto,fl_lossy,dpr_1.1/w_1920/chance-eau-tendre-eau-de-parfum-spray-3-4fl-oz--packshot-default-126260-9564866838558.jpg" />
                            <Card.Body className="text-center">
                                <Card.Title>Card Title</Card.Title>
                                <Link to={'/products/:id'} className='btn btn-primary'>View More</Link>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products