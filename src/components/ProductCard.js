import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link, useLocation } from 'react-router-dom';
import { 
    BsArrowLeftRight, 
    BsBagFill, 
    BsEyeFill,
    BsHeart
 } from 'react-icons/bs'

const ProductCard = (props) => {
    const {grid} = props;
    let location = useLocation();
  return (
    <>
        <div className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}>
            <div className="product-card position-relative">
                <div className='wishlist-icon position-absolute'>
                    <Link>
                        <BsHeart />
                    </Link>
                </div>
                <div className="product-image d-flex justify-content-center">
                    <img 
                        className='img-fluid'
                        src="./images/smart-watch.png" 
                        alt="" 
                    />
                    <img 
                        className='img-fluid'
                        src="./images/smart-watch-2.png" 
                        alt="" 
                    />
                </div>
                <div className="product-details">
                    <h6>Havels</h6>
                    <h5 className='product-title'>
                        Smart Watch Apple Series
                    </h5>
                    <ReactStars 
                        count={5} 
                        size={24} 
                        activeColor="#ffd700" 
                    />
                    <p className='price'>$300.00</p>
                </div>
                <div className="action-bar position-absolute">
                    <div className="d-flex flex-column gap-15">
                        <Link>
                            <BsArrowLeftRight />
                        </Link>
                        <Link>
                            <BsEyeFill />
                        </Link>
                        <Link>
                            <BsBagFill />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}>
            <div className="product-card position-relative">
                <div className='wishlist-icon position-absolute'>
                    <Link>
                        <BsHeart />
                    </Link>
                </div>
                <div className="product-image d-flex justify-content-center">
                    <img 
                        className='img-fluid'
                        src="./images/smart-watch.png" 
                        alt="" 
                    />
                    <img 
                        className='img-fluid'
                        src="./images/smart-watch-2.png" 
                        alt="" 
                    />
                </div>
                <div className="product-details">
                    <h6>Havels</h6>
                    <h5 className='product-title'>
                        Smart Watch Apple Series
                    </h5>
                    <ReactStars 
                        count={5} 
                        size={24} 
                        activeColor="#ffd700" 
                    />
                    <p className='price'>$300.00</p>
                </div>
                <div className="action-bar position-absolute">
                    <div className="d-flex flex-column gap-15">
                        <Link>
                            <BsArrowLeftRight />
                        </Link>
                        <Link>
                            <BsEyeFill />
                        </Link>
                        <Link>
                            <BsBagFill />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductCard