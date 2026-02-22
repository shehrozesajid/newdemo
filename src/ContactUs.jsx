import React from "react";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-box shadow-lg">
        <h1 className="contact-heading">📞 Contact Us</h1>
        <p className="contact-text">
          <strong>We’d love to hear from you!</strong>  
          Reach out to RS Skills Hub for inquiries, admissions, or support.
        </p>

        <div className="contact-details">
          <p>
            <i className="fa-solid fa-phone"></i> <strong>Phone 1:</strong> 0303 9266015
          </p>
          <p>
            <i className="fa-solid fa-phone"></i> <strong>Phone 2:</strong> 0342 6703246
          </p>
          <p>
            <i className="fa-solid fa-envelope"></i>{" "}
            <strong>Email:</strong> RSSkillsHub789@gmail.com
          </p>
          <p>
            <i className="fa-solid fa-location-dot"></i>{" "}
            <strong>Address:</strong> Pending................................................
          </p>
        </div>

      
      </div>
    </div>
  );
}

export default Contact;
