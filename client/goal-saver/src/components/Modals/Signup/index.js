import React, { useState } from "react";
import { connect } from "react-redux";
import { closeModal, openModal, signUp } from "../../../actions";
import { Heading, Wrap, Input, ButtonsDiv, Button } from "../styles";
import Loader from "../../Loader";
import { P } from "../../../Homepage/styles";

function SignupModal({ signupUser, closeModal, OpenModal, isLoading }) {
  const initialState = {
    name: "",
    email: "",
    password: "",
  };

  const [{ name, email, password }, setState] = useState(initialState);

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setState((prevState) => ({ ...prevState, [name]: value }));
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
      <Heading divType="signup">Sign Up Now!</Heading>
      <P style={{ textAlign: "center" }}>
        Have an account ?{" "}
        <span
          style={{
            cursor: "pointer",
            color: "#496ddb",
            fontWeight: "600",
            textDecoration: "underline",
          }}
          onClick={() => signinClicked("signin")}
        >
          SIGNIN
        </span>{" "}
        Now
      </P>
      <Wrap>
        <Input
          type="text"
          name="name"
          value={name}
          onChange={onChangeHandler}
          placeholder="Enter your name"
          required
        />
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
