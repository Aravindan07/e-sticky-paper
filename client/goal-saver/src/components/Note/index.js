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
import { saveNote } from "../../actions";

function Note({ userId, userNotes, location, saveNoteAction, ...props }) {
  let noteIdToShow = location.pathname.split("/")[4];
  let newReturnedNote = userNotes.find((el) => {
    return el._id === noteIdToShow;
  });
  const [returnedNote, setReturnedNote] = useState(newReturnedNote);
  const [noteValue, setNoteValue] = useState(newReturnedNote.notes);
  useEffect(() => {
    console.log("Inside note effect");
    let noteIdToShow = location.pathname.split("/")[4];
    let newReturnedNote = userNotes.find((el) => {
      return el._id === noteIdToShow;
    });
    setReturnedNote(newReturnedNote);
  }, [noteIdToShow, location, returnedNote, noteValue]);

  const onChangeHandler = (event) => {
    setNoteValue(event.target.value);
  };

  const saveNoteHandler = () => {
    console.log(userId, returnedNote._id, noteValue);
    return saveNoteAction(userId, returnedNote._id, noteValue);
  };

  const openModalType = (modalType, data = {}) => {
    console.log(modalType, data);
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
        >
          {/* {noteValue} */}
        </TextArea>
        {/* {console.log("It got Re-rendered")} */}
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Note);
