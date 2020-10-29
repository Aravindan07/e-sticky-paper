import React, { useState } from "react";
import { connect } from "react-redux";
import { closeModal, signUp } from "../../../actions";
import { Heading, Wrap, Input, ButtonsDiv, Button } from "../styles";
import Loader from "../../Loader";
import { toast } from "react-toastify";

function SignupModal({
  signupUser,
  closeModal,
  isLoading,
  errorMessage,
  successMessage,
}) {
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

  return (
    <>
      {isLoading && <Loader />}
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
      <Heading>Sign Up Now!</Heading>
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
  closeModal: () => dispatch(closeModal()),
  signupUser: (name, email, password) =>
    dispatch(signUp(name, email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupModal);
