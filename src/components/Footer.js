import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillEnvelopeFill, BsFillTelephoneFill, BsGithub, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs';

const Footer = () => {
  return (
    <>
      <footer className='py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-5'>
              <div className='footer-top-data d-flex gap-30 align-items-center'>
                <img className='iconNewsletter' src="./newsletter.svg" alt="" />
                <h4 className='mb-0 text-white'>Sign Up for NewsLetter</h4>
              </div>
            </div>
            <div className='col-7'>
            <div class="input-group mb-3">
              <input type="text" className="form-control " placeholder="Your Email Address" aria-label="Your Email Address" aria-describedby="basic-addon2" />
              <span class="input-group-text rounded-end" id="basic-addon2">Subscribe</span>
            </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-4'>
              <h4 className='text-white mb-4'>Contact Us</h4>
              <div>
                <address className='text-white fs-6'>
                  <h5>Lorem ipsum dolor sit.</h5>
                  <span>Lorem ipsum dolor, sit amet <br />consectetur adipisicing elit. 65489<br />
                  </span>
                </address>
                <a href="tel:+62 123 456254" className='mt-3 d-block mb-1 text-white align-items-center d-flex gap-10'>
                  <BsFillTelephoneFill />
                  +62 123 456254
                </a>
                <a href="mailto:test@mail.com" className='mt-4 d-block mb-0 text-white align-items-center d-flex gap-10'>
                  <BsFillEnvelopeFill />
                  test@mail.com
                </a>
                <div className='social-icons d-flex align-items-center gap-30 mt-4'>
                  <a href="/" className='text-white'><BsLinkedin className='fs-4'/></a>
                  <a href="/" className='text-white'><BsInstagram className='fs-4'/></a>
                  <a href="/" className='text-white'><BsGithub className='fs-4'/></a>
                  <a href="/" className='text-white'><BsYoutube className='fs-4'/></a>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Information</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className="text-white py-2 mb-1">Privacy Policy</Link>
                <Link className="text-white py-2 mb-1">Refund Policy</Link>
                <Link className="text-white py-2 mb-1">Shipping Policy</Link>
                <Link className="text-white py-2 mb-1">Terms & Co</Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Account</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1">Contact us</Link>
              </div>
            </div>
            <div className='col-2'>
              <h4 className='text-white mb-4'>Quick Links</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center mb-0 text-white'>
                @ {new Date().getFullYear()}. Powered by ReactJS
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer