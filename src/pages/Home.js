import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <section className='home-wrapper-1 py-5'>
        <div className='container-xxl'>
          <div className=' row'>
            <div className='col-6'>
              <div className='main-banner position-relative p-3'>
                 <img src="https://images.unsplash.com/photo-1596207498818-edb80522f50b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" width="700px" className='img-fluid rounded-3' alt="" />
                 <div className='main-banner-content position-absolute'>
                  <h4 className='text-uppercase banner-desc'>Supercharged For Pros</h4>
                  <h5 className='banner-desc'>iPad S13+ Pro.</h5>
                  <p>From $999.00 or $41.62/mo.</p>
                  <Link className='text-uppercase button-banner'>Buy Now</Link>
                 </div>
              </div>
            </div>
            <div className='col-6'>
            <div className='d-flex flex-warp justify-content-between align-items-center gap-15'>
              <div className='small-banner position-relative p-3'>
                <img src="https://images.unsplash.com/photo-1596207498818-edb80522f50b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" className='img-fluid rounded-3 small-banner-img' alt="" />
                <div className='small-banner-content position-absolute'>
                  <h4>Supercharged For Pros.</h4>
                  <h5>Ipad S13+ Pro.</h5>
                  <p>From $999.00 or $50.00/month</p>
                </div>
              </div>
              <div className='small-banner position-relative p-3'>
                <img src="https://images.unsplash.com/photo-1596207498818-edb80522f50b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" className='img-fluid rounded-3 small-banner-img' alt="" />
                <div className='small-banner-content position-absolute'>
                  <h4>Supercharged For Pros.</h4>
                  <h5>Ipad S13+ Pro.</h5>
                  <p>From $999.00 or $50.00/month</p>
                </div>
              </div>
              <div className='small-banner position-relative p-3'>
                <img src="https://images.unsplash.com/photo-1596207498818-edb80522f50b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" className='img-fluid rounded-3 small-banner-img' alt="" />
                <div className='small-banner-content position-absolute'>
                  <h4>Supercharged For Pros.</h4>
                  <h5>Ipad S13+ Pro.</h5>
                  <p>From $999.00 or $50.00/month</p>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home