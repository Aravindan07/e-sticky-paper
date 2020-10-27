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
import { openModal } from "../../actions";

function Header({ Open }) {
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
});

export default connect(null, mapDispatchToProps)(Header);
