import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'



function Cart() {
    return (
 <>
             <Header/>
            <div style={{height:"50vh"}} className='container my-5 align-items-center'>
                <h1 className='pt-5 text-primary fw-bold'>User's Cart</h1>
                <div className='row'>
                    <div className="col-lg-8 border shadow">
                        <table className='table'>
                          <thead>
        <tr>
            <th>#</th>
            <th>Product</th>
            <th>Image</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>...</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Eyeshadow Palette with Mirror</td>
            <td><img width={"50px"} src="https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp" alt="no image" /></td>
            <td>
                <div className='d-flex'>
                    <button className='btn fs-1'>-</button>
                    <input style={{width:"50px"}} value={10} type="text" className='form-control' readOnly/>
                    <button className='btn fs-1'>+</button>
                </div>
            </td>
            <td>$ 30</td>
            <td className='text-danger fs-1 fw-bold'>X</td>
        </tr>
    </tbody>
                        </table>
    <div className='float-end p-3'>
        <button className='btn btn-danger'>EMPTY CART</button>
        <Link to={"/"} className='btn btn-info ms-5'>SHOP MORE</Link>
    </div>                </div>
                   <div className="col-lg-4">
                        <div className='border shadow p-5 rounded text-center'>
                            <h3>Total Amount : <span className='text-danger'>$ 300</span></h3>
                            <hr />
                            <button className='btn btn-success w-75'>CHECKOUT</button>
                        </div>
                    </div>
                </div>
            </div>
 </>
    
    )
}

export default Cart