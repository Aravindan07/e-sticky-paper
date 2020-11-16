import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background: #f9dc5c;
  position: fixed;
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
`;

export const GoalWrapper = styled.div`
  display: block;
  margin: 20px 15px;
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
