import React, { Component, Fragment } from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./layout/Header";
import RecipeList from "./recipes/RecipeList";
import RecipeCreate from "./recipes/RecipeCreate";
import RecipeDetail from "./recipes/RecipeDetail";
import RecipeEdit from "./recipes/RecipeEdit";
import RecipeDelete from "./recipes/RecipeDelete";
import history from "../history";

import { Provider } from "react-redux";
import store from "../store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Fragment>
            <div className="ui container">
              <Header />
              <Switch>
                <Route exact path="/" component={RecipeList} />
                <Route exact path="/recipes/new" component={RecipeCreate} />
                <Route
                  exact
                  path="/recipes/detail/:id"
                  component={RecipeDetail}
                />
                <Route exact path="/recipes/edit/:id" component={RecipeEdit} />
                <Route
                  exact
                  path="/recipes/delete/:id"
                  component={RecipeDelete}
                />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
