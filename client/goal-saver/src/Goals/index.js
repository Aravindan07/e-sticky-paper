import React from "react";
import Header from "../components/Header";
import { connect } from "react-redux";
import { Wrapper, InnerWrapper, GoalName } from "./styles";
import { openModal } from "../actions";
// import { Button } from "../components/Header/styles";

function Goals({ userGoals, Open }) {
  const openModalType = (modalType, data = {}) => {
    return Open(modalType, data);
  };
  return (
    <>
      <Header />
      <Wrapper>
        <InnerWrapper>
          <GoalName>
            {/* {userGoals[1].goalName}
            {userGoals[1].children} */}
            Working on it!
            <button onClick={() => openModalType("input")}>
              Add a sub-goal
            </button>
          </GoalName>
        </InnerWrapper>
      </Wrapper>
    </>
  );
}

const mapStateToProps = (state) => ({
  userGoals: state.authentication.user.goals,
});

const mapDispatchToProps = (dispatch) => ({
  Open: (modalType, data) => dispatch(openModal(modalType, data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Goals);
