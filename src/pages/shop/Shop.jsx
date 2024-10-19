import React, { useState } from 'react'
import PageHeader from '../../components/PageHeader'
import Data from "../../products.json"
import ProductCards from './ProductCards'

const showResults = "Showing 01 - 12 of 139 Results"

const Shop = () => {
  const [gridList, setGridList] = useState(true);
  const [products, setProducts] = useState(Data);
  console.log(products);
  return (
    <div>
      <PageHeader title={"Our Shop Page"} currentPage={"Shop"} />
      {/* Shop page */}
      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                {/* layout and title here */}
                <div className="shop-title d-flex flex-wrap justify-content-between">
                  <p>{showResults}</p>
                  <div className={`product-view-mode ${gridList ? "gridActive" : "listActive"}`}>
                    <a className="grid" onClick={()=> setGridList(!gridList)}>
                      <i className="icofont-ghost"></i>
                    </a>
                    <a className="list" onClick={()=> setGridList(!gridList)}>
                      <i className="icofont-listine-dots"></i>
                    </a> 
                  </div>
                </div>

                {/* product cards */}
                <div>
                  <ProductCards gridList={gridList} products={products}/>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-12">
              right side
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop