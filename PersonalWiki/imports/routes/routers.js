import { Meteor } from "meteor/meteor";
import React from "react";
import { Router, Route, Switch, Redirect } from "react-router";
import { createBrowserHistory } from "history";
import { Tracker } from "meteor/tracker";

import Signup from "../ui/Signup.jsx";
import Login from "../ui/Login.jsx";
import CreateWiki from "../ui/CreateWiki.jsx";
import App from "../ui/App.jsx";
import NotFound from "../ui/NotFound.jsx";
import MyPage from "../ui/MyPage.jsx";

const browserHistory = createBrowserHistory();

const authPages = ["/app"];
const unAuthpages = ["/", "/signup", "/createWiki"];

// Tracking auth status
const authStatus = (isLoggedin) => {
  // get the current location
  const pathname = browserHistory.location.pathname;

  const isUnAuthPage = unAuthpages.includes(pathname);
  const isAuthPage = authPages.includes(pathname);

  // if user on an unauthenticated page and logged in, redirect to /app
  if (isUnAuthPage && isLoggedin) {
    browserHistory.replace("/app");
  }
  // if user on an authenticated page but not logged in, redirect to /
  if (isAuthPage && !isLoggedin) {
    browserHistory.replace("/");
  }
};

// routers
export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Switch>
      <Route
        exact
        path="/"
        render={() => (Meteor.userId() ? <Redirect to="/app" /> : <Login />)}
      />
      <Route
        exact
        path="/signup"
        render={() => (Meteor.userId() ? <Redirect to="/app" /> : <Signup />)}
      />
      <Route
        exact
        path="/createWiki"
        render={() =>
          !Meteor.userId() ? <Redirect to="/app" /> : <CreateWiki />
        }
      />
      <Route
        exact
        path="/app"
        render={() => (!Meteor.userId() ? <Redirect to="/" /> : <App />)}
      />
      <Route
        exact
        path="/mypage"
        render={() => (!Meteor.userId() ? <Redirect to="/app" /> : <MyPage />)}
      />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

Tracker.autorun(() => {
  const isLoggedin = !!Meteor.userId();
  authStatus(isLoggedin);
});
