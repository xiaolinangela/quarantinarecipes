import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="ui secondary pointing menu">
        {/* <Link to="/" clasName="item">
          <h3>Quarantina Recipes</h3>
        </Link> */}
        <Link to="/" className="item" style={{ color: "#32CD32" }}>
          <h3>Quarantina Recipes</h3>
        </Link>

        <div className="right menu">
          <Link to="/recipes/new" className="item">
            Create Recipe
          </Link>
          <Link to="/register" className="item">
            Hello
          </Link>
          <Link to="/login" className="item">
            Login
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
