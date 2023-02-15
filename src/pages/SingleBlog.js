import React from 'react'
import { HiOutlineArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import Meta from '../components/Meta';
const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <Breadcrumb title={"Dynamic Blog Name"}/>
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to={"/blog"}>
                  <HiOutlineArrowLeft className='fs-4' /> Go back to Blogs
                </Link>
                <h3 className="title">
                  A Beautiful Sunday Morning
                </h3>
                <img src="https://images.pexels.com/photos/2299028/pexels-photo-2299028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="img-fluid w-50 my-4" />
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi natus fuga quis error quae corrupti optio vitae consequatur voluptates culpa repellat possimus magnam, ipsum cum dolorum enim veritatis aperiam molestiae perferendis sit! Sequi nesciunt magni qui beatae optio sapiente accusantium dolor obcaecati natus nemo! Hic recusandae dignissimos dolore placeat accusamus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleBlog