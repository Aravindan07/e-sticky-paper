import React from "react";
import Header from "../components/Header";
import { connect } from "react-redux";
import AddIcon from "../icons/add-icon.svg";
import { ReactSVG } from "react-svg";
import { Button } from "../components/Modals/styles";
import { HeaderButton } from "../components/Header/styles";
import {
  Wrapper,
  SubButtonDiv,
  InnerWrapper,
  GoalWrapper,
  GoalName,
  Children,
} from "./styles";
import { closeModal, openModal } from "../actions";
// import { Button } from "../components/Header/styles";

function Goals({ userGoals, Open }) {
  const openModalType = (modalType, data = {}) => {
    return Open(modalType, data);
  };
  return (
    <>
      <Header />
      <Wrapper>
        <SubButtonDiv>
          <Button onClick={() => openModalType("input", "subGoalInput")}>
            Add a Sub-Goal
          </Button>
          <HeaderButton>Create a Fresh Goal</HeaderButton>
        </SubButtonDiv>
        <InnerWrapper>
          {userGoals.map((goal) => {
            return (
              <GoalWrapper key={goal._id}>
                <GoalName>
                  {goal.goalName}
                  <ReactSVG
                    src={AddIcon}
                    onClick={() => openModalType("input", goal)}
                  />
                </GoalName>
                {goal.children.map((child) => (
                  <Children key={child}>{child}</Children>
                ))}
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
});

const mapDispatchToProps = (dispatch) => ({
  Open: (modalType, data) => dispatch(openModal(modalType, data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Goals);
