import React, { useEffect } from "react";
import styled from "styled-components";
import { Route, Switch, useHistory } from "react-router-dom";
import Home from "./Homepage";
import GoalCreator from "./GoalCreator";
import Modals from "./components/Modals";
import { ToastContainer } from "react-toastify";
import { connect } from "react-redux";
import { loadUser } from "./actions";
import Loader from "./components/Loader";
import Goals from "./Goals";
import Goal from "./Goal";

const AppWrapper = styled.div`
  margin: 0px;
  min-height: 100%;
  width: 100%;
`;

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
        <Modals />
        <Home />
      </AppWrapper>
    );
  }
  return (
    <AppWrapper history={history}>
      <Loader />
      <ToastContainer />
      <Modals />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/user/:userId/create-goal" component={GoalCreator} />
        <Route exact path="/user/:userId/goals" component={Goals} />
        <Route exact path="/user/:userId/goals/:goalId" component={Goal} />
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
