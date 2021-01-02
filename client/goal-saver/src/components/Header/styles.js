import styled from "styled-components";

export const InnerWrap = styled.div`
  width: 100%;
  height: 70px;
  background: #13262f;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoDiv = styled.div`
  margin: ${(props) =>
    props.divType === "sidepane" ? "0px" : "0px 0px 0px 15px"};
  display: flex;
  align-items: center;
  color: #f4fffd;
  font-weight: 600;
  font-size: ${(props) => (props.divType === "sidepane" ? "16px" : "18px")};
  letter-spacing: 1.2px;
  text-transform: uppercase;
  cursor: pointer;
  svg {
    width: ${(props) => (props.divType === "sidepane" ? "30px" : "50px")};
    height: ${(props) => (props.divType === "sidepane" ? "30px" : "50px")};
    margin-right: ${(props) => (props.divType === "sidepane" ? "5px" : "15px")};
  }
`;

export const AccountWrap = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  align-items: center;
  margin-right: 20px;
`;

export const AccountName = styled.div`
  color: #f4fffd;
  font-size: 16px;
  letter-spacing: 0.6px;
  line-height: 30px;
  display: flex;
  align-items: center;
  span {
    color: #f9dc5c;
    margin-left: 10px;
    font-weight: 600;
    cursor: pointer;
  }
  svg {
    margin-left: 10px;
    margin-right: 10px;
    cursor: pointer;
    color: #f9dc5c;
  }
`;

export const SignInSignUpWrap = styled.div`
  margin: 0px 15px 0px 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const HeaderButton = styled.button`
  /* background: #496ddb; */
  /* min-width: 200px; */
  background: ${(props) => (props.btnType === "notes" ? "#065F46" : "#3f40f0")};
  outline: none;
  border: none;
  color: #f4fffd;
  border-radius: 5px;
  padding: 10px;
  font-weight: 600;
  /* text-transform: uppercase; */
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 1.2px;
  cursor: pointer;
  margin-top: ${(props) => (props.btnPlace === "sidepane" ? "15px" : "0px")};
  margin-right: ${(props) => (props.btnType === "note" ? "2rem" : "0rem")};
  :hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    transform: scale(1.03);
  }
`;

export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  top: 30px;
  left: auto;
  right: 10px;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 10;
`;

export const Dropdown = styled.div`
  position: relative;
  display: inline-flex;
  &:hover ${DropdownContent} {
    display: block;
  }
`;

export const Content = styled.div`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  cursor: pointer;
  :hover {
    background-color: #ddd;
  }
`;
