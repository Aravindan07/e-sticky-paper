import React from "react";
import Header from "../components/Header";
import { connect } from "react-redux";
import { ReactSVG } from "react-svg";
import AddIcon from "../icons/add-icon.svg";
import ChildDeleteIcon from "../icons/child-delete.svg";
import TrashIcon from "../icons/trash.svg";
import CompleteIcon from "../icons/completed-icon.svg";
import CancelIcon from "../icons/cancel-icon.svg";
import { Button } from "../components/Modals/styles";
import { HeaderButton } from "../components/Header/styles";
import {
  Wrapper,
  SubButtonDiv,
  InnerWrapper,
  GoalWrapper,
  GoalName,
  Children,
  ChildName,
  IconsDiv,
} from "./styles";

import { markChecked, openModal } from "../actions";

function Goals({ userGoals, userId, MarkGoal, Open }) {
  const markCompleted = (userId, goalId, childId) => {
    return MarkGoal(userId, goalId, childId);
  };

  const openModalType = (modalType, data = {}) => {
    return Open(modalType, data);
  };
  return (
    <>
      <Header />
      <Wrapper>
        <SubButtonDiv>
          <Button onClick={() => openModalType("input", "subGoalInput")}>
            Add a Goal
          </Button>
          <HeaderButton onClick={() => openModalType("save")}>
            Create a Fresh Goal
          </HeaderButton>
        </SubButtonDiv>
        <GoalName style={{ textAlign: "center", margin: "0 auto" }}>
          Click on a goal to view and edit it!
        </GoalName>
        <InnerWrapper>
          {/* {userGoals.map((goal) => {
            return (
              <GoalWrapper key={goal._id}>
                <GoalName>
                  {goal.goalName}
                  <IconsDiv divType="heading">
                    <ReactSVG
                      src={TrashIcon}
                      onClick={() => openModalType("message", goal)}
                    />
                    <ReactSVG
                      className="addIcon"
                      src={AddIcon}
                      onClick={() => openModalType("input", goal)}
                    />
                  </IconsDiv>
                </GoalName>
                {goal.children.map((child) => (
                  <Children key={child._id} id={child._id}>
                    <ChildName completed={child.checked}>
                      {child.child}
                    </ChildName>
                    <IconsDiv>
                      {child.checked ? (
                        <>
                          <ReactSVG
                            className="deleteChild"
                            src={CancelIcon}
                            onClick={() =>
                              markCompleted(userId, goal._id, child._id)
                            }
                          />
                        </>
                      ) : (
                        <>
                          <ReactSVG
                            className="deleteChild"
                            src={ChildDeleteIcon}
                            onClick={() =>
                              openModalType("delete_child", {
                                type: "delete_child",
                                _id: goal._id,
                                child: child.child,
                                name: goal.goalName,
                              })
                            }
                          />
                          <ReactSVG
                            id={child._id}
                            src={CompleteIcon}
                            onClick={() =>
                              markCompleted(userId, goal._id, child._id)
                            }
                          />
                        </>
                      )}
                    </IconsDiv>
                  </Children>
                ))}
              </GoalWrapper>
            );
          })} */}
          {userGoals.map((el) => {
            return <Button>{el.mainGoalName}</Button>;
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
