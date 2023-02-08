import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
    <div className=''>
        <div className="blog-card">
            <div className="card-image">
                <img src="https://images.unsplash.com/photo-1542751110-97427bbecf20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1984&q=80" className='img-fluid w-100' alt="" />
            </div>
            <div className="blog-content">
                <p className="date">30 Jan, 2023</p>
                <h5 className="title">
                    So Apple HAS Thought About Making Even Larger iPad Pros
                </h5>
                <p className='desc'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolorum aliquam ducimus ea obcaecati
                </p>
                <Link to={'/'} className="button">
                    Read more
                </Link>
            </div>
        </div>
    </div>
  )
}

export default BlogCard