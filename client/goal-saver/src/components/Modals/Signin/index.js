import React, { useState } from "react";
import { connect } from "react-redux";
import { closeModal, openModal, signIn } from "../../../actions";
import { Heading, Wrap, Input, ButtonsDiv, Button } from "../styles";
import { P } from "../../../Homepage/styles";

function SigninModal({ signinUser, closeModal, OpenModal }) {
  const initialState = {
    email: "",
    password: "",
  };

  const [{ email, password }, setState] = useState(initialState);

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setState((prevState) => ({ ...prevState, [name]: value }));
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
      <Wrap divType="signin">
        <Input
          type="text"
          name="email"
          value={email}
          onChange={onChangeHandler}
          placeholder="Enter your email"
          required
        />
        <Input
          type="password"
          name="password"
          value={password}
          onChange={onChangeHandler}
          placeholder="Enter your password"
          required
        />
        <ButtonsDiv>
          <Button onClick={closeModal} btnType="cancel">
            Cancel
          </Button>
          <Button onClick={onSubmitHandler}>Submit</Button>
        </ButtonsDiv>
      </Wrap>
      <P style={{ textAlign: "center" }}>
        Don't have an account?{" "}
        <span
          style={{
            cursor: "pointer",
            color: "#496ddb",
            fontWeight: "600",
            textDecoration: "underline",
          }}
          onClick={() => registerClicked("signup")}
        >
          REGISTER
        </span>{" "}
        Now
      </P>
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
