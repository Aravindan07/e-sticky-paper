import styled from "styled-components";

export const GoalWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f9dc5c;
`;

export const InputWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ExampleAndInputDiv = styled.div`
  display: block;
`;

export const InputField = styled.input`
  width: 400px;
  height: 50px;
  outline: none;
  border: none;
  /* border-bottom: 2px solid #16a59c; */
  /* border-radius: 5px; */
  font-size: 18px;
  font-weight: 600;
  padding: 10px;
  color: #2a6049;
  background: #f5f5f5;
  margin: 15px 0px 10px 0px;
  &:focus,
  :active {
    border-bottom: 2px solid #16a59c;
  }
`;

export const Example = styled.p`
  color: #011936;
  margin: 0px 0px 50px 0px;
`;

export const ButtonDiv = styled.div`
  width: 375px;
  height: fit-content;
  display: flex;
  justify-content: flex-end;
`;

export const ProceedButton = styled.button`
  outline: none;
  border: none;
  border-radius: 100%;
  padding: 5px 8px;
  background: #496ddb;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    transform: scale(1.01);
  }
  svg {
    width: 30px;
    height: 28px;
    color: #ffffff;
    margin: 10px 5px 5px 6px;
  }
`;
