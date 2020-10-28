import React from "react";
import styled from "styled-components";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import Home from "./Homepage";
import GoalCreator from "./GoalCreator";
import Modals from "./components/Modals";

const AppWrapper = styled.div`
  margin: 0px;
  min-height: 100%;
  width: 100%;
`;

function App() {
  let history = useHistory();
  return (
    <AppWrapper history={history}>
      <Modals />
      <Switch>
        <Route exact path="/user/:userId/create-goal" component={GoalCreator} />
        <Route exact path="/" component={Home} />
      </Switch>
    </AppWrapper>
  );
}

export default App;
