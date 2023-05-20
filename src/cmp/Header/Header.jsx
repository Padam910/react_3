import { useState } from "react";
import "./Header.css";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown
} from "react-bootstrap";

import { Link } from "react-router-dom";
import Menu from "../../json-api/Menu";
import Brand from "../../json-api/Brand";

const NormalMenu = (data)=>{
  const textColor = {
    color:data.color
  }
  const design = (
    <>
      <Link style={textColor} className={data.menuInfo.button ? "nav-link btn btn-primary text-white px-3" : "nav-link"} to={data.menuInfo.url}>{data.menuInfo.label}</Link>
    </>
  );
  return design;
}

const DropdownMenu = (data)=>{
  const design = (
    <>
      <NavDropdown title={data.menuInfo.label} id="dropdown-container">
      <i className="fa fa-caret-up arrow-up"></i>
        {
          data.menuInfo.dropdownMenu.map((item)=>{
            return <NormalMenu color="black" menuInfo={item} key={item.id} />
          })
        }
      </NavDropdown>
    </>
  );
  return design;
}

const Header = ()=>{
    const [sticky,changeStickyData] = useState("py-3 border-bottom fixed-top");

    window.onscroll = ()=>{
      let tmp = "";
      let top = window.scrollY;
      if(top > 100)
      {
        tmp = "py-3 border-bottom fixed-top sticked";
      }
      else {
        tmp = "py-3 border-bottom fixed-top";
      }
      return changeStickyData(tmp);
    }

    const design = (
      <>
        <Navbar expand="lg" className={sticky}>
          <Container>
            <Link className="navbar-brand" to="/">{Brand.name}</Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="justify-content-end w-100">
                {
                  Menu.map((data)=>{
                    if(data.dropdown)
                    {
                      return <DropdownMenu menuInfo={data} key={data.id} />
                    }
                    return <NormalMenu color="white" menuInfo={data} key={data.id}/>
                  })
                }
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
    return design;
}

export default Header;
