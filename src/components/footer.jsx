import React from "react";
import "../style/footer.css";
class Footer extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="footer col-sm-12 bg-">
          <div className="d-flex justify-content-center">
            <ul className="">
              <li>
                <i className="icon fab fa-instagram"></i>
              </li>
              <li>
                <i className="icon fab fa-facebook"></i>
              </li>
              <li>
                <i className="icon fab fa-twitter-square"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
