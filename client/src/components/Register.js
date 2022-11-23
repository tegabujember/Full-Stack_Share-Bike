import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  //handle inputs
  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setUser({ ...user, [name]: value });
  };

  //handle submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    //Object Destructuring
    //Store Object Data into variables
    const { username, email, password } = user;
    try {
      //It is submitted on port 3000 by default
      //witch is frontEnd but we need to
      //submit it on Backend witch is on port 3001
      //so we need proxy
      const res = await fetch("/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });
      // if (!res.ok) {
      //   window.alert("Already Used Details");
      // } else {
        window.alert("Registered Successfully");
        navigate("/");
      //}

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="container shadow my-4">
        <div className="row justify-content-end">
          <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form order-2">
            <h1 className="display-4 fw-bolder">שלום , אורח </h1>
            <p className="lead text-center">הזן פרטים כדי להירשם </p>
            <h5 className="mb-4">או </h5>
            <NavLink
              to="/login"
              className="btn btn-outline-light rounded-pill pb-2 w-50"
            >
              כניסה
            </NavLink>
          </div>
          {/*login line start here */}
          <div className="col-md-6 p-5 ">
            <form onSubmit={handleSubmit} method="POST">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="username"
                  placeholder="שם משתמש"
                  value={user.username}
                  onChange={handleInput}
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="הזן כתובת דואר אלקטרוני"
                  name="email"
                  value={user.email}
                  onChange={handleInput}
                />
              </div>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                name="password"
                placeholder="סיסמה"
                value={user.password}
                onChange={handleInput}
              />
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  אני מסכים לתנאים ולהתניות
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-outline-primary w-100 mt-4 rounded-pill"
              >
                הרשמה
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
