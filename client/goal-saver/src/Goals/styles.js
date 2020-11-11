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
  max-width: 70%;
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
  font-weight: 600;
  display: flex;
  align-items: center;
  width: 214px;
  word-wrap: break-word;
  svg {
    margin-left: 10px;
    /* margin-top: 5px; */
    cursor: pointer;
    color: #011936;
    :hover {
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
      transform: scale(1.01);
    }
  }
`;

export const Children = styled.div`
  display: block;
  margin-left: 20px;
  margin: 4px 0px 4px 20px;
`;

export const ButtonCenterDiv = styled.div`
  margin: auto;
  text-align: center;
`;
