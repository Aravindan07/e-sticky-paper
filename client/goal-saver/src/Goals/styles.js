import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  width: ${(props) => (props.divType === "sidepane" ? "80%" : "100%")};
  /* background: #f9dc5c; */
  background: #fcd34d;
  position: ${(props) => (props.divType === "sidepane" ? "fixed" : "fixed")};
  left: ${(props) => (props.divType === "sidepane" ? "20%" : "0px")};
`;

export const SubButtonDiv = styled.div`
  text-align: center;
  margin: 10px 0px 30px 0px;
  display: flex;
  justify-content: space-evenly;
`;

export const InnerWrapper = styled.div`
  max-width: 90%;
  max-height: 70%;
  margin: 15px auto 25px auto;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  overflow-y: auto;
  padding: 10px;
  color: #011936;
  &::-webkit-scrollbar {
    width: 10px;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 15px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(108, 122, 137, 1);
    border-radius: 15px;
  }
`;

export const GoalWrapper = styled.div`
  display: ${(props) => (props.pageType === "single-goal" ? "block" : "flex")};
  align-items: center;
  margin: 20px 15px;
  background-color: #f9dc5c;
  padding: 1rem;
  border-radius: 10px;
  svg {
    margin-left: 20px;
    cursor: pointer;
    color: #ba181b;
    :hover {
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
      transform: scale(1.1);
    }
  }
`;

export const GoalName = styled.div`
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  width: 214px;
  word-wrap: break-word;
  svg {
    margin-left: 10px;
    width: 25px;
    height: 25px;
    cursor: pointer;
    color: #ba181b;
    :hover {
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
      transform: scale(1.1);
    }
  }
  .addIcon {
    svg {
      color: #011936;
      margin-left: 10px;
    }
  }
`;

export const Children = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 214px;
  min-height: 25px;
  margin: 10px 0px 10px 20px;
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  svg {
    color: #007745;
  }
  .deleteChild {
    svg {
      color: #ba181b;
    }
  }
`;

export const ChildName = styled.div`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0.8px;
  text-transform: capitalize;
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  text-decoration-style: double;
`;

export const IconsDiv = styled.div`
  width: auto;
  display: flex;
  justify-content: space-between;
  margin-left: ${(props) => (props.divType === "heading" ? "20px" : "0px")};
  svg {
    cursor: pointer;
    margin-left: 5px;
    :hover {
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
      transform: scale(1.1);
    }
  }
`;

export const ButtonCenterDiv = styled.div`
  margin: auto;
  text-align: center;
`;

export const ShowCaseButton = styled.button`
  /* background: #047857; */
  background-color: #7f1d1d;
  min-width: ${(props) => (props.btnType === "showcase" ? "200px" : "unset")};
  width: 100%;
  padding: 5px 15px;
  color: #ffffff;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 36px;
  letter-spacing: 1px;
  border: none;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    /* transform: scale(1.02); */
  }
`;
