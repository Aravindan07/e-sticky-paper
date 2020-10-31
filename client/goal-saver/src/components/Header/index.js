import React from "react";
import { ReactSVG } from "react-svg";
import { connect } from "react-redux";
import GoalLogo from "../../icons/goal-logo.svg";
import {
  InnerWrap,
  LogoDiv,
  AccountWrap,
  AccountName,
  SignInSignUpWrap,
  Button,
} from "./styles";
import { openModal } from "../../actions";
import AccountIcon from "../../icons/account.svg";
import { push } from "connected-react-router";
import { useHistory } from "react-router-dom";
// import

function Header({ Open, isAuthenticated, userName, ...props }) {
  let history = useHistory();
  console.log(props);
  const OpenModalType = (modalType, data = {}) => {
    return Open(modalType, data);
  };

  const clickHandler = () => {
    console.log("Inside header logo");
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
            <AccountName style={{ color: "#ffffff" }}>
              Welcome <span>{userName}</span>
              <ReactSVG src={AccountIcon} />
            </AccountName>
          )}
          {isAuthenticated ? (
            <SignInSignUpWrap>
              <Button onClick={() => OpenModalType("logout")}>Logout</Button>
            </SignInSignUpWrap>
          ) : (
            <>
              <SignInSignUpWrap>
                <Button onClick={() => OpenModalType("signin")}>Sign In</Button>
                {/* <ReactSVG src={AccountIcon} /> */}
              </SignInSignUpWrap>
              <SignInSignUpWrap>
                <Button onClick={() => OpenModalType("signup")}>
                  Register
                </Button>
                {/* <ReactSVG src={AccountIcon} /> */}
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
