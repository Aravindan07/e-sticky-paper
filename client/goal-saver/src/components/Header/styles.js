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
  margin-left: 15px;
  display: flex;
  align-items: center;
  color: #f4fffd;
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  svg {
    width: 50px;
    height: 50px;
    margin-right: 15px;
  }
`;

export const AccountWrap = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 1.2px;
  text-transform: uppercase;
`;

export const SignInSignUpWrap = styled.div`
  margin: 0px 15px 0px 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Button = styled.button`
  background: #496ddb;
  outline: none;
  border: none;
  color: #f4fffd;
  border-radius: 5px;
  padding: 10px;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1.2px;
  cursor: pointer;
  :hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    transform: scale(1.03);
  }
`;
