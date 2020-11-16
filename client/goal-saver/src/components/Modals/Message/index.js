import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { closeModal, deleteChildGoal, deleteGoal } from "../../../actions";
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
function Message({ close, deleteGoal, deleteChild, userId, data }) {
  const deleteGoalFn = (userId, goalId) => {
    return deleteGoal(userId, goalId);
  };

  const deleteChildFn = (userId, goalId, SubGoalId, childId) => {
    return deleteChild(userId, goalId, SubGoalId, childId);
  };
  return (
    <>
      {data.type === "delete_child" ? (
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
      ) : (
        <>
          <MessageDiv>
            Are you sure you want to delete goal <span>{data.goalName} ?</span>
            <ButtonsDiv>
              <Button onClick={() => deleteGoalFn(userId, data._id)}>
                CONFIRM
              </Button>
              <Button btnType="cancel" onClick={close}>
                CANCEL
              </Button>
            </ButtonsDiv>
          </MessageDiv>
        </>
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  userId: state.authentication.user.id,
});

const mapDispatchToProps = (dispatch) => ({
  close: () => dispatch(closeModal()),
  deleteGoal: (userId, goalId) => dispatch(deleteGoal(userId, goalId)),
  deleteChild: (userId, goalId, SubGoalId, childId) =>
    dispatch(deleteChildGoal(userId, goalId, SubGoalId, childId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Message);
