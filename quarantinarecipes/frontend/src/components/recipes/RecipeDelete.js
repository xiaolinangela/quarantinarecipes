import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Link, Redirect, withRouter } from "react-router-dom";
import { getRecipe, deleteRecipe } from "../../actions/recipes";

import Modal from "../layout/Modal";

class RecipeDelete extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getRecipe(id);
  }

  renderActions() {
    const { id } = this.props.match.params;
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteRecipe(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to={`/recipes/detail/${id}`} className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.recipe) {
      return "Are you sure you want to delete this recipe?";
    }
    return `Are you sure you want to delete the stream with title: ${this.props.recipe.name}`;
  }
  render() {
    console.log(this.props);
    return (
      <Modal
        title="Delete Recipe"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => this.props.history.push("/")}
      />
    );
  }
}

const mapToStateProps = (state, ownProps) => {
  return { recipe: state.recipes[ownProps.match.params.id] };
};
export default compose(
  withRouter,
  connect(mapToStateProps, { getRecipe, deleteRecipe })
)(RecipeDelete);
