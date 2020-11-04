import React from "react";
import { Button } from "../../Header/styles";
import { Input } from "../styles";

function InputModal() {
  return (
    <>
      Please Enter a SubGoal
      <Input type="text" placeholder="Enter a sub-goal" />
      <Button>Add Goal</Button>
    </>
  );
}

export default InputModal;
