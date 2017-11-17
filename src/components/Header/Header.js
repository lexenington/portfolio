import React from "react";
import "./Header.css";
import ContactContainer from "../Contact"

let Header = (props) => (
  <div className="head-section">
    <div className="container-fluid ">
      <div className="row">
        <div className="col-lg-6 head-img"></div>
        <div className="col-lg-6">
          <div className="container ">
            <div className="row m-2">
              <div className="col-12 my-5">
                <h3 className="display-5 text-center">I AM </h3>
                <h1 className="header-lead text-center my-3">ALEXANDER</h1>
                <h3 className="display-5 text-center">A FULLSTACK DEVELOPER </h3>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-8">
                <p className="lead display-5 text-justify">Based out of Accra, Ghana. Specializing in Front-End and Back-End web development.  If you are a business seeking a web presence or an employer looking to hire, you can get in touch with me  </p>
                <div className="form-group">
                  <a href="mailto:lexenington@gmail.com?Subject=I%20Want%20A%20Website" target="_top" className="btn btn-lg form-control btn-success m-3">I need a Website <i className="fa fa-angle-double-right" aria-hidden="true"></i></a>
                  <a href="mailto:lexenington@gmail.com?Subject=I%20Want%20To%20Hire" className="btn btn-lg form-control btn-info m-3" >I am looking to Hire <i className="fa fa-angle-double-right" aria-hidden="true"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Header;
