import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import Meta from '../components/Meta';
import {AiOutlineHome, AiOutlineMail} from 'react-icons/ai';
import {BiPhoneCall, BiInfoCircle} from 'react-icons/bi';

const Contact = () => {
  return (
    <>
      <Meta title={"Blogs"} />
      <Breadcrumb title={"Blogs"}/>
      <div className="contact-inner-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
            <iframe 
              src={"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15807.928532406371!2d112.66612976188965!3d-7.896934927506517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1675849595307!5m2!1sen!2sid"}
              width={"600"} 
              title={"maps"}
              height={"450"} 
              style={{border:"0"}}
              allowFullScreen={""} 
              loading={"lazy"} referrerPolicy={"no-referrer-when-downgrade"}></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title">
                    Contact
                  </h3>
                  <form action="" className='d-flex flex-column gap-15'>
                    <div>
                      <input type="text" className="form-control" placeholder='Name' />
                    </div>
                    <div>
                      <input type="email" className="form-control" placeholder='Email' />
                    </div>
                    <div>
                      <input type="tel" className="form-control" placeholder='Mobile Number' />
                    </div>
                    <div>
                      <textarea className="w-100 form-control" placeholder='Comments'></textarea>
                    </div>
                    <div>
                      <button className='button border-0'>Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title">Get in touch with us</h3>
                  <div>
                    <ul className="ps-0">
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <AiOutlineHome className='fs-5'/>
                        <address className='mb-0'>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora!
                        </address>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <BiPhoneCall className="fs-5"/>
                        <a href="tel:+62 811234545" className="href">+62 811234545</a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <AiOutlineMail className="fs-5"/>
                        <a href="mailto:test@mail.com">test@mail.com</a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <BiInfoCircle className="fs-5"/>
                        <p className='mb-0'>Monday - Friday 10AM - 8PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact