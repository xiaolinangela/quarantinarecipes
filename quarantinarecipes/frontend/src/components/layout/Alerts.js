import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";

export class Alerts extends Component {
  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    console.log(error);
    if (error !== prevProps.error) {
      if (error.msg.name) {
        alert.error(`Name: ${error.msg.name.join()}`);
      }
      if (error.msg.email) {
        alert.error(`Email: ${error.msg.email.join()}`);
      }
      if (error.msg.message) {
        alert.error(`Message: ${error.msg.message.join()}`);
      }
      if (error.msg.non_field_errors) {
        alert.error(`${error.msg.non_field_errors.join()}`);
      }
      if (error.msg.username) {
        alert.error(`${error.msg.username.join()}`);
      }
    }
    if (message !== prevProps.message) {
      if (message.deleteRecipe) alert.success(message.deleteRecipe);
      if (message.addRecipe) alert.success(message.addRecipe);
    }
  }
  render() {
    return <Fragment />;
  }
}

const mapStateToProps = (state) => ({
  message: state.messages,
  error: state.errors,
});

export default connect(mapStateToProps)(withAlert()(Alerts));
