import React, { Component, Fragment } from "react";
import "./style/style.css";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./layout/Header";
import RecipeList from "./recipes/RecipeList";
import RecipeCreate from "./recipes/RecipeCreate";
import RecipeDetail from "./recipes/RecipeDetail";
import RecipeEdit from "./recipes/RecipeEdit";
import RecipeDelete from "./recipes/RecipeDelete";
import Register from "./accounts/Register";
import Login from "./accounts/Login";
import PrivateRoute from "./common/PrivateRoute";
import Alerts from "./layout/Alerts";
import history from "../history";

import { Provider } from "react-redux";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import store from "../store";

const alertOptions = {
  timeout: 3000,
  position: "top center",
};

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router history={history}>
            <Fragment>
              <div className="ui container">
                <Header />
                <Alerts />
                <Switch>
                  <PrivateRoute exact path="/" component={RecipeList} />
                  <PrivateRoute
                    exact
                    path="/recipes/new"
                    component={RecipeCreate}
                  />
                  <PrivateRoute
                    exact
                    path="/recipes/detail/:id"
                    component={RecipeDetail}
                  />
                  <PrivateRoute
                    exact
                    path="/recipes/edit/:id"
                    component={RecipeEdit}
                  />
                  <PrivateRoute
                    exact
                    path="/recipes/delete/:id"
                    component={RecipeDelete}
                  />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

export default App;
