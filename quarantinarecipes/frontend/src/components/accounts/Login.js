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
        <h2 className="text-center">Login</h2>
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="ui form error form-container"
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
        <h2 className="text-center">
          Start to share recipes with your friends today!
        </h2>
        <div className="login-img">
          <img src="https://cdn.clipart.email/f671d4afc46fc3ad2b72b4b0601c2876_download-cooking-tools-png-clipart-free-transparent-png-images-_403-403.png" />
          <img src="https://cdn.clipart.email/f671d4afc46fc3ad2b72b4b0601c2876_download-cooking-tools-png-clipart-free-transparent-png-images-_403-403.png" />
          <img src="https://cdn.clipart.email/f671d4afc46fc3ad2b72b4b0601c2876_download-cooking-tools-png-clipart-free-transparent-png-images-_403-403.png" />
        </div>
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
