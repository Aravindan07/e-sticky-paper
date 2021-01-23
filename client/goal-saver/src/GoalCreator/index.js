import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import { connect } from "react-redux";
import Arrow from "../images/arrow.svg";
import {
  GoalWrapper,
  InputWrapper,
  ExampleAndInputDiv,
  InputField,
  Example,
  ButtonDiv,
  ProceedButton,
} from "./styles";
import { AnimationDiv, H2 } from "../Homepage/styles";
import Header from "../components/Header";
import { addMainGoalName } from "../actions";

function GoalCreator({ userId, addMainGoalName }) {
  const initialState = {
    name: "",
  };

  const [{ name }, setState] = useState(initialState);

  const onClickHandler = () => {
    return addMainGoalName(userId, name);
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
        <AnimationDiv>
          <InputWrapper>
            <H2>Let's get started !</H2>
            <ExampleAndInputDiv>
              <InputField
                type="text"
                name="name"
                value={name}
                onChange={onChangeHandler}
                placeholder="Give it a title"
              />
              <Example>e.g: Learn React</Example>
            </ExampleAndInputDiv>
            <ButtonDiv>
              <ProceedButton onClick={onClickHandler}>
                Proceed
                <ReactSVG src={Arrow} />
              </ProceedButton>
            </ButtonDiv>
          </InputWrapper>
        </AnimationDiv>
      </GoalWrapper>
    </>
  );
}

const mapStateToProps = (state) => ({
  errorMessage: state.message.error,
  successMessage: state.message.success,
  userId: state.authentication.user.id,
});

const mapDispatchToProps = (dispatch) => ({
  addMainGoalName: (userId, goalName) =>
    dispatch(addMainGoalName(userId, goalName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GoalCreator);
