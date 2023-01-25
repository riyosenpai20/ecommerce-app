import React from 'react';
import { NavLink, Link } from 'react-router-dom';

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
              <h1>
                <Link>
                  Dig 
                </Link>
              </h1>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header