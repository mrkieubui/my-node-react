import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, useLocation, withRouter } from 'react-router-dom';
import './App.css';
import Home from './components/HomePage/Home';
import ProductPage from './components/OtherPage/ProductPage';
import RequestPage from './components/OtherPage/RequestPage';
import SupportPage from './components/OtherPage/SupportPage';
import CategoryPage from './components/OtherPage/CategoryPage';
import PromoPage from './components/OtherPage/PromoPage';
import ShopPage from './components/OtherPage/ShopPage';
import Header from './components/Common/Header';
import BreadCrumb from './components/Common/BreadCrumb';
import Footer from './components/Common/Footer';
import Login from './components/Login/Login';
import Logout from './components/Login/Logout';

class App extends React.Component {
  render() {
    function _ScrollToTop(props) {
      const { pathname } = useLocation();
      useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);
      return props.children
    }
    const ScrollToTop = withRouter(_ScrollToTop);
    return (
      <Router >
        {/* <ScrollToTop> */}
          {/* Section MavMenu */}
          <Header />

          {/* BreadCrumb */}
          <BreadCrumb />

          {/* Main Page */}
          <Route path="/" exact component={Home} />
          <Route path="/productPage/:id" component={ProductPage} />
          <Route path="/requestPage" component={RequestPage} />
          <Route path="/supportPage" component={SupportPage} />
          <Route path="/categoryPage" component={CategoryPage} />
          <Route path="/promoPage" component={PromoPage} />
          <Route path="/shopPage" component={ShopPage} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />

          {/* Footer */}
          <Footer />
        {/* </ScrollToTop> */}
      </Router>
    );
  }
}

export default App;
