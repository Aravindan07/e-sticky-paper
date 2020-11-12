import React from "react";
import Header from "../components/Header";
import { connect } from "react-redux";
import { ReactSVG } from "react-svg";
import AddIcon from "../icons/add-icon.svg";
import DeleteIcon from "../icons/delete-icon.svg";
import DeleteIcon2 from "../icons/delete-icon2.svg";
import TrashIcon from "../icons/trash.svg";
import CompleteIcon from "../icons/completed-icon.svg";
import { Button } from "../components/Modals/styles";
import { HeaderButton } from "../components/Header/styles";
import {
  Wrapper,
  SubButtonDiv,
  InnerWrapper,
  GoalWrapper,
  GoalName,
  Children,
  IconsDiv,
} from "./styles";
import { closeModal, openModal } from "../actions";
// import { Button } from "../components/Header/styles";

function Goals({ userGoals, Open }) {
  const openModalType = (modalType, data = {}) => {
    return Open(modalType, data);
  };
  return (
    <>
      <Header />
      <Wrapper>
        <SubButtonDiv>
          <Button onClick={() => openModalType("input", "subGoalInput")}>
            Add a Sub-Goal
          </Button>
          <HeaderButton>Create a Fresh Goal</HeaderButton>
        </SubButtonDiv>
        <InnerWrapper>
          {userGoals.map((goal) => {
            return (
              <GoalWrapper key={goal._id}>
                <GoalName>
                  {goal.goalName}
                  <IconsDiv divType="heading">
                    <ReactSVG
                      src={AddIcon}
                      onClick={() => openModalType("input", goal)}
                    />
                    <ReactSVG
                      src={TrashIcon}
                      onClick={() => openModalType("message", goal)}
                    />
                  </IconsDiv>
                </GoalName>
                {goal.children.map((child) => (
                  <Children key={child}>
                    {child}
                    <IconsDiv>
                      <ReactSVG
                        src={DeleteIcon2}
                        onClick={() =>
                          openModalType("delete_child", {
                            type: "delete_child",
                            _id: goal._id,
                            child: child,
                            name: goal.goalName,
                          })
                        }
                      />
                      <ReactSVG src={CompleteIcon} />
                    </IconsDiv>
                  </Children>
                ))}
              </GoalWrapper>
            );
          })}
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
