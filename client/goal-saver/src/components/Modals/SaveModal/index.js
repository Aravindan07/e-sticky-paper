import React from "react";
import { connect } from "react-redux";
import { closeModal } from "../../../actions";
import { P } from "../../../Homepage/styles";
import { Button, ButtonsDiv } from "../styles";

function saveModal({ close }) {
  return (
    <>
      <P>
        Are you sure you want to save the current goal and create a fresh goal ?
      </P>
      <ButtonsDiv>
        <Button btnType="cancel" onClick={close}>
          CANCEL
        </Button>
        <Button>Yeah,SURE</Button>
      </ButtonsDiv>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  close: () => dispatch(closeModal()),
});

export default connect(null, mapDispatchToProps)(saveModal);
