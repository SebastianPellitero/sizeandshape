/*------------------------------------------------*/
/* LIBRARIES
/*------------------------------------------------*/
import React, { Component } from "react";
import { Link } from "react-router-dom";
/*------------------------------------------------*/
/* INTERNAL DEPENDENCIES
/*------------------------------------------------*/
// Styles
import { AppBarWrapper, ToolbarWrapper } from "./header.style";
// Icons
// Constants
import { ROOT, ABOUT, TUTORIAL } from "../../constants/routes";
// Components

class Header extends Component {
  render() {
    return (
      <AppBarWrapper position="static">
        <ToolbarWrapper>
          <Link to={ROOT}>
            <span>Dashboard</span>
          </Link>
          <div className="right-container">
            <Link to={TUTORIAL}>
              <span>Tutorial</span>
            </Link>
            <Link to={ABOUT}>
              <span>About</span>
            </Link>
          </div>
        </ToolbarWrapper>
      </AppBarWrapper>
    );
  }
}

/*------------------------------------------------*/
/* EXPORTS
/*------------------------------------------------*/
export default Header;
