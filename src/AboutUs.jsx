import React from "react";
import "./App.css";

function About() {
  return (
    <div className="about-page py-5" style={{ backgroundColor: "#f9f9fb" }}>
      <div className="container">
        <h1 className="text-center text-primary fw-bold mb-4">
          About <span className="text-dark">RS Skills Hub</span>
        </h1>

        <p className="text-center fs-5 text-muted mb-5">
          <strong>RS Skills Hub</strong> was founded in <b>2022</b> with the goal of providing
          high-quality education, technical training, and real-world skills to the young generation.
          We believe in transforming talent into excellence through innovative and practical learning.
        </p>

        {/* ---------- OUR VISION ---------- */}
        <div className="vision-section text-center bg-light p-5 rounded-4 shadow-sm mb-5">
          <h2 className="text-dark fw-bold mb-3">Our Vision</h2>
          <p className="fs-5 text-secondary px-3">
            <strong>“Empower the young youth with skills, confidence, and creativity.”</strong>
            <br />
            Our vision is to inspire individuals to become leaders in their fields, equipped with
            modern knowledge and a problem-solving mindset. We aim to build a future where every
            learner can shape their destiny through continuous growth and innovation.
          </p>
        </div>

        {/* ---------- LEADERSHIP SECTION ---------- */}
        <h2 className="text-center fw-bold text-primary mb-4">Our Leadership</h2>
        <div className="row justify-content-center">
          <div className="col-md-5 mb-4">
            <div
              className="card border-0 shadow-lg p-4 text-center rounded-4"
              style={{ transition: "0.3s", backgroundColor: "white" }}
            >
              <img
                src="https://via.placeholder.com/200x200.png?text=Remsha+Shehroze"
                alt="Remsha Shehroze"
                className="rounded-circle mx-auto mb-3 shadow-sm"
                width="200"
                height="200"
              />
              <h4 className="fw-bold text-dark">Remsha Shehroze</h4>
              <p className="text-muted mb-1">CEO & Co-Founder</p>
              <p className="small text-secondary">
                A visionary leader passionate about education and youth empowerment. Remsha drives
                innovation and excellence at RS Skills Hub.
              </p>
            </div>
          </div>

          <div className="col-md-5 mb-4">
            <div
              className="card border-0 shadow-lg p-4 text-center rounded-4"
              style={{ transition: "0.3s", backgroundColor: "white" }}
            >
              <img
                src="https://via.placeholder.com/200x200.png?text=Shehroze+Sajid"
                alt="Shehroze Sajid"
                className="rounded-circle mx-auto mb-3 shadow-sm"
                width="200"
                height="200"
              />
              <h4 className="fw-bold text-dark">Shehroze Sajid</h4>
              <p className="text-muted mb-1">CEO</p>
              <p className="small text-secondary">
                A dynamic entrepreneur focused on skill-based education. Shehroze believes in
                creating opportunities through innovation and dedication.
              </p>
            </div>
          </div>
        </div>

        {/* ---------- CONTACT SECTION ---------- */}
        <div className="text-center mt-5 p-4 bg-white shadow rounded-4">
          <h4 className="text-primary fw-bold mb-3">Contact Information</h4>
          <p className="mb-2">
            <i className="fa-solid fa-phone text-dark"></i>{" "}
            <strong>0303-9266015</strong>
          </p>
          <p className="mb-2">
            <i className="fa-solid fa-envelope text-dark"></i>{" "}
            <a href="mailto:RSSkillsHub789@gmail.com" className="text-decoration-none text-secondary">
              RSSkillsHub789@gmail.com
            </a>
          </p>
          <p className="text-muted mb-0">
            <i className="fa-solid fa-calendar-days"></i> Since <strong>2022</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
