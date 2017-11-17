import React from "react";
import NavbarCustom from "./Navbar.js";

class NavbarContainer extends React.Component {
  constructor(){
    super();
    this.state = {
      isOpen: false,
      position: "inherit",
    }
    this.toggle = this.toggle.bind(this);
  }
  toggle(){
    this.setState((prevState)=>({
      isOpen : !prevState.isOpen
    }))
  }

  componentDidMount(){
    window.addEventListener("scroll", ()=>{
      let fromTop = document.documentElement.scrollTop || document.body.scrollTop
      if (fromTop > window.innerHeight) {
        this.setState((prevState)=>({
          position: "fixed",
        }))
      }else {
        this.setState((prevState)=>({
          position: "inherit",
        }))
      }
    })
  }



  render() {
    return (
        <NavbarCustom {...this.state} {...this.props} toggle={this.toggle} isOpen={this.state.isOpen} />
    )
  }
}
console.log(this.state);
export default NavbarContainer;
