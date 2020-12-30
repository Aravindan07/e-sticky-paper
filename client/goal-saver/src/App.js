import React, { lazy, Suspense, useContext, useEffect } from "react";
import { __RouterContext } from "react-router";
import { Route, Switch, useHistory } from "react-router-dom";
import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import { useTransition, animated } from "react-spring";
import { connect } from "react-redux";
import { loadUser } from "./actions";
import Loader from "./components/Loader";
import Note from "./components/Note";

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

  const { location } = useContext(__RouterContext);

  const transitions = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0, transform: "translate(0,100%)" },
    enter: { opacity: 1, transform: "translate(0%,0)" },
    leave: { opacity: 0, transform: "translate(0%,-50%)" },
  });

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
      {transitions.map(({ item, key, props }) => (
        <animated.div key={key} style={props}>
          <Switch location={location}>
            <Suspense fallback={<Loader />}>
              <Route exact path="/" component={Home} />
              <Route
                exact
                path="/user/:userId/create-goal"
                component={GoalCreator}
              />
              <Route exact path="/user/:userId/goals" component={Goals} />
              <Route
                exact
                path="/user/:userId/goals/:goalId"
                component={Goal}
              />
              <Route exact path="/user/:userId/notes" component={Notes} />
              <Route
                exact
                path="/user/:userId/notes/:noteId"
                component={Note}
              />
            </Suspense>
          </Switch>
        </animated.div>
      ))}
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
