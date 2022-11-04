import React from "react";

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
                    <a to="#" className="nav-link p-0 text-white">
                      HOME
                    </a>
                  </li>
                  {/* new li */}
                  <li className="nav-item mb-2">
                    <a to="#" className="nav-link p-0 text-white">
                      Features
                    </a>
                  </li>
                  {/* new li */}
                  <li className="nav-item mb-2">
                    <a to="#" className="nav-link p-0 text-white">
                      Pricing
                    </a>
                  </li>
                  {/* new li */}
                  <li className="nav-item mb-2">
                    <a to="#" className="nav-link p-0 text-white">
                      FAQs
                    </a>
                  </li>
                  {/* new li */}
                  <li className="nav-item mb-2">
                    <a to="#" className="nav-link p-0 text-white">
                      About
                    </a>
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
                  <a href="" className="link-light" to="#">
                    <i className="fa fa-facebook fa-2x"></i>
                  </a>
                </li>
                <li className="ms-3">
                  <a href="" className="link-light" to="#">
                    <i className="fa fa-instagram fa-2x"></i>
                  </a>
                </li>
                <li className="ms-3">
                  <a href="" className="link-light" to="#">
                    <i class="fa fa-envelope fa-2x "></i>
                  </a>
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
