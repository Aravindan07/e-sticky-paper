import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { ReactSVG } from "react-svg";
import GoalLogo from "../../icons/goal-logo.svg";
import MenuIcon from "../../icons/menu-icon.svg";
import SidePaneClose from "../../icons/close-sidepane.svg";
import CloseDropDown from "../../icons/dropdown-close.svg";
import { LogoDiv, HeaderButton } from "../Header/styles";
import {
  Wrapper,
  SidePaneCloseDiv,
  HeaderDiv,
  Dropdown,
  DropdownContent,
  Content,
  NoGoalsWrapper,
} from "./styles";
import { connect } from "react-redux";
import { openModal } from "../../actions";

function SidePane({ OpenModal, userId, userNotes, ...props }) {
  const [show, setShow] = useState(false);

  const clickHandler = (type) => {
    if (type === "home") {
      return props.history.push("/");
    }
    if (type === "my-goals") {
      return props.history.push(`/user/${userId}/goals`);
    }
  };

  const showHandler = (event) => {
    event.stopPropagation();
    return setShow(!show);
  };

  const closeDropDownFn = () => {
    return setShow(false);
  };

  const OpenModalType = (modalType, data = {}) => {
    return OpenModal(modalType, data);
  };

  return (
    <Wrapper onClick={closeDropDownFn}>
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
            <Content onClick={() => clickHandler("my-goals")}>My Goals</Content>
            <Content onClick={() => OpenModalType("logout")}>Logout</Content>
          </DropdownContent>
        </Dropdown>
      </HeaderDiv>
      {userNotes.length === 0 ? (
        <NoGoalsWrapper>
          You Don't have any notes!
          <HeaderButton btnPlace="sidepane">Add a Note</HeaderButton>
        </NoGoalsWrapper>
      ) : (
        <>Click on a note to view it!</>
      )}
    </Wrapper>
  );
}

const mapStateToProps = (state) => ({
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
