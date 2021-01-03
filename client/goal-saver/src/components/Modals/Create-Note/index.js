import React, { useState } from "react";
import { connect } from "react-redux";
import { closeModal, createNewNote } from "../../../actions";
import { P } from "../../../Homepage/styles";
import { InputModalWrap } from "../InputModal";
import { ButtonsDiv, Input } from "../styles";
import { Button } from "../Logout/styles";

function CreateNote({ close, userId, newNote }) {
  const [value, setValue] = useState("");

  const onChangeHandler = (event) => {
    event.stopPropagation();
    return setValue(event.target.value);
  };

  const createNoteHandler = () => {
    return newNote(userId, value);
  };

  return (
    <>
      <InputModalWrap>
        <P>Give a title to your note</P>
        <Input
          type="text"
          value={value}
          onChange={onChangeHandler}
          placeholder="Type a title ..."
        />
        <ButtonsDiv divType="input">
          <Button btnType="cancel" onClick={close}>
            Cancel
          </Button>
          <Button onClick={createNoteHandler}>CREATE</Button>
        </ButtonsDiv>
      </InputModalWrap>
    </>
  );
}

const mapStateToProps = (state) => ({
  userId: state.authentication.user.id,
});

const mapDispatchToProps = (dispatch) => ({
  close: () => dispatch(closeModal()),
  newNote: (userId, name) => dispatch(createNewNote(userId, name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateNote);
