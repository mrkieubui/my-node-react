import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light bg-light mb-5">
          <a className="navbar-brand" href="#">Node React</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">Disabled</a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>

        <div className="row">
          <div className="col-3">
            <form className="mr-3 ml-3">
              <li className="list-group-item list-group-item-secondary mb-3">Thêm sản phẩm mới</li>
              <div className="form-group">
                <label htmlFor="inputName">Tên sản phẩm</label>
                <input type="text" className="form-control" id="inputName" aria-describedby="nameHelp" placeholder="Điền tên sản phẩm" />
              </div>
              <div className="form-group">
                <label htmlFor="inputLink">Hình ảnh minh họa</label>
                <input type="text" className="form-control" id="inputLink" placeholder="Nhập đường dẫn" />
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="statusCheck" />
                <label className="form-check-label" htmlFor="statusCheck">Còn hàng</label>
              </div>
              <button type="button" className="btn btn-primary mt-3">Thêm mới</button>
            </form>

          </div>
          <div className="col-9">
            <div className="row">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item"><a href="#">Library</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Data</li>
                </ol>
              </nav>
            </div>
            <div className="row">
              <div className="col-3">
                <div className="card mb-4" style={{ width: '18rem' }}>
                  <img className="card-img-top" src="https://salt.tikicdn.com/cache/w584/ts/banner/a3/7b/c1/24309508846dd90cd4cc0e34d727b2fa.jpg" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">See more...</a>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card mb-4" style={{ width: '18rem' }}>
                  <img className="card-img-top" src="https://salt.tikicdn.com/cache/w206/ts/banner/d3/ca/3c/56e3948434d63d3923e5b9dcbbd10d4e.png" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">See more...</a>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card mb-4" style={{ width: '18rem' }}>
                  <img className="card-img-top" src="https://salt.tikicdn.com/cache/w206/ts/banner/8e/86/af/87108488a61fa28a9297b67e2afd8895.png" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">See more...</a>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card mb-4" style={{ width: '18rem' }}>
                  <img className="card-img-top" src="https://salt.tikicdn.com/cache/w584/ts/banner/a3/7b/c1/24309508846dd90cd4cc0e34d727b2fa.jpg" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">See more...</a>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card mb-4" style={{ width: '18rem' }}>
                  <img className="card-img-top" src="https://salt.tikicdn.com/cache/w206/ts/banner/8e/86/af/87108488a61fa28a9297b67e2afd8895.png" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">See more...</a>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card mb-4" style={{ width: '18rem' }}>
                  <img className="card-img-top" src="https://salt.tikicdn.com/cache/w206/ts/banner/d3/ca/3c/56e3948434d63d3923e5b9dcbbd10d4e.png" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">See more...</a>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card mb-4" style={{ width: '18rem' }}>
                  <img className="card-img-top" src="https://salt.tikicdn.com/cache/w584/ts/banner/a3/7b/c1/24309508846dd90cd4cc0e34d727b2fa.jpg" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">See more...</a>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card mb-4" style={{ width: '18rem' }}>
                  <img className="card-img-top" src="https://salt.tikicdn.com/cache/w206/ts/banner/8e/86/af/87108488a61fa28a9297b67e2afd8895.png" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">See more...</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
