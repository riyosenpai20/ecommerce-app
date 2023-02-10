import React from 'react'
import Breadcrumb from '../components/Breadcrumb';
import Meta from '../components/Meta';
import {
  BsSearch, 
  BsFillHeartFill, 
  BsArrowRepeat,
  BsFillPersonFill,
  BsCart4,
} from 'react-icons/bs';

const CompareProduct = () => {
  return (
    <>
      <Meta title={"Compare Products"} />
      <Breadcrumb title={"Compare Products"}/>
      <div className="compare-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <div>
                  <BsArrowRepeat />
                </div>
                <div className="product-card-image">
                  <img src="./images/smart-watch.png" alt="watch" width="60%" />
                </div>
                <div className="compare-product-details">
                  <h5 className="title">
                    Apple Smartwatch series 2
                  </h5>
                  <h6 className='price'>$400</h6>
                  <div>
                    <div className="product-details">
                      <h5>Brand:</h5>
                      <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CompareProduct