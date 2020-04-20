import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getRecipes } from "../../actions/recipes";
import { Card, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

class RecipeList extends Component {
  static propTypes = {
    getRecipes: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getRecipes();
  }
  renderList() {
    return this.props.recipes.map((recipe) => {
      return (
        <Card key={recipe.id} link>
          <Link to={`/recipes/detail/${recipe.id}`}>
            <Image src={recipe.image} height="200" width="290" />
          </Link>
          <Card.Content>
            <Link to={`/recipes/detail/${recipe.id}`}>
              <Card.Header>{recipe.name}</Card.Header>
            </Link>
            <Card.Description>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Card.Description>
          </Card.Content>
        </Card>
      );
    });
  }
  render() {
    return (
      <div>
        <h2>My Recipes</h2>
        <Card.Group>{this.renderList()}</Card.Group>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  recipes: Object.values(state.recipes),
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { getRecipes })(RecipeList);
