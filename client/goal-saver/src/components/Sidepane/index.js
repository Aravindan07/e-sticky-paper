import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { ReactSVG } from "react-svg";
import GoalLogo from "../../icons/goal-logo.svg";
import MenuIcon from "../../icons/menu-icon.svg";
import SidePaneClose from "../../icons/close-sidepane.svg";
import CloseDropDown from "../../icons/dropdown-close.svg";
import NotesIcon from "../../icons/notes.svg";
import DeleteIcon from "../../icons/trash.svg";
import EditIcon from "../../icons/edit.svg";
import { LogoDiv, HeaderButton } from "../Header/styles";
import {
  SidepaneWrapper,
  SidePaneCloseDiv,
  HeaderDiv,
  Dropdown,
  DropdownContent,
  Content,
  NoGoalsWrapper,
  Desc,
  NotesWrapper,
  IndividualNotes,
  Organizer,
  Organizer1,
} from "./styles";
import { connect } from "react-redux";
import { openModal } from "../../actions";

function SidePane({ OpenModal, userId, userNotes, isOpen, ...props }) {
  const [show, setShow] = useState(false);

  useEffect(() => {}, [userNotes]);

  const OpenModalType = (modalType, data = {}) => {
    return OpenModal(modalType, data);
  };

  const clickHandler = (type) => {
    if (type === "home") {
      return props.history.push("/");
    }
    if (type === "my-goals") {
      return props.history.push(`/user/${userId}/goals`);
    }
    if (type === "new-note") {
      return OpenModalType("create_note");
    }
  };

  const showHandler = (event) => {
    event.stopPropagation();
    return setShow(!show);
  };

  const closeDropDownFn = () => {
    return setShow(false);
  };

  const openNoteHandler = (Id) => {
    return props.history.push(`/user/${userId}/notes/${Id}`);
  };

  return (
    <SidepaneWrapper onClick={closeDropDownFn}>
      <SidePaneCloseDiv>
        <ReactSVG src={SidePaneClose} />
      </SidePaneCloseDiv>
      <HeaderDiv>
        <LogoDiv onClick={() => clickHandler("home")} divType="sidepane">
          <ReactSVG src={GoalLogo} />
          sticky-goals
        </LogoDiv>
        <Dropdown>
          {show ? (
            <ReactSVG
              className="menu"
              src={CloseDropDown}
              onClick={(e) => showHandler(e)}
            />
          ) : (
            <ReactSVG
              className="menu"
              src={MenuIcon}
              onClick={(e) => showHandler(e)}
            />
          )}
          <DropdownContent isShow={show}>
            <Content onClick={() => clickHandler("home")}>Home</Content>
            <Content onClick={() => clickHandler("new-note")}>New Note</Content>
            <Content onClick={() => clickHandler("my-goals")}>My Goals</Content>
            <Content onClick={() => OpenModalType("logout")}>Logout</Content>
          </DropdownContent>
        </Dropdown>
      </HeaderDiv>
      {userNotes && userNotes.length === 0 && !isOpen ? (
        <NoGoalsWrapper>
          You Don't have any notes!
          <HeaderButton
            btnPlace="sidepane"
            onClick={() => OpenModalType("create_note")}
          >
            Add a Note
          </HeaderButton>
        </NoGoalsWrapper>
      ) : (
        !isOpen && (
          <>
            <Desc>Click on a note to view it!</Desc>
            <NotesWrapper>
              {userNotes &&
                userNotes.map((el) => (
                  <IndividualNotes key={el._id}>
                    <ReactSVG src={NotesIcon} />
                    <Organizer onClick={() => openNoteHandler(el._id)}>
                      {el.NoteName}
                    </Organizer>
                    <Organizer1>
                      <ReactSVG
                        src={DeleteIcon}
                        onClick={() =>
                          OpenModalType("delete_note", {
                            type: "delete_note",
                            noteName: el.NoteName,
                            noteId: el._id,
                          })
                        }
                      />
                      <ReactSVG
                        src={EditIcon}
                        onClick={() =>
                          OpenModalType("edit_note_name", {
                            type: "edit_note_name",
                            noteName: el.NoteName,
                            noteId: el._id,
                          })
                        }
                      />
                    </Organizer1>
                  </IndividualNotes>
                ))}
            </NotesWrapper>
          </>
        )
      )}
    </SidepaneWrapper>
  );
}

const mapStateToProps = (state) => ({
  isOpen: state.modal.isOpen,
  userId: state.authentication.user.id,
  userNotes: state.authentication.user.notes,
});

const mapDispatchToProps = (dispatch) => ({
  OpenModal: (modalType, data) => dispatch(openModal(modalType, data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SidePane));
