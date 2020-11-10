import styled from "styled-components";

export const Heading = styled.div`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 20px;
  color: #2a6049;
`;

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  width: 70%;
  height: 50px;
  margin: 15px 0px;
  outline: none;
  border: 2px solid #d2d2d2;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 600;
  padding: 10px;
  color: #2a6049;
  background: #f5f5f5;
  ::placeholder {
    font-weight: 500;
  }
  :focus,
  :active {
    background: #ffffff;
    border: 2px solid #aa3b64;
  }
`;

export const ButtonsDiv = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${setMargin};
  span {
    color: #aa3b64;
    font-weight: 600;
    font-size: 20px;
    line-height: 36px;
    letter-spacing: 0.6px;
    cursor: pointer;
    text-transform: uppercase;
    transform: scale(1.03);
  }
`;
function setMargin(props) {
  if (props.divType === "logout") {
    return "40px auto auto auto";
  }
  if (props.divType === "input") {
    return "0px 0px 0px 0px";
  } else {
    return "20px 0px 0px 0px";
  }
}
export const Button = styled.button`
  background: ${(props) =>
    props.btnType === "cancel" ? "#aa3b64" : "#0e7c65 "};
  padding: 5px 15px;
  color: #ffffff;
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
    transform: scale(1.03);
  }
`;
