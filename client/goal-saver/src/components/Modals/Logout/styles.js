import styled from "styled-components";

export const Button = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 18px;
  line-height: 36px;
  padding: 10px;
  background: ${(props) =>
    props.btnType === "cancel" ? "#ed254e" : "#15b996"};
  color: #f4fffd;
  border-radius: 5px;
`;
