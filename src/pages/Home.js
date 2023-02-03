import React from 'react';
import { Link } from 'react-router-dom';
import {BsCreditCard, BsFillGiftFill, BsHeadset, BsPercent, BsTruck} from 'react-icons/bs';
import Marquee from 'react-fast-marquee';
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProducts from '../components/SpecialProducts';

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
                <div className='d-flex align-items-center gap-15'>
                  <BsTruck className='fs-2'/>
                  <div className='d-flex flex-column justify-content-center'>
                    <h6 className=''>Free Shipping</h6>
                    <p className='mb-0'>From all orders over $5</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <BsFillGiftFill className='fs-2'/>
                  <div>
                    <h6>Daily Suprise Offers</h6>
                    <p className='mb-0'>Save up to  25%</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <BsHeadset className='fs-2'/>
                  <div>
                    <h6>Support 24/7</h6>
                    <p className='mb-0'>Shop with an expert</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <BsPercent className='fs-2'/>
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className='mb-0'>Get Factory Default Price</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <BsCreditCard className='fs-2'/>
                  <div>
                    <h6>Secure Payments</h6>
                    <p className='mb-0'>100% Protected Payment</p>
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
              <div className='categories d-flex justify-content-between flex-wrap align-items-center'>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Item</p>
                  </div>
                  <img className='w-25' src="./category/camera.png" alt="camera" />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Item</p>
                  </div>
                  <img className='w-25' src="./category/smart-tv.png" alt="camera" />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Item</p>
                  </div>
                  <img className='w-25' src="./category/smart-watch.png" alt="camera" />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Computer</h6>
                    <p>10 Item</p>
                  </div>
                  <img className='w-25' src="./category/macbook.png" alt="camera" />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Item</p>
                  </div>
                  <img className='w-25' src="./category/camera.png" alt="camera" />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Item</p>
                  </div>
                  <img className='w-25' src="./category/smart-tv.png" alt="camera" />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Item</p>
                  </div>
                  <img className='w-25' src="./category/smart-watch.png" alt="camera" />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Computer</h6>
                    <p>10 Item</p>
                  </div>
                  <img className='w-25' src="./category/macbook.png" alt="camera" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='featured-wrapper py-5 home-wrapper-2'>
        <div className="container-xxl">
          <div className="row">
            <div className='col-12'>
              <h3 className='section-heading'>Featured Collection</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className='special-wrapper home-wrapper-2 py-5'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">
                Special Products
              </h3>
            </div>
            <div className="row gap-5">
              <SpecialProducts />
              <SpecialProducts />
              <SpecialProducts />
            </div>
          </div>
        </div>
      </section>
      <section className='popular-wrapper py-5 home-wrapper-2'>
        <div className="container-xxl">
          <div className="row">
            <div className='col-12'>
              <h3 className='section-heading'>Our Popular Products</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className='marque-wrapper py-5 home-wrapper-2'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className='d-flex brands'>
                  <div className='mx-4 w-25'>
                    <img src="./category/brand-01.png" alt="" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="./category/brand-02.png" alt="" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="./category/brand-03.png" alt="" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="./category/brand-04.png" alt="" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="./category/brand-05.png" alt="" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="./category/brand-06.png" alt="" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="./category/brand-07.png" alt="" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='blog-wrapper py-5 home-wrapper-2'>
        <div className="container-xxl">
          <div className="row">
            <div className='col-12'>
              <h3 className='section-heading'>Our Latest Blogs</h3>
            </div>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home