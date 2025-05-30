import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavbarStyle.css";
import { MenuItems } from "./MenuItems";

class Navbar extends Component {
  state = { clicked: false };

  handleClicked = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <h2 className="navbar-logo"> LaunchCode University</h2>

        <div className="menu-icons" onClick={this.handleClicked}>
          <i className={this.state.clicked ? "fa fa-times" : "fa fa-bars"}></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className="nav-links" to={item.url}
                onClick={() => this.setState({ clicked: false })}  >
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;