import React from "react";
import { connect } from "react-redux";
import { HeaderButton } from "../components/Header/styles";
import SidePane from "../components/Sidepane";
import { NoGoalsWrapper } from "../components/Sidepane/styles";
import { Wrapper } from "../Goals/styles";
import { OuterWrapper } from "./styles";

function Notes({ userNotes }) {
  return (
    <>
      <SidePane />
      <OuterWrapper>
        <Wrapper divType="sidepane">
          {userNotes.length === 0 ? (
            <NoGoalsWrapper divType="notes">
              You don't have any Notes!
              <HeaderButton btnPlace="sidepane">Add a note</HeaderButton>
            </NoGoalsWrapper>
          ) : (
            <>Click on a note to view and edit it</>
          )}
        </Wrapper>
      </OuterWrapper>
    </>
  );
}

const mapStateToProps = (state) => ({
  userNotes: state.authentication.user.notes,
});

export default connect(mapStateToProps, null)(Notes);
