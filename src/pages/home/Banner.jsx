import React, { useState } from 'react'
import ProductData from "../../products.json"
import { Link } from 'react-router-dom';
import SelectCategory from '../../components/SelectCategory';

const title = (
  <h2>
    Search Your One From <span>Thousand</span> Of Products
  </h2>
);
const desc = "We Have The Largest Collection of products";

const bannerList = [
  {
    iconName: "icofont-users-alt-4",
    text: "1.5 Million Customers",
  },
  {
    iconName: "icofont-notification",
    text: "More then 2000 Marchent",
  },
  {
    iconName: "icofont-globe",
    text: "Buy Anything Online",
  },
];

const Banner = () => {

  const [serachInput, setSearchInput] = useState("");
  const [filterProducts, setFilterProducts] = useState(ProductData);

  //search functionality
  const handleSearch = (e) => {
    const searchValue = e.target.value;
    //console.log(searchValue)
    setSearchInput(searchValue)

    //filter function
    const filter = ProductData.filter((product) => product.name.toLowerCase().includes(searchValue.toLowerCase()));
    setFilterProducts(filter);
  };

  
  return (
    <div className='banner-section style-4'>
      <div className="container">
        <div className="banner-content">
          {title}
          <form>
            <SelectCategory select={"all"}/>
            <input 
            type="text"
            placeholder="Serach your products" 
            name="search"
            value={serachInput}
            onChange={handleSearch}
            />
            <button type="submit">
              <i className="icofont-search"></i>
            </button>
          </form>
          <p>{desc}</p>
          <ul className='lab-ul'>
            {serachInput && filterProducts.map((product, i) => (
              <li key={i}>
                <Link to={`/shop/${product.id}`}>{product.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Banner