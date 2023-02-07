import React, {useState} from 'react';
import ReactStars from 'react-rating-stars-component';
import Breadcrumb from '../components/Breadcrumb';
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';

const OurStore = () => {
  const [grid, setGrid] = useState(4);
  // alert(grid);
  return (
    <>
      <Meta title={"Our Store"} />
      <Breadcrumb title="Our Store" />
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className='filter-card mb-3'>
                <h3 className="filter-title">Shop By Categories</h3>
                <div>
                  <ul className="ps-0">
                    <li>Watch</li>
                    <li>TV</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className="filter-title">Filter By</h3>
                <div>
                  <h5 className="sub-title">Availability</h5>
                  <div>
                    <div className="form-check">
                      <input type="checkbox" className='form-check-input' id="inStock" />
                      <label className='form-check-label' htmlFor='inStock' >
                        In Stock (1)
                      </label>
                    </div>
                    <div className="form-check">
                      <input type="checkbox" className='form-check-input' id="OFS" />
                      <label className='form-check-label' htmlFor='OFS' >
                        Out of Stock
                      </label>
                    </div>
                  </div>
                  <h5 className="sub-title">Price</h5>
                  <div className="d-flex align-items-center gap-10">
                    <div className="form-floating mb-3">
                      <input 
                        type="text" 
                        name="" 
                        id="floatingInput" 
                        className="form-control form-control-sm"
                        placeholder='From' />
                        <label htmlFor="floatingInput">From</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input 
                        type="text" 
                        name="" 
                        id="floatingInput" 
                        className="form-control form-control-sm"
                        placeholder='To' />
                        <label htmlFor="floatingInput">To</label>
                    </div>
                  </div>
                  <h5 className="sub-title">Colors</h5>
                  <div>
                    <div className='d-flex flex-wrap'>
                      <ul className="colors ps-0">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                    </div>
                  </div>
                  <h5 className="sub-title">Size</h5>
                  <div>
                    <div className="form-check">
                      <input 
                        type="checkbox" 
                        className='form-check-input'
                        name="" 
                        id="size-1" 
                      />
                      <label className='form-check-label' htmlFor="size-1">
                        S(2)
                      </label>
                    </div>
                    <div className="form-check">
                      <input 
                        type="checkbox" 
                        className='form-check-input'
                        name="" 
                        id="size-2" 
                      />
                      <label className='form-check-label' htmlFor="size-2">
                        M(2)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className="filter-title">Product tags</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Headphone</span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Laptop</span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Camera</span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Smartphone</span>
                  </div>
                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className="filter-title">Random Product</h3>
                <div>
                  <div className="random-products d-flex mb-3">
                    <div className="w-50">
                      <img 
                        src="./images/smart-watch.png" 
                        alt="smartwatch" 
                        width={"80%"} 
                        className="img-fluid" 
                      />
                    </div>
                    <div className="w-50">
                      <h5>
                        Smartwatch Apple Series 2
                      </h5>
                      <ReactStars 
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <b>$1500.00</b>
                    </div>
                  </div>
                  <div className="random-products d-flex mb-3">
                    <div className="w-50">
                      <img 
                        src="./images/smart-watch.png" 
                        alt="smartwatch" 
                        width={"80%"} 
                        className="img-fluid" 
                      />
                    </div>
                    <div className="w-50">
                      <h5>
                        Smartwatch Apple Series 2
                      </h5>
                      <ReactStars 
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <b>$1500.00</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0 d-block" style={{width: "100px"}}>Sort By :</p>
                    <select name="" id="" className="form-control form-select">
                      <option value="manual">Featured</option>
                      <option value="best-selling" selected="selected">Best Selling</option>
                      <option value="title-ascending">A-Z</option>
                      <option value="title-descending">Z-A</option>
                      <option value="price-ascending">low to high</option>
                      <option value="price-descending">high to low</option>
                      <option value="created-ascending">old to new</option>
                      <option value="created-descending">new to old</option>
                    </select>
                  </div>
                  <div className='d-flex align-items-center gap-10'>
                    <p className="totalProducts mb-0">
                      21 Products
                    </p>
                    <div className="d-flex gap-10 align-items-center grid">
                      <img onClick={()=>{
                        setGrid(3);
                      }} src="./icons/grid-column-4.svg" className='d-block img-fluid' alt="grid" />
                      <img onClick={()=>{
                        setGrid(4);
                      }} src="./icons/grid-column-3.svg" className='d-block img-fluid' alt="grid" />
                      <img onClick={()=>{
                        setGrid(6);
                      }} src="./icons/grid-column-2.svg" className='d-block img-fluid' alt="grid" />
                      <img onClick={()=>{
                        setGrid(12);
                      }} src="./icons/grid-row.svg" className='d-block img-fluid' alt="grid" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="products-list pb-5">
                <div className="d-flex gap-10 flex-wrap">
                  <ProductCard grid={grid}/>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </>
  )
}

export default OurStore