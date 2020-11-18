import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import { connect } from "react-redux";
import GoalLogo from "../../icons/goal-logo.svg";
import {
  InnerWrap,
  LogoDiv,
  AccountWrap,
  AccountName,
  SignInSignUpWrap,
  HeaderButton,
  Dropdown,
  DropdownContent,
  Content,
} from "./styles";
import { openModal } from "../../actions";
import AccountIcon from "../../icons/account.svg";
import { push } from "connected-react-router";
import { useHistory } from "react-router-dom";

function Header({ Open, isAuthenticated, userName, userId }) {
  let history = useHistory();
  const OpenModalType = (modalType, data = {}) => {
    return Open(modalType, data);
  };

  const clickHandler = (type) => {
    if (type === "home") {
      return history.push("/");
    }
    if (type === "create-goal") {
      return history.push(`/user/${userId}/create-goal`);
    }
    if (type === "my-goals") {
      return history.push(`/user/${userId}/goals`);
    }
  };

  return (
    <>
      <InnerWrap>
        <LogoDiv onClick={() => clickHandler("home")}>
          <ReactSVG src={GoalLogo} />
          sticky-goals
        </LogoDiv>
        <AccountWrap>
          {userName && (
            <>
              <AccountName style={{ color: "#ffffff" }}>
                Welcome
                <Dropdown>
                  <span>{userName}</span>
                  <ReactSVG src={AccountIcon} />
                  <DropdownContent>
                    <Content onClick={() => clickHandler("home")}>Home</Content>
                    <Content onClick={() => clickHandler("create-goal")}>
                      Fresh Goal
                    </Content>
                    <Content onClick={() => clickHandler("my-goals")}>
                      My Goals
                    </Content>
                    <Content onClick={() => OpenModalType("logout")}>
                      Logout
                    </Content>
                  </DropdownContent>
                </Dropdown>
              </AccountName>
            </>
          )}
          {!isAuthenticated && (
            <>
              <SignInSignUpWrap>
                <HeaderButton onClick={() => OpenModalType("signin")}>
                  Sign In
                </HeaderButton>
              </SignInSignUpWrap>
              <SignInSignUpWrap>
                <HeaderButton onClick={() => OpenModalType("signup")}>
                  Register
                </HeaderButton>
              </SignInSignUpWrap>
            </>
          )}
        </AccountWrap>
      </InnerWrap>
    </>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.authentication.isAuthenticated,
  userName:
    state.authentication.isAuthenticated && state.authentication.user.name,
  userId: state.authentication.isAuthenticated && state.authentication.user.id,
});

const mapDispatchToProps = (dispatch) => ({
  Open: (modalType, data) => dispatch(openModal(modalType, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
