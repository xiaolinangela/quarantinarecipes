import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import RecipeForm from "./RecipeForm";
import { getRecipe, editRecipe } from "../../actions/recipes";

class RecipeEdit extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getRecipe(id);
  }

  onSubmit = (formValues) => {
    this.props.editRecipe(this.props.match.params.id, formValues);
  };
  render() {
    if (!this.props.recipe) {
      return <div>Loading</div>;
    }
    return (
      <div>
        <h3>Edit a Recipe</h3>
        <RecipeForm
          initialValues={_.pick(
            this.props.recipe,
            "name",
            "ingredients",
            "instructions",
            "image"
          )}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    recipeId: ownProps.match.params.id,
    recipe: state.recipes[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { getRecipe, editRecipe })(RecipeEdit);
