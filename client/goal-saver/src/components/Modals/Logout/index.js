import React from "react";
import { connect } from "react-redux";
import { closeModal, logout } from "../../../actions";
import { P } from "../../../Homepage/styles";
import { ButtonsDiv } from "../../Modals/styles";
import { Button } from "../../Modals/styles";
import { toast } from "react-toastify";

function LogoutModal({ close, Logout, errorMessage, successMessage }) {
  console.log("message");
  return (
    <>
      {successMessage &&
        toast.success(successMessage, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 4000,
          hideProgressBar: true,
        })}
      <P style={{ textAlign: "center" }} divType="logout">
        Are you sure you want to <span>logout?</span>
      </P>
      <ButtonsDiv divType="logout">
        <Button onClick={close} btnType="cancel">
          Cancel
        </Button>
        <Button onClick={Logout}>Yes,Logout</Button>
      </ButtonsDiv>
    </>
  );
}

const mapStateToProps = (state) => ({
  errorMessage: state.message.error,
  successMessage: state.message.success,
});

const mapDispatchToProps = (dispatch) => ({
  close: () => dispatch(closeModal()),
  Logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LogoutModal);
