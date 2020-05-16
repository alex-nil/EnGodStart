import React from "react";
import Review from "./Review.jsx";
class About extends React.Component {
  render() {
    return (
      <div className=" mx-auto">
        <h1>Lagra dina nycklar på en plats</h1>
        <hr />
        <p>
          Hos oss kan du hämta hem och lagra din nycklar enklet med din
          elektroniska nyckelbricka!
        </p>
        <hr />
        <Review
          desc={"Här kan du recensera våran produkt!"}
          header={"Lämna omdömme"}
        />
      </div>
    );
  }
}

export default About;
