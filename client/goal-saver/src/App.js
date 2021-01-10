import React, { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import { connect } from "react-redux";
import { loadUser } from "./actions";
import { Home } from "./Homepage/loader";
import { Goals } from "./Goals/loader";
import { GoalCreator } from "./GoalCreator/loader";
import { Goal } from "./Goal/loader";
import { Note } from "./components/Note/loader";
import { Notes } from "./Notes/loader";
import Modals from "./components/Modals";

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
        <ToastContainer />
        <Modals />
        <Home />
      </AppWrapper>
    );
  }
  return (
    <AppWrapper history={history}>
      <ToastContainer />
      <Modals />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/user/:userId/create-goal" component={GoalCreator} />
        <Route exact path="/user/:userId/goals" component={Goals} />
        <Route exact path="/user/:userId/goals/:goalId" component={Goal} />
        <Route exact path="/user/:userId/notes" component={Notes} />
        <Route exact path="/user/:userId/notes/:noteId" component={Note} />
      </Switch>
    </AppWrapper>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.authentication.isAuthenticated,
  location: state.router.location,
});

const mapDispatchToProps = (dispatch) => ({
  loadUser: () => dispatch(loadUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
