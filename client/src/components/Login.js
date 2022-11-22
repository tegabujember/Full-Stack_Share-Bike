import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  //handle input
  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  //handle Login
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = user;
    try {
      const res = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (res.status === 400 || !res) {
        window.alert("Invalid Credential");
      } else {
        window.alert("Login Successfully");
        window.location.reload();
        navigate("/dashboard");
        //token is generated when we logged in
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="container shadow my-3">
        <div className="row">
          <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form">
            <h1 className="display-4 fw-bolder">Welcome Back</h1>
            <p className="lead text-center">Enter Your Credential To Login </p>
            <h5 className="mb-4">Or </h5>
            <NavLink
              to="/register"
              className="btn btn-outline-light rounded-pill pb-2 w-50"
            >
              Register
            </NavLink>
          </div>
          {/*login line start here */}
          <div className="col-md-6 p-5 ">
            <h1 className="display-6 fw-bolder mb-5 ">Login</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                />
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Remember me
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100 mt-4 rounded-pill"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
