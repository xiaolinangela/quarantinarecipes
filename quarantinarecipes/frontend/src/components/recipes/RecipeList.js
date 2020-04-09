import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getRecipes } from "../../actions/recipes";
import { Card, Image } from "semantic-ui-react";

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
          <Image src={recipe.image} height="200" width="290" />
          <Card.Content>
            <Card.Header>{recipe.name}</Card.Header>
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
    console.log(this.props);
    return (
      <div>
        <h2>My Recipes</h2>
        <Card.Group>{this.renderList()}</Card.Group>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  recipes: state.recipes.recipes,
});

export default connect(mapStateToProps, { getRecipes })(RecipeList);
