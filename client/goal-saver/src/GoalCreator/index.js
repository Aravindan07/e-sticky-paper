import React, { useState } from "react";
import { ReactSVG } from "react-svg";
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
import Slide from "react-reveal/Slide";

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
    <GoalWrapper>
      <InputWrapper>
        <H2 headingType="quote">Hmm, Let's get started !</H2>
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

    // <Slide right>
    //   <div>
    //     <h2>Welcome Folks to my app</h2>
    //   </div>
    // </Slide>
  );
}

export default GoalCreator;
