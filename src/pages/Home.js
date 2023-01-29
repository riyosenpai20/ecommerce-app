import React from 'react'
import { Link } from 'react-router-dom'
import {BsCreditCard, BsFillAlarmFill, BsFillGiftFill, BsHeadset, BsPercent, BsTruck} from 'react-icons/bs'

const Home = () => {
  return (
    <>
      <section className='home-wrapper-1 py-5'>
        <div className='container-xxl'>
          <div className=' row'>
            <div className='col-6'>
              <div className='main-banner position-relative'>
                 <img src="https://images.unsplash.com/photo-1596207498818-edb80522f50b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"  className='img-fluid rounded-3' alt="" />
                 <div className='main-banner-content position-absolute'>
                  <h4 className='text-uppercase banner-desc'>Supercharged For Pros</h4>
                  <h5 className='banner-desc'>iPad S13+ Pro.</h5>
                  <p>From $999.00 or $41.62/mo.</p>
                  <Link className='text-uppercase button-banner'>Buy Now</Link>
                 </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
                <div className='small-banner position-relative '>
                  <img src="https://images.unsplash.com/photo-1596207498818-edb80522f50b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" className='img-fluid rounded-3' alt="" />
                  <div className='small-banner-content position-absolute'>
                    <h4>BEST SALE</h4>
                    <h5>iPad S13+ Pros.</h5>
                    <p>From $999.00 or $41.62/mo.</p>
                  </div>
                </div>
                <div className='small-banner position-relative '>
                  <img src="https://images.unsplash.com/photo-1596207498818-edb80522f50b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" className='img-fluid rounded-3' alt="" />
                  <div className='small-banner-content position-absolute'>
                    <h4>NEW ARRIVAL</h4>
                    <h5>iPad S13+ Pros.</h5>
                    <p>From $999.00 or $41.62/mo.</p>
                  </div>
                </div>
                <div className='small-banner position-relative '>
                  <img src="https://images.unsplash.com/photo-1596207498818-edb80522f50b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" className='img-fluid rounded-3' alt="" />
                  <div className='small-banner-content position-absolute'>
                    <h4>NEW ARRIVAL</h4>
                    <h5>iPad S13+ Pros.</h5>
                    <p>From $999.00 or $41.62/mo.</p>
                  </div>
                </div>
                <div className='small-banner position-relative '>
                  <img src="https://images.unsplash.com/photo-1596207498818-edb80522f50b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" className='img-fluid rounded-3' alt="" />
                  <div className='small-banner-content position-absolute'>
                    <h4>NEW ARRIVAL</h4>
                    <h5>iPad S13+ Pros.</h5>
                    <p>From $999.00 or $41.62/mo.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='services d-flex align-items-center justify-content-between'>
                <div>
                  <BsTruck className='fs-2'/>
                  <div>
                    <h6>Free Shipping</h6>
                    <p>From all orders over $5</p>
                  </div>
                </div>
                <div>
                  <BsFillGiftFill className='fs-2'/>
                </div>
                <div>
                  <BsHeadset className='fs-2'/>
                </div>
                <div>
                  <BsPercent className='fs-2'/>
                </div>
                <div>
                  <BsCreditCard className='fs-2'/>
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