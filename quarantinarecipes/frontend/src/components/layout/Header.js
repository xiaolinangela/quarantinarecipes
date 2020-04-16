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
          <div className="item">
            <div className="ui icon input">
              <input type="text" placeholder="search..."></input>
              <i className="search link icon"></i>
            </div>
          </div>
          <Link to="/recipes/new" className="item">
            Create Recipe
          </Link>
          <Link to="/register" className="item">
            Register
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
