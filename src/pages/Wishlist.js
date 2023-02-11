import React from 'react'
import { BsXLg } from 'react-icons/bs';
import Breadcrumb from '../components/Breadcrumb';
import Meta from '../components/Meta';

const Wishlist = () => {
  return (
    <>
      <Meta title={"Favorite Wishlist"} />
      <Breadcrumb title={"Favorite Wishlist"}/>
      <div className="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <BsXLg className='position-absolute cross img-fluid'/>
                <div className="wishlist-card-image">
                  <img src="./images/smart-watch.png" alt="watch" width={"60%"} />
                </div>
                <div className="py-3">
                  <h5 className="title">
                    Apple Smartwatch Series 2
                  </h5>
                  <h6 className="price">$400</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <BsXLg className='position-absolute cross img-fluid'/>
                <div className="wishlist-card-image">
                  <img src="./images/smart-watch.png" alt="watch" width={"60%"} />
                </div>
                <div className="py-3">
                  <h5 className="title">
                    Apple Smartwatch Series 2
                  </h5>
                  <h6 className="price">$400</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Wishlist