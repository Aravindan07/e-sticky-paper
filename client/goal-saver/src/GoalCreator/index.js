import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import { connect } from "react-redux";
import Arrow from "../images/arrow.svg";
import {
  GoalWrapper,
  InputWrapper,
  InputField,
  Example,
  ButtonDiv,
  ProceedButton,
} from "./styles";
import { H2 } from "../Homepage/styles";
import Header from "../components/Header";

function GoalCreator() {
  const initialState = {
    name: "",
  };
  const [step, setStep] = useState(1);
  const [{ name }, setState] = useState(initialState);

  const onClickHandler = () => {
    setStep(step + 1);
  };

  const onChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      <Header />
      <GoalWrapper>
        <InputWrapper>
          <H2 headingType="goal">Hmm, Let's get started !</H2>
          <InputField
            type="text"
            name="name"
            value={name}
            onChange={onChangeHandler}
            placeholder="Type your goal"
          />
        </InputWrapper>
        <Example>e.g: To become a software developer</Example>
        <ButtonDiv>
          <ProceedButton onClick={onClickHandler}>
            <ReactSVG src={Arrow} />
          </ProceedButton>
        </ButtonDiv>
      </GoalWrapper>
    </>
  );
}

const mapStateToProps = (state) => ({
  errorMessage: state.message.error,
  successMessage: state.message.success,
});

export default connect(mapStateToProps, null)(GoalCreator);
