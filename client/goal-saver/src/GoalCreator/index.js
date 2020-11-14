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
import { H2 } from "../Homepage/styles";
import Header from "../components/Header";
import { createGoal } from "../actions";

function GoalCreator({ userId, createGoal, ...props }) {
  const initialState = {
    name: "",
  };
  const [{ name }, setState] = useState(initialState);

  const onClickHandler = () => {
    props.history.push("goals");
    return createGoal(userId, name, "");
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
          <H2>Let's get started !</H2>
          <ExampleAndInputDiv>
            <InputField
              type="text"
              name="name"
              value={name}
              onChange={onChangeHandler}
              placeholder="Type your main goal"
            />
            <Example>e.g: To learn react</Example>
          </ExampleAndInputDiv>
        </InputWrapper>
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
  userId: state.authentication.user.id,
});

const mapDispatchToProps = (dispatch) => ({
  createGoal: (userId, name, children) =>
    dispatch(createGoal(userId, name, children)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GoalCreator);
