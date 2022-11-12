import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light shadow">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/">
                  ראשי <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  אודות
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/service">
                  שרותים
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  צור קשר
                </NavLink>
              </li>
            </ul>
            <NavLink className="navbar-brand fw-4 mx-auto" to="/">
              Share Bike
            </NavLink>
            {props.auth ? (
              <>
                <NavLink
                  to="/login"
                  className="btn btn-outline-primary ms-auto px-4 rounded-pill"
                >
                  <i className="fa fa-sign-in me-2" />
                  כניסה
                </NavLink>
                <NavLink
                  to="/register"
                  className="btn btn-outline-primary ms-2 px-4 rounded-pill"
                >
                  <i className="fa fa-user-plus me-2" />
                  הרשמה
                </NavLink>
              </>
            ) : (
              <>
                <NavLink
                  to="/dashboard"
                  className="btn btn-outline-primary ms-2 px-4 rounded-pill"
                >
                  <i className="fa fa-user-plus me-2" />
                  לוח בקרה
                </NavLink>
                <NavLink
                  to="/logout"
                  className="btn btn-outline-primary ms-2 px-4 rounded-pill"
                >
                  <i className="fa fa-sign-out me-2" />
                  התנתק
                </NavLink>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
