import React, { useState } from "react";
import { connect } from "react-redux";
import { ReactSVG } from "react-svg";
import { closeModal, openModal, signIn } from "../../../actions";
import CloseModalIcon from "../../../icons/dropdown-close.svg";
import {
  Heading,
  Wrap,
  Input,
  ButtonsDiv,
  Button,
  InputWrap,
  Label,
  Form,
  ElseDiv,
  CloseModalDiv,
} from "../styles";

function SigninModal({ signinUser, closeModal, OpenModal }) {
  const initialState = {
    email: "",
    password: "",
  };

  const initialActive = {
    isEmailActive: false,
    isPasswordActive: false,
  };

  const [{ email, password }, setState] = useState(initialState);
  const [{ isEmailActive, isPasswordActive }, setIsActive] = useState(
    initialActive
  );

  const onChangeHandler = (event, sentName) => {
    const name = event.target.name;
    const value = event.target.value;
    const labelName = sentName;
    setState((prevState) => ({ ...prevState, [name]: value }));
    if (value !== "") {
      return setIsActive((prevState) => ({ ...prevState, [labelName]: true }));
    } else {
      return setIsActive((prevState) => ({ ...prevState, [labelName]: false }));
    }
  };

  const onSubmitHandler = () => {
    signinUser(email, password);
  };

  const registerClicked = (modalType, data = {}) => {
    closeModal();
    return OpenModal(modalType, data);
  };

  return (
    <>
      <Heading>Sign In</Heading>
      <CloseModalDiv>
        <ReactSVG src={CloseModalIcon} onClick={closeModal} />
      </CloseModalDiv>
      <Wrap>
        <Form>
          <InputWrap>
            <Label htmlFor="email" active={isEmailActive}>
              Email
            </Label>
            <Input
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={(e) => onChangeHandler(e, "isEmailActive")}
              required
            />
          </InputWrap>
          <InputWrap>
            <Label htmlFor="password" active={isPasswordActive}>
              Password
            </Label>
            <Input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => onChangeHandler(e, "isPasswordActive")}
              required
            />
          </InputWrap>
        </Form>
        <ButtonsDiv>
          <Button onClick={onSubmitHandler}>Sign in</Button>
        </ButtonsDiv>
        <ElseDiv>
          New here?{" "}
          <span onClick={() => registerClicked("signup")}>Sign up</span>
        </ElseDiv>
      </Wrap>
    </>
  );
}

const mapStateToProps = (state) => ({
  errorMessage: state.message.error,
  successMessage: state.message.success,
});

const mapDispatchToProps = (dispatch) => ({
  OpenModal: (modalType, data) => dispatch(openModal(modalType, data)),
  closeModal: () => dispatch(closeModal()),
  signinUser: (email, password) => dispatch(signIn(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SigninModal);
