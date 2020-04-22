import React, { Component } from "react";
import { login } from "../../actions/auth";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Login extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }
  renderInput = ({ input, label, type, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" type={type} />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.login(formValues);
  };

  render() {
    return (
      <div>
        <h3>Login</h3>
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="ui form error"
        >
          <Field
            name="username"
            component={this.renderInput}
            label="Username"
            type="text"
          />

          <Field
            name="password"
            component={this.renderInput}
            label="Password"
            type="password"
          />

          <button className="ui button primary">Login</button>
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </form>
      </div>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.username) {
    errors.username = "You must enter Username";
  }

  if (!formValues.password) {
    errors.password = "You must enter Password";
  }

  return errors;
};

const formWrapped = reduxForm({
  form: "loginForm",
  validate: validate,
})(Login);

export default connect(null, { login })(formWrapped);
