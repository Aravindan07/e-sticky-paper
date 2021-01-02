import React from "react";
import { connect } from "react-redux";
import { markChecked, openModal } from "../actions";
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
} from "../Goals/styles";
import Header from "../components/Header";

function Goal({ Open, location, userGoals, MarkGoal, userId, ...props }) {
  let goalIdToShow = location.pathname.split("/")[4];
  const returnedGoal = userGoals.find((el) => {
    return el._id === goalIdToShow;
  });

  const openModalType = (modalType, data = {}) => {
    return Open(modalType, data);
  };

  const markCompleted = (userId, goalId, subGoalId, childId) => {
    return MarkGoal(userId, goalId, subGoalId, childId);
  };

  const createFreshGoal = () => {
    return props.history.push(`/user/${userId}/create-goal`);
  };

  return (
    <>
      <Header />
      <Wrapper>
        <SubButtonDiv>
          <HeaderButton
            btnType="notes"
            onClick={() =>
              openModalType("input", {
                type: "subGoalInput",
                goalId: returnedGoal._id,
              })
            }
          >
            Add a Goal
          </HeaderButton>
          <HeaderButton btnType="notes" onClick={createFreshGoal}>
            Create a Fresh Goal
          </HeaderButton>
        </SubButtonDiv>
        <InnerWrapper>
          {returnedGoal &&
            returnedGoal.userGoals.map((goal) => {
              return (
                <GoalWrapper key={goal._id} pageType="single-goal">
                  <GoalName>
                    {goal.goalName}
                    <IconsDiv divType="heading">
                      <ReactSVG
                        src={TrashIcon}
                        onClick={() =>
                          openModalType("message", {
                            goalId: returnedGoal._id,
                            goal,
                          })
                        }
                      />
                      <ReactSVG
                        className="addIcon"
                        src={AddIcon}
                        onClick={() =>
                          openModalType("input", {
                            goalId: returnedGoal._id,
                            goal,
                          })
                        }
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
                                markCompleted(
                                  userId,
                                  returnedGoal._id,
                                  goal._id,
                                  child._id
                                )
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
                                  goalId: returnedGoal._id,
                                  subGoalId: goal._id,
                                  childId: child._id,
                                  childName: child.child,
                                  parentName: goal.goalName,
                                })
                              }
                            />
                            <ReactSVG
                              id={child._id}
                              src={CompleteIcon}
                              onClick={() =>
                                markCompleted(
                                  userId,
                                  returnedGoal._id,
                                  goal._id,
                                  child._id
                                )
                              }
                            />
                          </>
                        )}
                      </IconsDiv>
                    </Children>
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
  userId: state.authentication.user.id,
  location: state.router.location,
});

const mapDispatchToProps = (dispatch) => ({
  Open: (modalType, data) => dispatch(openModal(modalType, data)),
  MarkGoal: (userId, goalId, subGoalId, childId) =>
    dispatch(markChecked(userId, goalId, subGoalId, childId)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Goal);
