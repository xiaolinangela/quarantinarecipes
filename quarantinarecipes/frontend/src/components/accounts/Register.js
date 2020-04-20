import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";

class Register extends Component {
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
    console.log("submit");
  };

  render() {
    return (
      <div>
        <h3>Register</h3>
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
            name="email"
            component={this.renderInput}
            label="Email"
            type="email"
          />
          <Field
            name="password"
            component={this.renderInput}
            label="Password"
            type="password"
          />
          <Field
            name="password2"
            component={this.renderInput}
            label="Confirm Password"
            type="password"
          />

          <button className="ui button primary">Register</button>
          <p>
            Already have an account? <Link to="/login">Login</Link>
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
  if (!formValues.email) {
    errors.email = "You must enter Email";
  }
  if (!formValues.password) {
    errors.password = "You must enter Password";
  }

  if (formValues.password2 != formValues.password) {
    errors.password2 = "Passwords do not match";
  }
  return errors;
};

export default reduxForm({
  form: "registerForm",
  validate: validate,
})(Register);
