import React, { useState, useEffect, memo } from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { clearError, closeModal, signUp } from "../../actions";
import { Heading, Wrap, Input, ButtonsDiv, Button } from "./styles";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { compose } from "redux";
import { useRef } from "react";

Modal.setAppElement("#root");
toast.configure();

function Modals({
  isOpen,
  signupUser,
  closeModal,
  errorMsg,
  successMsg,
  isAuthenticated,
}) {
  const initialState = {
    name: "",
    email: "",
    password: "",
  };

  const [{ name, email, password }, setState] = useState(initialState);
  const [errorMessage, setErrorMsg] = useState(null);
  const [successMessage, setSuccessMsg] = useState(null);
  const didMount = useRef(false);
  const errMessage = useRef(errorMsg);
  const SucMessage = useRef(successMsg);

  useEffect(() => {
    if (didMount.current) {
      if (errMessage.current !== errorMsg) {
        console.log("inside 2nd check");
        errMessage.current = errorMsg;
        setErrorMsg(errorMsg);
        toast.error(errorMessage, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: false,
        });
        return;
      }
      if (SucMessage.current !== successMsg) {
        console.log("Inside 3rd check");
        SucMessage.current = successMsg;
        setSuccessMsg(successMsg);
        toast.success(successMessage, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 4000,
          hideProgressBar: true,
        });
        return;
      }
      setErrorMsg(null);
      return setSuccessMsg(null);
    } else {
      didMount.current = true;
    }
  }, [errorMsg, successMsg, errorMessage, successMessage]);

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmitHandler = () => {
    signupUser(name, email, password);
  };

  const overlay = {
    backgroundColor: "rgba(0,0,0,0.8)",
  };
  const content = {
    width: "50%",
    height: "70%",
    margin: "auto",
    borderRadius: "10px",
    padding: "30px 20px 20px 20px",
  };
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={{
          overlay: overlay,
          content: content,
        }}
      >
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
      </Modal>
    </>
  );
}

const mapStateToProps = (state) => ({
  isOpen: state.modal.isOpen,
  errorMsg: state.message.error,
  successMsg: state.message.success,
  isAuthenticated: state.signup.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => ({
  signupUser: (name, email, password) =>
    dispatch(signUp(name, email, password)),
  closeModal: () => dispatch(closeModal()),
  clearErrors: () => dispatch(clearError()),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Modals);
