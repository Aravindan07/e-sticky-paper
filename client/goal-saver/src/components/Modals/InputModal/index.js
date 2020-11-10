import React, { useState } from "react";
import { connect } from "react-redux";
import { closeModal, createGoal } from "../../../actions";
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

function InputModal({ userId, createGoal, closeModal, user, data }) {
  const [goal, setGoal] = useState("");

  const onChangeHandler = (event) => {
    setGoal(event.target.value);
  };

  const createGoalMethod = () => {
    if (data === "subGoalInput") {
      return createGoal(userId, goal, "");
    }
    return createGoal(userId, data.goalName, goal);
  };
  return (
    <InputModalWrap>
      <P>
        {data === "subGoalInput"
          ? "Please Enter a Sub-Goal"
          : "Please Enter a Child Goal"}
      </P>
      <Input
        type="text"
        value={goal}
        onChange={onChangeHandler}
        placeholder={
          data === "subGoalInput" ? "Enter a sub-goal" : "Enter a child goal"
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
  createGoal: (userId, name, children) =>
    dispatch(createGoal(userId, name, children)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputModal);
