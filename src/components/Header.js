import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
  BsSearch, 
  BsFillHeartFill, 
  BsArrowRepeat,
  BsFillPersonFill,
  BsFillBasketFill,
} from 'react-icons/bs';

const Header = () => {
  return (
    <>
      <header className='header-top-strip py-3'>
        <div className='container-xxl' >
          <div className='row'>
            <div className='col-6'>
              <p className='text-white'>Free shipping over $100 & Free Returns</p>
            </div>
            <div className='col-6'>
              <p className='text-end text-white'>
                Hotline : <a className='text-white' href='tel:+888 8080 1234'>+888 8080 1234</a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className='text-white'>
                  Store Name 
                </Link>
              </h2>
            </div>
            <div className='col-5'>
              <div className='input-group mb-3'>
                <input 
                  type="text" 
                  className='form-control' 
                  placeholder="Search Product Here ..." 
                  arial-label="Serach Product Here ..." 
                  aria-describedby="basic-addon2"
                />
                <span className='input-group-text px-3' id='basic-addon2'> 
                  <BsSearch />
                </span>
              </div>
            </div>
            <div className='col-5'>
              <div className='header-upper-links d-flex align-items-center justify-content-between'>
                <div>
                  <Link className='text-white'>
                    <div>
                      <BsArrowRepeat className='fs-1'/>
                    </div>
                    <p>Compare <br/> Products</p>
                  </Link>
                </div>
                <div>
                  <Link className='text-white'>
                  <div>
                      <BsFillHeartFill className='fs-1'/>
                    </div>
                    <p>Favorite <br/> Wishlist</p>
                  </Link>
                </div>
                <div>
                  <Link className='text-white'>
                    <div>
                      <BsFillPersonFill className='fs-1'/>
                    </div>
                    <p>Log In <br /> My Account</p>
                  </Link>
                </div>
                <div>
                  <Link className='text-white d-flex align-items-center gap-20'>
                    <div className=''>
                      <BsFillBasketFill className='fs-1'/>
                    </div>
                    <div className='d-flex flex-column gap-10'>
                      <span className='badge bg-white text-dark'>0</span>
                      <p>$ 500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header