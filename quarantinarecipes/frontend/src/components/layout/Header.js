import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";

class Header extends Component {
  render() {
    const { isAuthenticated, user } = this.props.auth;
    console.log(isAuthenticated);
    const authLinks = (
      <div className="right menu">
        <span className="ui item">
          <strong>{user ? `Welcome ${user.username}` : ""}</strong>
        </span>
        <Link to="/recipes/new" className="item">
          Create Recipe
        </Link>
        <button onClick={this.props.logout} className="ui teal button">
          Logout
        </button>
      </div>
    );
    const guestLinks = (
      <div className="right menu">
        <Link to="/register" className="item">
          Register
        </Link>
        <Link to="/login" className="item">
          Login
        </Link>
      </div>
    );

    return (
      <div className="ui secondary pointing menu">
        {/* <Link to="/" clasName="item">
          <h3>Quarantina Recipes</h3>
        </Link> */}
        <Link to="/" className="item" style={{ color: "#32CD32" }}>
          <h3>Quarantina Recipes</h3>
        </Link>
        {isAuthenticated ? authLinks : guestLinks}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Header);
