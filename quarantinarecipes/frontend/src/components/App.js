import React, { Component, Fragment } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./layout/Header";
import RecipeList from "./recipes/RecipeList";
import RecipeCreate from "./recipes/RecipeCreate";
import { Provider } from "react-redux";
import store from "../store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <div className="ui container">
              <div>
                <Header />
                <Switch>
                  <Route path="/" exact component={RecipeList} />
                  <Route path="/recipes/new" exact component={RecipeCreate} />
                </Switch>
              </div>
            </div>
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
