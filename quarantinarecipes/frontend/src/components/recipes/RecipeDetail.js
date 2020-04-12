import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getRecipe } from "../../actions/recipes";

class RecipeDetail extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getRecipe(id);
  }
  render() {
    if (!this.props.recipe) {
      return <div>Loading...</div>;
    }
    const { name, ingredients, instructions, id } = this.props.recipe;

    return (
      <div>
        <img src={this.props.recipe.image} height={500} width={500} />
        <h2>{name}</h2>
        <p>{ingredients}</p>
        <p>{instructions}</p>
        <div className="right floated content">
          <Link to={`/recipes/edit/${id}`} className="ui button primary">
            Edit
          </Link>{" "}
          <Link to={`/recipes/delete/${id}`} className="ui button negative">
            Delete
          </Link>{" "}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { recipe: state.recipes[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { getRecipe })(RecipeDetail);
