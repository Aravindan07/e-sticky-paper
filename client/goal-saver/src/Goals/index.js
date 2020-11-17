import React from "react";
import Header from "../components/Header";
import { connect } from "react-redux";
import { ReactSVG } from "react-svg";
import TrashIcon from "../icons/trash.svg";
import { Button } from "../components/Modals/styles";
import { HeaderButton } from "../components/Header/styles";
import { Wrapper, SubButtonDiv, InnerWrapper, GoalWrapper } from "./styles";

import { markChecked, openModal } from "../actions";
import { P } from "../Homepage/styles";

function Goals({ userGoals, userId, MarkGoal, Open, ...props }) {
  const openModalType = (modalType, data = {}) => {
    return Open(modalType, data);
  };

  const GoalClicked = (goalId) => {
    console.log("Clicked a goal");
    return props.history.push(`goals/${goalId}`);
  };

  const freshGoalClicked = () => {
    return props.history.push("create-goal");
  };

  return (
    <>
      <Header />
      <Wrapper>
        <SubButtonDiv>
          <HeaderButton onClick={freshGoalClicked}>
            Create a Fresh Goal
          </HeaderButton>
        </SubButtonDiv>
        <P style={{ textAlign: "center", margin: "0 auto" }}>
          Click on a goal to view and edit it!
        </P>
        <InnerWrapper>
          {userGoals.map((el) => {
            return (
              <GoalWrapper key={el._id}>
                <Button onClick={() => GoalClicked(el._id)}>
                  {el.mainGoalName}
                </Button>
                <ReactSVG
                  src={TrashIcon}
                  onClick={() =>
                    openModalType("message", {
                      type: "delete_entire_goal",
                      goalId: el._id,
                      goalName: el.mainGoalName,
                    })
                  }
                />
              </GoalWrapper>
            );
          })}
        </InnerWrapper>
      </Wrapper>
    </>
  );
}

const mapStateToProps = (state) => ({
  userGoals: state.authentication.user.goals,
  userId: state.authentication.user.id,
});

const mapDispatchToProps = (dispatch) => ({
  Open: (modalType, data) => dispatch(openModal(modalType, data)),
  MarkGoal: (userId, goalId, childId) =>
    dispatch(markChecked(userId, goalId, childId)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Goals);
