import React from "react";
import { connect } from "react-redux";
import { closeModal, logout } from "../../../actions";
import { P } from "../../../Homepage/styles";
import { ButtonsDiv } from "../../Modals/styles";
// import { Button } from "../../Modals/styles";
import { Button } from "./styles";

function LogoutModal({ close, Logout }) {
  console.log("message");
  return (
    <>
      <P style={{ textAlign: "center", marginTop: "10px" }} divType="logout">
        Are you sure you want to <span>logout?</span>
      </P>
      <ButtonsDiv divType="logout">
        <Button onClick={Logout}>Yes,Logout</Button>
        <Button btnType="cancel" onClick={close}>
          Cancel
        </Button>
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
