import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ReactSVG } from "react-svg";
import { openModal } from "../actions";
import Header from "../components/Header";
import { HeaderButton } from "../components/Header/styles";
import { NoGoalsWrapper } from "../components/Sidepane/styles";
import { Wrapper } from "../Goals/styles";
import { Button } from "../components/Modals/styles";
import TrashIcon from "../icons/trash.svg";
import EditIcon from "../icons/edit.svg";
import {
  NoteNameDiv,
  NoteName,
  UnderlineBorder,
  TopButtonWrapper,
  NotesOrganizer,
  ButtonWrap,
  NotesDivWrap,
} from "./styles";
import { AnimationDiv } from "../Homepage/styles";

function Notes({ userNotes, OpenModal, ...props }) {
  useEffect(() => {}, [userNotes]);
  const openModalType = (modalType, data = {}) => {
    return OpenModal(modalType, data);
  };

  const openNoteHandler = (Id) => {
    console.log("Clicked on Notes");
    return props.history.push(`notes/${Id}`);
  };

  return (
    <>
      <Wrapper>
        <Header />
        {userNotes && userNotes.length === 0 ? (
          <NoGoalsWrapper divType="notes">
            You don't have any Notes!
            <p>Create a new note now!</p>
            <HeaderButton
              btnPlace="sidepane"
              onClick={() => openModalType("create_note")}
            >
              Add a note
            </HeaderButton>
          </NoGoalsWrapper>
        ) : (
          <>
            <NoteNameDiv>
              <NoteName>
                Your Notes
                <UnderlineBorder />
              </NoteName>
            </NoteNameDiv>
            <ButtonWrap>
              <HeaderButton
                style={{ display: "block", margin: "auto" }}
                onClick={() => openModalType("create_note")}
              >
                New Note
              </HeaderButton>
            </ButtonWrap>
            <AnimationDiv>
              <TopButtonWrapper>
                <NotesOrganizer>
                  {userNotes &&
                    userNotes.map((note) => (
                      <NotesDivWrap key={note._id}>
                        <Button
                          btnType="showcase"
                          onClick={() => openNoteHandler(note._id)}
                        >
                          {note.NoteName}
                        </Button>
                        <ReactSVG
                          className="edit"
                          src={EditIcon}
                          onClick={() =>
                            openModalType("edit_note_name", {
                              type: "edit_note_name",
                              noteId: note._id,
                            })
                          }
                        />
                        <ReactSVG
                          src={TrashIcon}
                          onClick={() =>
                            openModalType("delete_note", {
                              type: "delete_note",
                              noteName: note.NoteName,
                              noteId: note._id,
                            })
                          }
                        />
                      </NotesDivWrap>
                    ))}
                </NotesOrganizer>
              </TopButtonWrapper>
            </AnimationDiv>
          </>
        )}
      </Wrapper>
    </>
  );
}

const mapStateToProps = (state) => ({
  userNotes: state.authentication.user.notes,
});

const mapDispatchToProps = (dispatch) => ({
  OpenModal: (modalType, data) => dispatch(openModal(modalType, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
