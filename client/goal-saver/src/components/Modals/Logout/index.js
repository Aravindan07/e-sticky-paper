import React from "react";
import { connect } from "react-redux";
import { closeModal, logout } from "../../../actions";
import { P } from "../../../Homepage/styles";
import { ButtonsDiv } from "../../Modals/styles";
import { Button } from "../../Modals/styles";

function LogoutModal({ close, Logout }) {
  return (
    <>
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

const mapDispatchToProps = (dispatch) => ({
  close: () => dispatch(closeModal()),
  Logout: () => dispatch(logout()),
});

export default connect(null, mapDispatchToProps)(LogoutModal);
