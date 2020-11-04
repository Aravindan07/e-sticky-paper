import React from "react";
import Header from "../components/Header";
import { connect } from "react-redux";
import { Wrapper, InnerWrapper } from "./styles";

function Goals({ userGoals }) {
  return (
    <>
      <Header />
      <Wrapper>
        <InnerWrapper>{userGoals}</InnerWrapper>
      </Wrapper>
    </>
  );
}

const mapStateToProps = (state) => ({
  userGoals: state.authentication.user.goals,
});
export default connect(mapStateToProps, null)(Goals);
