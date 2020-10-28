import React from "react";
import { ReactSVG } from "react-svg";
import { connect } from "react-redux";
import AccountIcon from "../../icons/account.svg";
import GoalLogo from "../../icons/goal-logo.svg";
import {
  InnerWrap,
  LogoDiv,
  AccountWrap,
  SignInSignUpWrap,
  Button,
} from "./styles";
import { openModal, logout } from "../../actions";

function Header({ Open, Logout }) {
  const OpenModalType = (modalType, data = {}) => {
    console.log(modalType, data);
    return Open(modalType, data);
  };
  return (
    <>
      <InnerWrap>
        <LogoDiv>
          <ReactSVG src={GoalLogo} />
          sticky-goals
        </LogoDiv>
        <AccountWrap>
          <SignInSignUpWrap>
            <SignInSignUpWrap>
              <Button onClick={() => OpenModalType("logout")}>Logout</Button>
              {/* <ReactSVG src={AccountIcon} /> */}
            </SignInSignUpWrap>
            <Button onClick={() => OpenModalType("signin")}>Sign In</Button>
            {/* <ReactSVG src={AccountIcon} /> */}
          </SignInSignUpWrap>
          <SignInSignUpWrap>
            <Button onClick={() => OpenModalType("signup")}>Register</Button>
            {/* <ReactSVG src={AccountIcon} /> */}
          </SignInSignUpWrap>
        </AccountWrap>
      </InnerWrap>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  Open: (modalType, data) => dispatch(openModal(modalType, data)),
  Logout: () => dispatch(logout()),
});

export default connect(null, mapDispatchToProps)(Header);
