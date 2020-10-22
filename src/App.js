import React from 'react';
import './App.css';
import FormAddProduct from './components/FormAddProduct';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        {/* Navbar  */}
        <Navbar />

        <div className="row">
          {/* Left Form add product */}
          <div className="col-3">
            <FormAddProduct />
          </div>
          {/* Right Content  */}
          <div className="col-9">
            {/* Breadscrumb */}
            <div className="row">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="#">Danh sách sản phẩm</a></li>
                  {/* <li className="breadcrumb-item active" aria-current="page">Chi tiết</li> */}
                </ol>
              </nav>
            </div>
            {/* Product List */}
            <div className="row">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
