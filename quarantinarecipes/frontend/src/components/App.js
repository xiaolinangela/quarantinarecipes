import React, { Component } from "react";
import Header from "./layout/Header";
import RecipeList from "./recipes/RecipeList";

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Header />
        <div>
          <RecipeList />
        </div>
      </div>
    );
  }
}

export default App;
