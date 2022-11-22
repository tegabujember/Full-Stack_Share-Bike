import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer text-white ">
        <div className="container">
          <footer className="py-3">
            <div className="row">
              <div className="col-3">
                <h4> Share Bike</h4>
              </div>
              <div className="col-2">
                <h5>Section</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <Link to="#" className="nav-link p-0 text-white">
                      HOME
                    </Link>
                  </li>
                  {/* new li */}
                  <li className="nav-item mb-2">
                    <Link to="#" className="nav-link p-0 text-white">
                      Features
                    </Link>
                  </li>
                  {/* new li */}
                  <li className="nav-item mb-2">
                    <Link to="#" className="nav-link p-0 text-white">
                      Pricing
                    </Link>
                  </li>
                  {/* new li */}
                  <li className="nav-item mb-2">
                    <Link to="#" className="nav-link p-0 text-white">
                      FAQs
                    </Link>
                  </li>
                  {/* new li */}
                  <li className="nav-item mb-2">
                    <Link to="#" className="nav-link p-0 text-white">
                      About
                    </Link>
                  </li>
                </ul>
              </div>
              {/* new column */}
              <div className="col-4 offset-1">
                <form action="">
                  <h5>Subscribe to our newsletter</h5>
                  <p>Monthly</p>
                  <div className="d-flex w-100 gap-2">
                    <label htmlFor="newsletter1" className="visually-hidden">
                      Email Address
                    </label>
                    <input
                      type="text"
                      id="newsletter1"
                      className="form-control"
                      placeholder="Email Address"
                    />
                    <button
                      className="btn btn-primary rounded-pill px-4"
                      type="button"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="d-flex justify-content-between pt-4 mt-4 border-top">
              <p>@ 2022 Company , inc. All right reserved.</p>
              <ul className="list-unstyled d-flex">
                <li className="ms-3">
                  <Link to="#" className="link-light">
                    <i className="fa fa-facebook fa-2x"></i>
                  </Link>
                </li>
                <li className="ms-3">
                  <Link to="#" className="link-light">
                    <i className="fa fa-instagram fa-2x"></i>
                  </Link>
                </li>
                <li className="ms-3">
                  <Link to="#" className="link-light">
                    <i class="fa fa-envelope fa-2x "></i>
                  </Link>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
