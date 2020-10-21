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

function Header({ OpenModal }) {
  return (
    <>
      <InnerWrap>
        <LogoDiv>
          <ReactSVG src={GoalLogo} />
          sticky-goals
        </LogoDiv>
        <AccountWrap>
          <SignInSignUpWrap>
            <Button>Sign In</Button>
            {/* <ReactSVG src={AccountIcon} /> */}
          </SignInSignUpWrap>
          <SignInSignUpWrap>
            <Button onClick={OpenModal}>Register</Button>
            {/* <ReactSVG src={AccountIcon} /> */}
          </SignInSignUpWrap>
        </AccountWrap>
      </InnerWrap>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  OpenModal: () => dispatch(openModal()),
});

export default connect(null, mapDispatchToProps)(Header);
