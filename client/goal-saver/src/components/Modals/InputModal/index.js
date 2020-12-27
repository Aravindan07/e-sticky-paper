import React, { useState } from "react";
import { connect } from "react-redux";
import {
  closeModal,
  createChildGoal,
  createGoal,
  editNoteName,
} from "../../../actions";
import { HeaderButton } from "../../Header/styles";
import { ButtonsDiv } from "../styles";
import { Input } from "../styles";
import { P } from "../../../Homepage/styles";
import styled from "styled-components";

export const InputModalWrap = styled.div`
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
  EditNoteName,
}) {
  console.log(data);
  const [goal, setGoal] = useState("");
  const [changedName, setChangedName] = useState(data.noteName);

  const onChangeHandler = (event) => {
    setGoal(event.target.value);
  };

  const onNoteChangeHandler = (event) => {
    setChangedName(event.target.value);
  };

  const createGoalMethod = () => {
    if (data.type === "subGoalInput") {
      return createGoal(userId, goal, data.goalId);
    }
    console.log(userId, data.goalId, data.goal._id, goal);
    return createChildGoal(userId, data.goalId, data.goal._id, goal);
  };

  const editNameHandler = () => {
    //userId,noteId,newName
    console.log(userId, data.noteId, changedName);
    return EditNoteName(userId, data.noteId, changedName);
  };

  const basedOnType = () => {
    if (data.type === "subGoalInput") {
      return "Please Enter a Sub-Goal";
    }
    if (data.type === "edit_note_name") {
      return "Enter a New Name";
    }
    return "Please Enter a Child Goal";
  };
  const placeholderText = () => {
    if (data.type === "subGoalInput") {
      return "Enter a sub-goal";
    }
    if (data.type === "edit_note_name") {
      return "Edit note name";
    }
    return "Enter a child Goal";
  };
  return (
    <InputModalWrap>
      <P>{basedOnType()}</P>
      {data.type === "edit_note_name" ? (
        <Input
          type="text"
          value={changedName}
          onChange={onNoteChangeHandler}
          placeholder={placeholderText()}
        />
      ) : (
        <Input
          type="text"
          value={goal}
          onChange={onChangeHandler}
          placeholder={placeholderText()}
        />
      )}
      <ButtonsDiv divType="input">
        <span onClick={closeModal}>CANCEL</span>
        {data.type === "edit_note_name" ? (
          <HeaderButton onClick={editNameHandler}>Edit Name</HeaderButton>
        ) : (
          <HeaderButton onClick={createGoalMethod}>Add Goal</HeaderButton>
        )}
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
  EditNoteName: (userId, noteId, noteName) =>
    dispatch(editNoteName(userId, noteId, noteName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputModal);
