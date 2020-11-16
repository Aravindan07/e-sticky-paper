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

function Header({ Open, isAuthenticated, userName }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  let history = useHistory();
  const OpenModalType = (modalType, data = {}) => {
    return Open(modalType, data);
  };

  const clickHandler = () => {
    return history.push("/");
  };

  return (
    <>
      <InnerWrap>
        <LogoDiv onClick={() => clickHandler()}>
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
                    <Content onClick={clickHandler}>Home</Content>
                    <Content>Create Goal</Content>
                    <Content>My Goals</Content>
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
});

const mapDispatchToProps = (dispatch) => ({
  Open: (modalType, data) => dispatch(openModal(modalType, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
