import React from "react";
import "./Navbar.css"
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from "reactstrap";

let NavbarCustom = (props) => (
  <nav>
    <Navbar color="success" light expanded="md" className="navbar-custom" style={{position: props.position}}>
      <NavbarBrand href="#">{props.brand}</NavbarBrand>
      <NavbarToggler onClick={props.toggle}/>
      <Collapse navbar isOpen={props.isOpen} >
        <Nav className="ml-auto" navbar>
          {
          props.links.map((item,index)=>(
            <NavItem key={item+index}>
              <NavLink href={item.url} className="link">{item.name}</NavLink>
            </NavItem>
          ))
          }
        </Nav>
      </Collapse>
    </Navbar>
  </nav>
)

export default NavbarCustom;
