import { CREATE_GOAL } from "../constants";

const initialState = {
  goalName: "",
  children: "",
};

const createGoalReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_GOAL:
      return {
        ...state,
        goalName: action.goalName,
        children: action.children,
      };
    default:
      return state;
  }
};

export default createGoalReducer;
