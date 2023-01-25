import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {BsSearch} from 'react-icons/bs';

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
          <div className="row">
            <div className="col-2">
              <h2>
                <Link>
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
                <span className='input-group-text' id='basic-addon2'>
                  <BsSearch />
                </span>
              </div>
            </div>
            <div className='col-5'></div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header