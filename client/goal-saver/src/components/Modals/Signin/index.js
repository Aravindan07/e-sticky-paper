import React, { useState } from "react";
import { connect } from "react-redux";
import { closeModal, signIn } from "../../../actions";
import { Heading, Wrap, Input, ButtonsDiv, Button } from "../styles";
import { toast } from "react-toastify";

toast.configure();

function SigninModal({ signinUser, closeModal, errorMessage, successMessage }) {
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

  return (
    <>
      {errorMessage &&
        toast.error(errorMessage, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: false,
        })}
      {successMessage &&
        toast.success(successMessage, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 4000,
          hideProgressBar: true,
        })}
      <Heading>Sign In</Heading>
      <Wrap>
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
  errorMessage: state.message.error,
  successMessage: state.message.success,
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
  signinUser: (email, password) => dispatch(signIn(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SigninModal);
