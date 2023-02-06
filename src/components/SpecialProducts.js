import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { Link } from 'react-router-dom'

const SpecialProducts = () => {
  return (
    <div className="col-4">
      <div className="special-product-card">
        <div className="d-flex justify-content-between">
          <div className='special-product-image'>
            <img src="./images/iphone-14.png" alt="" />
          </div>
          <div className='special-product-content'>
            <h5 className='brand'>Havels</h5>
            <h6 className='title'>
              Iphone 14 Pro Max 6GB RAM/256GB
            </h6>
            <ReactStars 
              count={5} 
              size={24} 
              value={3}
              activeColor="#ffd700" 
            />
            <p className='price'>
              <span className='red-p me-2 text-danger'>
                $1400
              </span>
              <strike className="text-secondary">$1900</strike>
            </p>
            <div className="discount-till d-flex align-items-center">
              <p>
                <b>5</b> days
              </p>
              <div className="d-flex gap-10 align-items-center">
                <span className='badge rounded-circle p-2 bg-danger'>1</span>:
                <span className='badge rounded-circle p-2 bg-danger'>2</span>:
                <span className='badge rounded-circle p-2 bg-danger'>3</span>
              </div>
              
            </div>
            <div className="prod-count mt-3">
              <p>Products: 5</p>
              <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
<div className="progress-bar" style={{width: '25%'}}></div>
</div>
            </div>
            <Link className='button mt-3'>
              Add to Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpecialProducts