import React, { useState, useEffect } from "react";
import Sidepane from "../Sidepane";
import { Wrapper } from "../../Goals/styles";
import {
  NoteName,
  NoteNameDiv,
  TextArea,
  TopButtonWrapper,
  UnderlineBorder,
} from "../../Notes/styles";
import { HeaderButton } from "../Header/styles";
import { connect } from "react-redux";
import { openModal, saveNote } from "../../actions";

function Note({
  userId,
  userNotes,
  location,
  saveNoteAction,
  OpenModal,
  ...props
}) {
  const [returnedNote, setReturnedNote] = useState("");
  const [noteValue, setNoteValue] = useState("");

  useEffect(() => {
    let noteIdToShow = location.pathname.split("/")[4];
    let newReturnedNote = userNotes.find((el) => {
      return el._id === noteIdToShow;
    });
    setNoteValue(newReturnedNote.notes);
    setReturnedNote(newReturnedNote);
  }, [location, userNotes]);

  const onChangeHandler = (event) => {
    setNoteValue(event.target.value);
  };

  const saveNoteHandler = () => {
    console.log(userId, returnedNote._id, noteValue);
    return saveNoteAction(userId, returnedNote._id, noteValue);
  };

  const openModalType = (modalType, data = {}) => {
    return OpenModal(modalType, data);
  };

  const homeClickHandler = () => {
    return props.history.push(`/user/${userId}/notes`);
  };
  return (
    <>
      <Sidepane />
      <Wrapper divType="sidepane">
        <NoteNameDiv>
          <NoteName>
            {returnedNote && returnedNote.NoteName && (
              <>{returnedNote.NoteName}</>
            )}
            <UnderlineBorder />
          </NoteName>
        </NoteNameDiv>
        <TopButtonWrapper>
          <HeaderButton
            btnType="note"
            onClick={() => openModalType("create_note")}
          >
            New Note
          </HeaderButton>
          <HeaderButton btnType="note" onClick={saveNoteHandler}>
            Save Note
          </HeaderButton>
          <HeaderButton btnType="note" onClick={homeClickHandler}>
            Home Notes
          </HeaderButton>
        </TopButtonWrapper>
        <TextArea
          name="notes"
          id="notes"
          cols="30"
          rows="10"
          value={noteValue}
          onChange={onChangeHandler}
          placeholder="Type your text here..."
        ></TextArea>
      </Wrapper>
    </>
  );
}

const mapStateToProps = (state) => ({
  userNotes: state.authentication.user.notes,
  userId: state.authentication.user.id,
  location: state.router.location,
});

const mapDispatchToProps = (dispatch) => ({
  saveNoteAction: (userId, noteId, newNote) =>
    dispatch(saveNote(userId, noteId, newNote)),
  OpenModal: (modalType, data) => dispatch(openModal(modalType, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Note);
