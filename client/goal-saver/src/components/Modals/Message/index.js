import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import {
  closeModal,
  deleteChildGoal,
  deleteEntireGoal,
  deleteGoal,
} from "../../../actions";
import { Button, ButtonsDiv } from "../styles";

const MessageDiv = styled.div`
  font-size: 18px;
  font-weight: 550;
  letter-spacing: 1px;
  line-height: 34px;
  span {
    font-weight: 600;
  }
`;
function Message({
  close,
  deleteEntireGoal,
  deleteGoal,
  deleteChild,
  userId,
  data,
}) {
  console.log(data);

  const deleteEntireGoalFn = (userId, goalId) => {
    console.log(userId, goalId);
    return deleteEntireGoal(userId, goalId);
  };

  const deleteGoalFn = (userId, goalId, subGoalId) => {
    return deleteGoal(userId, goalId, subGoalId);
  };

  const deleteChildFn = (userId, goalId, SubGoalId, childId) => {
    return deleteChild(userId, goalId, SubGoalId, childId);
  };

  const whatToRender = () => {
    if (data.type === "delete_child") {
      return (
        <>
          <MessageDiv>
            Are you sure you want to delete this child goal{" "}
            <span>{data.childName} </span>
            from <span> {data.parentName} ?</span>
          </MessageDiv>
          <ButtonsDiv>
            <Button
              onClick={() =>
                deleteChildFn(userId, data.goalId, data.subGoalId, data.childId)
              }
            >
              CONFIRM
            </Button>
            <Button btnType="cancel" onClick={close}>
              CANCEL
            </Button>
          </ButtonsDiv>
        </>
      );
    }
    if (data.type === "delete_entire_goal") {
      return (
        <>
          <MessageDiv>
            Are you sure you want to delete this entire goal{" "}
            <span>{data.goalName} ?</span>
          </MessageDiv>
          <ButtonsDiv>
            <Button onClick={() => deleteEntireGoalFn(userId, data.goalId)}>
              CONFIRM
            </Button>
            <Button btnType="cancel" onClick={close}>
              CANCEL
            </Button>
          </ButtonsDiv>
        </>
      );
    } else {
      return (
        <>
          <MessageDiv>
            Are you sure you want to delete goal{" "}
            <span>{data.goal.goalName} ?</span>
            <ButtonsDiv>
              <Button
                onClick={() => deleteGoalFn(userId, data.goalId, data.goal._id)}
              >
                CONFIRM
              </Button>
              <Button btnType="cancel" onClick={close}>
                CANCEL
              </Button>
            </ButtonsDiv>
          </MessageDiv>
        </>
      );
    }
  };
  return <>{whatToRender()}</>;
}

const mapStateToProps = (state) => ({
  userId: state.authentication.user.id,
});

const mapDispatchToProps = (dispatch) => ({
  close: () => dispatch(closeModal()),
  deleteEntireGoal: (userId, goalId) =>
    dispatch(deleteEntireGoal(userId, goalId)),
  deleteGoal: (userId, goalId, subGoalId) =>
    dispatch(deleteGoal(userId, goalId, subGoalId)),
  deleteChild: (userId, goalId, SubGoalId, childId) =>
    dispatch(deleteChildGoal(userId, goalId, SubGoalId, childId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Message);
