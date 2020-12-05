import React from "react";
import { connect } from "react-redux";
import { openModal } from "../actions";
import { HeaderButton } from "../components/Header/styles";
import SidePane from "../components/Sidepane";
import { NoGoalsWrapper } from "../components/Sidepane/styles";
import { Wrapper } from "../Goals/styles";
import {
  OuterWrapper,
  NoteNameDiv,
  NoteName,
  UnderlineBorder,
  TopButtonWrapper,
  TextArea,
} from "./styles";

function Notes({ userNotes, OpenModal }) {
  const openModalType = (modalType, data = {}) => {
    return OpenModal(modalType, data);
  };
  return (
    <>
      <SidePane />
      <OuterWrapper>
        <Wrapper divType="sidepane">
          {userNotes && userNotes.length === 0 ? (
            <NoGoalsWrapper divType="notes">
              You don't have any Notes!
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
                  New Note
                  <UnderlineBorder />
                </NoteName>
              </NoteNameDiv>
              <TopButtonWrapper>
                <HeaderButton onClick={() => openModalType("create_note")}>
                  New Note
                </HeaderButton>
                <HeaderButton>Save Note</HeaderButton>
              </TopButtonWrapper>
              <TextArea
                name="notes"
                id="notes"
                cols="30"
                rows="10"
                placeholder="Type your text here..."
              ></TextArea>
            </>
          )}
        </Wrapper>
      </OuterWrapper>
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
