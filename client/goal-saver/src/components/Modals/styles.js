import styled from "styled-components";

export const Heading = styled.div`
  font-size: 28px;
  font-weight: 600;
  text-align: center;
  margin-bottom: ${(props) => (props.divType === "signup" ? "15px" : "20px")};
`;

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${(props) => (props.divType === "signin" ? "30px" : "0px")};
`;

export const Form = styled.form`
  width: 100%;
  margin: auto;
`;

export const Label = styled.label`
  color: #6b7280;
  background: #fff;
  position: absolute;
  padding: 0px 5px;
  /* margin-left: 15px; */
  transform: ${(props) =>
    props.active === true
      ? "translate(15px, 3px) scale(1)"
      : "translate(15px, 27px) scale(1)"};
  transform-origin: top left;
  transition: all 0.2s ease-out;
`;

export const InputWrap = styled.div`
  width: 100%;
  text-align: center;
  position: relative;
  :focus-within ${Label} {
    transform: translate(15px, 3px) scale(1);
    color: #818cf8;
  }
`;

export const Input = styled.input`
  width: 70%;
  height: 50px;
  margin: 15px 0px;
  outline: none;
  border: 1px solid #d2d2d2;
  border-radius: 5px;
  font-size: 18px;
  padding: 15px;
  ::placeholder {
    font-weight: 500;
  }
  :focus,
  :active {
    background: #ffffff;
    border: 1px solid #818cf8;
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
    props.btnType === "cancel" ? "#aa3b64" : "#3F40F0 "};
  min-width: ${(props) => (props.btnType === "showcase" ? "200px" : "100%")};
  /* width: 100%; */
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
    transform: scale(1.02);
  }
`;

export const CloseModalDiv = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  /* background: rgba(63, 64, 240, 0.3); */
  background-color: #eef2ff;
  position: absolute;
  right: 1rem;
  top: ${(props) => (props.typeOfModal === "signup" ? "1.1rem" : "1.8rem")};
  svg {
    position: absolute;
    right: 0.3rem;
    top: 0.3rem;
    height: 30px;
    width: 30px;
    cursor: pointer;
  }
`;

export const ElseDiv = styled.div`
  display: flex;
  margin-top: 1.5rem;
  font-size: 18px;
  letter-spacing: 0.8px;
  span {
    margin-left: 0.5rem;
    color: #3f40f0;
    font-weight: bold;
    cursor: pointer;
  }
`;
