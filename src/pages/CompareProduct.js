import React from 'react'
import Breadcrumb from '../components/Breadcrumb';
import Meta from '../components/Meta';
import {
  BsSearch, 
  BsFillHeartFill, 
  BsArrowRepeat,
  BsFillPersonFill,
  BsCart4,
  BsXLg,
} from 'react-icons/bs';
import Color from '../components/Color';

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
                  <BsXLg className='position-absolute cross img-fluid'/>
                </div>
                <div className="product-card-image">
                  <img src="./images/smart-watch.png" alt="watch" width="60%" />
                </div>
                <div className="compare-product-details">
                  <h5 className="title">
                    Apple Smartwatch series 2
                  </h5>
                  <h6 className='price mt-3'>$400</h6>
                  <div>
                    <div className="product-details">
                      <h5>Brand:</h5>
                      <p>Apple</p>
                    </div>
                    <div className="product-details">
                      <h5>Type:</h5>
                      <p>Smartwatch</p>
                    </div>
                    <div className="product-details">
                      <h5>Availability:</h5>
                      <p>In Stock</p>
                    </div>
                    <div className="product-details">
                      <h5>Color:</h5>
                      <Color />
                    </div>
                    <div className="product-details">
                      <h5>Size:</h5>
                      <div className='d-flex gap-10'>
                        <p>S</p>
                        <p>M</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <div>
                  <BsXLg className='position-absolute cross img-fluid'/>
                </div>
                <div className="product-card-image">
                  <img src="./images/smart-watch.png" alt="watch" width="60%" />
                </div>
                <div className="compare-product-details">
                  <h5 className="title">
                    Apple Smartwatch series 2
                  </h5>
                  <h6 className='price mt-3'>$400</h6>
                  <div>
                    <div className="product-details">
                      <h5>Brand:</h5>
                      <p>Apple</p>
                    </div>
                    <div className="product-details">
                      <h5>Type:</h5>
                      <p>Smartwatch</p>
                    </div>
                    <div className="product-details">
                      <h5>Availability:</h5>
                      <p>In Stock</p>
                    </div>
                    <div className="product-details">
                      <h5>Color:</h5>
                      <Color />
                    </div>
                    <div className="product-details">
                      <h5>Size:</h5>
                      <div className='d-flex gap-10'>
                        <p>S</p>
                        <p>M</p>
                      </div>
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