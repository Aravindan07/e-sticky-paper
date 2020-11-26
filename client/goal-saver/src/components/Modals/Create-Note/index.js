import React, { useState } from "react";
import { connect } from "react-redux";
import { closeModal } from "../../../actions";
import { P } from "../../../Homepage/styles";
import { InputModalWrap } from "../InputModal";
import { Button, ButtonsDiv, Input } from "../styles";

function CreateNote({ close }) {
  const [value, setValue] = useState("");

  const onChangeHandler = (event) => {
    event.stopPropagation();
    return setValue(event.target.value);
  };

  return (
    <>
      <InputModalWrap>
        <P>Give a title to your note</P>
        <Input
          type="text"
          value={value}
          onChange={onChangeHandler}
          placeholder="Type a title ..."
        />
        <ButtonsDiv divType="input">
          <Button btnType="cancel" onClick={close}>
            Cancel
          </Button>
          <Button>CREATE</Button>
        </ButtonsDiv>
      </InputModalWrap>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  close: () => dispatch(closeModal()),
});

export default connect(null, mapDispatchToProps)(CreateNote);
