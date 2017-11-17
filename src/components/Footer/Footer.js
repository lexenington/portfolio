import React from "react";
import FontAwesome from "react-fontawesome";
import "./Footer.css";

class Footer extends React.Component {

  genSocialLinks() {
    return this.props.social.map((item, index) => {
      return <li className="nav-item" key={item.name+index}>
        <a href={item.url} className="nav-link pr-0"><FontAwesome name={item.name}/></a>
      </li>
    })
  }

  render() {
    return (
      <div className="container-fluid bg-success">
        <footer className=" text-white py-4">
          <div className="container">
            <div className="row">

              <div className=" col-sm-6 ml-auto text-right social order-1">
                <ul className="nav foot justify-content-start">
                  {this.genSocialLinks()}
                </ul>
              </div>

              <div className="mr-auto col-sm-6 my-auto foot order-2">
                  <p className="copy my-auto">&copy;2017 Alexander</p>
              </div>


            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default Footer
