import React, { useState } from "react";
import { connect } from "react-redux";
import { closeModal, createChildGoal, createGoal } from "../../../actions";
import { HeaderButton } from "../../Header/styles";
import { ButtonsDiv } from "../styles";
import { Input } from "../styles";
import { P } from "../../../Homepage/styles";
import styled from "styled-components";

const InputModalWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function InputModal({
  userId,
  createGoal,
  closeModal,
  user,
  data,
  createChildGoal,
}) {
  console.log(data);
  const [goal, setGoal] = useState("");

  const onChangeHandler = (event) => {
    setGoal(event.target.value);
  };

  const createGoalMethod = () => {
    if (data.type === "subGoalInput") {
      //userId,goalName,goalId
      return createGoal(userId, goal, data.goalId);
    }
    console.log(userId, data.goalId, data.goal._id, goal);
    return createChildGoal(userId, data.goalId, data.goal._id, goal);
  };
  return (
    <InputModalWrap>
      <P>
        {data.type === "subGoalInput"
          ? "Please Enter a Sub-Goal"
          : "Please Enter a Child Goal"}
      </P>
      <Input
        type="text"
        value={goal}
        onChange={onChangeHandler}
        placeholder={
          data.type === "subGoalInput"
            ? "Enter a sub-goal"
            : "Enter a child goal"
        }
      />
      <ButtonsDiv divType="input">
        <span onClick={closeModal}>CANCEL</span>
        <HeaderButton onClick={createGoalMethod}>Add Goal</HeaderButton>
      </ButtonsDiv>
    </InputModalWrap>
  );
}

const mapStateToProps = (state) => ({
  userId: state.authentication.user.id,
  user: state.authentication.user,
});

const mapDispatchToProps = (dispatch) => ({
  createGoal: (userId, name, goalId) =>
    dispatch(createGoal(userId, name, goalId)),
  createChildGoal: (userId, goalId, subGoalId, child) =>
    dispatch(createChildGoal(userId, goalId, subGoalId, child)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputModal);
