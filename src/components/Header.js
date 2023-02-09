import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
  BsSearch, 
  BsFillHeartFill, 
  BsArrowRepeat,
  BsFillPersonFill,
  BsCart4,
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
          <div className="row align-items-center d-flex">
            <div className="col-2">
              <h2>
                <Link className='text-white'>
                  Store Name 
                </Link>
              </h2>
            </div>
            <div className='col-5'>
              <div className='input-group align-self-center'>
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
                  <Link className='text-white d-flex flex-row column-gap-2 align-items-center'>
                    <div>
                      <BsArrowRepeat className='fs-1'/>
                    </div>
                    <p className='mb-0'>Compare <br/> Products</p>
                  </Link>
                </div>
                <div>
                  <Link className='text-white d-flex flex-row column-gap-2 align-items-center'>
                  <div>
                      <BsFillHeartFill className='fs-1'/>
                    </div>
                    <p className='mb-0'>Favorite <br/> Wishlist</p>
                  </Link>
                </div>
                <div>
                  <Link className='text-white d-flex flex-row column-gap-2 align-items-center'>
                    <div>
                      <BsFillPersonFill className='fs-1'/>
                    </div>
                    <p className='mb-0'>Log In <br /> My Account</p>
                  </Link>
                </div>
                <div>
                  <Link className='text-white d-flex flex-row column-gap-2 align-items-center'>
                    <div className=''>
                      <BsCart4 className='fs-1'/>
                    </div>
                    <div className='d-flex flex-column gap-1'>
                      <span className='badge bg-white text-dark'>0</span>
                      <p className='mb-0'>$ 500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className='header-bottom py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='menu-bottom d-flex align-items-center gap-30'>
                <div>
                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 align-items-center d-flex gap-15" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="./menu.svg" className='iconMenu' alt="" />
                    <span className='me-5 d-inline-block'>
                      Shop Categories
                    </span>
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item text-white" to="/">Action</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-white" to="/">Another action</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-white" to="/">Something else here</Link>
                    </li>
                  </ul>
                </div>
                </div>
                <div className='menu-links'>
                  <div className='d-flex align-items-center gap-15'>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/store">Our Store</NavLink>
                    <NavLink to="/blog">Blogs</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
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