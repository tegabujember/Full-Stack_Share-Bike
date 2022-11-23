import React, { useState } from "react";

const Contact = () => {
  const [msg, setMsg] = useState({
    name: "",
    email: "",
    message: "",
  });
  //handle inputs
  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setMsg({ ...msg, [name]: value });
  };

  //handle submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    //Object Destructuring
    //Store Object Data into variables
    const { name, email, message } = msg;
    try {
      //It is submitted on port 3000 by default
      //witch is frontEnd but we need to
      //submit it on Backend witch is on port 3001
      //so we need proxy
      const res = await fetch("/message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (res.status === 400 || !res) {
        window.alert("message not sent . try again later");
      } else {
        window.alert("message sent");
        setMsg({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  //<h3 className="fs-5 text-center mb-0">צור קשר </h3>
  return (
    <div>
      <section id="contact">
        <div className="container my-1 py-1">
          <div className="row mb-5">
            <div className="col-12">
              <h1 className="display-6  text-center mb-4">צור קשר</h1>
              <hr className="w-25 mx-auto " />
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-md-6 ">
            <img
              src="https://quasa.io/storage/images/news/wbtmUgFBbdrrCbgON84fRIBMUwDs2C6VH65ctmDh.png"
              alt="Contact"
              className="w-75"
            />
          </div>
          <div className="col-md-6 ">
            <form onSubmit={handleSubmit} method="POST">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="שם פרטי "
                  name="name"
                  value={msg.name}
                  onChange={handleChange}
                />
              </div>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="כתובת דואר אלקטרוני "
                  name="email"
                  value={msg.email}
                  onChange={handleChange}
                />
              </div>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                  name="message"
                  value={msg.message}
                  placeholder="הודעה"
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-outline-primary">
                שליחה<i className="fa fa-paper-plane ms-2"></i>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
