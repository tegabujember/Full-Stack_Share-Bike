import React from "react";

const About = () => {
  return (
    <div>
      <section id="about">
        <div className="container my-2 py-2">
          <div className="row">
            <div className="col-md-6">
              <img
                src="https://cdn.britannica.com/63/82563-050-3FCFC72A/Family-country-road.jpg"
                alt="about"
                className="w-75 mt-5"
              />
            </div>
            <div className="col-md-6">
              <h3 className="fs-5 mb-0"></h3>
              <h3 className="fs-5 text-center mb-0"> אודותינו </h3>
              <h1 className="display-6 mb-2">
                מי <b>אנחנו</b>
              </h1>
              <hr className="w-50" />
              <p className="lead mb-4">
                היא חברה להשכרת כלי תחבורה
                <b style={{ color: "blue" }}> פרטיים</b> share bike
              </p>
              <button className="btn btn-primary rounded-pill px-4 py-2">
                כניסה
              </button>
              <button className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2">
                צור קשר
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
