import React, { useState } from "react";
import { connect } from "react-redux";
import { closeModal, openModal, signUp } from "../../../actions";
import { ReactSVG } from "react-svg";
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
import Loader from "../../Loader";
import { P } from "../../../Homepage/styles";

function SignupModal({ signupUser, closeModal, OpenModal, isLoading }) {
  const initialState = {
    name: "",
    email: "",
    password: "",
  };

  const initialActive = {
    isNameActive: false,
    isEmailActive: false,
    isPasswordActive: false,
  };

  const [{ name, email, password }, setState] = useState(initialState);
  const [
    { isNameActive, isEmailActive, isPasswordActive },
    setIsActive,
  ] = useState(initialActive);

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
    signupUser(name, email, password);
  };

  const signinClicked = (modalType, data = {}) => {
    closeModal();
    return OpenModal(modalType, data);
  };

  return (
    <>
      {isLoading && <Loader />}
      <Heading divType="signup">Sign up</Heading>
      <CloseModalDiv typeOfModal="signup">
        <ReactSVG src={CloseModalIcon} onClick={closeModal} />
      </CloseModalDiv>
      <Wrap>
        <Form>
          <InputWrap>
            <Label htmlFor="name" active={isNameActive}>
              Full Name
            </Label>
            <Input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => onChangeHandler(e, "isNameActive")}
              required
            />
          </InputWrap>
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
          {/* <Button onClick={closeModal} btnType="cancel">
            Cancel
          </Button> */}
          <Button onClick={onSubmitHandler}>Sign up</Button>
        </ButtonsDiv>
        <ElseDiv>
          Already using?{" "}
          <span onClick={() => signinClicked("signin")}>Sign in</span>
        </ElseDiv>
      </Wrap>
    </>
  );
}

const mapStateToProps = (state) => ({
  isLoading: state.authentication.isLoading,
  errorMessage: state.message.error,
  successMessage: state.message.success,
});

const mapDispatchToProps = (dispatch) => ({
  OpenModal: (modalType, data) => dispatch(openModal(modalType, data)),
  closeModal: () => dispatch(closeModal()),
  signupUser: (name, email, password) =>
    dispatch(signUp(name, email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupModal);
