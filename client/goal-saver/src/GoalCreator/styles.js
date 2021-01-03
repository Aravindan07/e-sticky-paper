import styled from "styled-components";

export const GoalWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f9dc5c;
`;

export const InputWrapper = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ExampleAndInputDiv = styled.div`
  display: block;
`;

export const InputField = styled.input`
  width: 100%;
  height: 50px;
  outline: none;
  border: 2px solid #d2d2d2;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 500;
  padding: 15px;
  background: #fff;
  margin: 15px 0px 10px 0px;
  &:focus,
  :active {
    border: 1px solid #818cf8;
  }
`;

export const Example = styled.p`
  color: #011936;
  font-size: 18px;
  margin: 0px 0px 50px 0px;
`;

export const ButtonDiv = styled.div`
  height: fit-content;
  display: flex;
  justify-content: flex-end;
`;

export const ProceedButton = styled.button`
  background: #3f40f0;
  outline: none;
  border: none;
  color: #f4fffd;
  border-radius: 5px;
  font-weight: 600;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 1.2px;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-top: ${(props) => (props.btnPlace === "sidepane" ? "15px" : "0px")};
  margin-right: ${(props) => (props.btnType === "note" ? "2rem" : "0rem")};
  :hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    transform: scale(1.03);
  }
  svg {
    width: 25px;
    height: 28px;
    color: #ffffff;
    margin: 10px 0px 0px 5px;
  }
`;
