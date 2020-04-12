import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { createRecipe } from "../../actions/recipes";
import RecipeForm from "./RecipeForm";

class RecipeCreate extends Component {
  onSubmit = (formValues) => {
    this.props.createRecipe(formValues);
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <h3>Create Recipe</h3>
        <RecipeForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createRecipe })(RecipeCreate);
