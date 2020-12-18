import React, { useState } from "react";
import axios from "axios";

function About() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSetName = (e) => {
    setFirstName(e.target.value);
  };
  const handleSetLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleSetEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSetMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    e.target.reset();

    axios
      .post(`http://localhost:8080/contact`, {
        email,
        firstName,
        lastName,
        message,
      })
      .then((response) => {
        console.log(response);
      });
  };
  return (
    <div className="about">
      <div className="banner"></div>
      {/* <div className="container"> */}
      {/* <div className="row"> */}
      {/* <div className="col-md-8 mx-auto"> */}
      {/* <div className="contact-form"> */}
      <form onSubmit={handleFormSubmit} className="contact-form">
        <div className="contact-form__name">
          <div className="form-group">
            <input
              type="text"
              className="form-control contact-form__name--first"
              id="firstName"
              placeholder="First Name"
              onChange={handleSetName}
            ></input>
          </div>
          <div className="form-group ">
            <input
              type="text"
              className="form-control contact-form__name--last"
              id="lastName"
              placeholder="Last Name"
              onChange={handleSetLastName}
            ></input>
          </div>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control contact-form__email"
            id="email"
            placeholder="Your email here"
            onChange={handleSetEmail}
          ></input>
        </div>
        <div className="form-group">
          <textarea
            className="form-control textarea contact-form__message"
            id="message"
            rows="1"
            placeholder="Your message here"
            onChange={handleSetMessage}
          ></textarea>
        </div>
        <button type="submit" className="button contact-button">
          Submit
        </button>
      </form>
    </div>
    // </div>
    // </div>
    // </div>
    // </div>
  );
}
export default About;
