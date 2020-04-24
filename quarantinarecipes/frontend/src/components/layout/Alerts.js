import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";

export class Alerts extends Component {
  componentDidUpdate(prevProps) {
    const { alert, message } = this.props;
    if (message !== prevProps.message) {
      if (message.addRecipe) alert.success(message.addRecipe);
    }
  }
  render() {
    return <Fragment />;
  }
}

const mapStateToProps = (state) => ({
  message: state.messages,
});

export default connect(mapStateToProps)(withAlert()(Alerts));
