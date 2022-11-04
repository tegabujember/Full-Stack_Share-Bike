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
              <h1 className="display-6 mb-2">
                Who <b>We</b> Are
              </h1>
              <hr className="w-50" />
              <p className="lead mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                temporibus neque ducimus exercitationem dolore voluptatibus ipsa
                possimus fuga maiores sequi fugiat, cum provident iure
                quibusdam, amet doloremque earum in illum. Id quidem doloremque
                corporis repudiandae. Eos unde eum, distinctio consequuntur
                labore error quaerat molestiae nobis sit ipsa expedita. Eligendi
                voluptas cupiditate delectus veritatis! Voluptatibus tenetur
                adipisci voluptatem rerum harum quibusdam vel error asperiores
                illo magni beatae vero, est corrupti ea. Quos quis nulla qui
                similique. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Laborum velit voluptas laudantium omnis fugiat tenetur
                sequi saepe sapiente, quibusdam rerum id quisquam dolorum
                consequuntur similique?
              </p>
              <button className="btn btn-primary rounded-pill px-4 py-2">
                Get Started
              </button>
              <button className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2">
                Contact US
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
