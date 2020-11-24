import React, { lazy, Suspense, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import { connect } from "react-redux";
import { loadUser } from "./actions";
import Loader from "./components/Loader";

const AppWrapper = styled.div`
  margin: 0px;
  min-height: 100%;
  width: 100%;
`;

const Goals = lazy(() => import("./Goals/index"));
const Home = lazy(() => import("./Homepage"));
const Goal = lazy(() => import("./Goal"));
const GoalCreator = lazy(() => import("./GoalCreator"));
const Modals = lazy(() => import("./components/Modals"));
const Notes = lazy(() => import("./Notes"));

function App({ loadUser, isAuthenticated }) {
  let history = useHistory();

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  if (!isAuthenticated) {
    return (
      <AppWrapper history={history}>
        <Loader />
        <ToastContainer />
        <Suspense fallback={<Loader />}>
          <Modals />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <Home />
        </Suspense>
      </AppWrapper>
    );
  }
  return (
    <AppWrapper history={history}>
      <Loader />
      <ToastContainer />
      <Suspense fallback={<Loader />}>
        <Modals />
      </Suspense>
      <Switch>
        <Suspense fallback={<Loader />}>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/user/:userId/create-goal"
            component={GoalCreator}
          />
          <Route exact path="/user/:userId/goals" component={Goals} />
          <Route exact path="/user/:userId/goals/:goalId" component={Goal} />
          <Route exact path="/user/:userId/notes" component={Notes} />
        </Suspense>
      </Switch>
    </AppWrapper>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.authentication.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => ({
  loadUser: () => dispatch(loadUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
