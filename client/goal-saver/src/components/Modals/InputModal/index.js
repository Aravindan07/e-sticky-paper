import React, { useState } from "react";
import { connect } from "react-redux";
import { createGoal } from "../../../actions";
import { Button } from "../../Header/styles";
import { Input } from "../styles";

function InputModal({ userId, name, createGoal }) {
  const [subGoal, setSubGoal] = useState("");

  const onChangeHandler = (event) => {
    setSubGoal(event.target.value);
  };

  const createGoalMethod = () => {
    return createGoal(userId, name, subGoal);
  };
  return (
    <>
      Please Enter a SubGoal
      <Input
        type="text"
        value={subGoal}
        onChange={onChangeHandler}
        placeholder="Enter a sub-goal"
      />
      <Button onClick={createGoalMethod}>Add Goal</Button>
    </>
  );
}

const mapStateToProps = (state) => ({
  userId: state.authentication.user.id,
  name: state.authentication.user.goals[0].goalName,
});

const mapDispatchToProps = (dispatch) => ({
  createGoal: (userId, name, children) =>
    dispatch(createGoal(userId, name, children)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputModal);
