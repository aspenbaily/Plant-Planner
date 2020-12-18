import React from "react";
// import { Link } from "react-router-dom";

function Landing() {
  return (
    <article className="landing">
      <div className="hero"></div>
      <div className="landing-description">
        <p className="landing-description__text">
        Plant Planner is an app designed to simplify house plant selection and care.  Users are able to select from a variety of conditions, depending on their ability and what their space looks like.
        </p>
        <p className="landing-description__text">
          House plants are a rapidly growing market, especially since people are spending more time in their homes.
          An issue many people have is that they end up selecting plants that require more care than they anticipate, or require a specific climate.
          One of the goals for the project is to have calendar integration with other services in order to simplify plant care and establish reminders for plant care, or to share with roommates or house sitters.
        </p>
      </div>
    </article>
  );
}
export default Landing;
