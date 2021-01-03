import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) =>
    props.btnType === "cancel" ? "#aa3b64" : "#3F40F0 "};
  /* min-width: px; */
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
  text-transform: capitalize;
  cursor: pointer;
  :hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    transform: scale(1.02);
  }
`;
