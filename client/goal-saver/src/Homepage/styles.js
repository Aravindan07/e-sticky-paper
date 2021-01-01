import styled, { keyframes } from "styled-components";

export const HomeWrapper = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  display: block;
  /* flex-direction: column; */
  background: #f9dc5c;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0,20px,0);
  }
  to {
    opacity: 1;
    transform: translate3d(0,0,0);
  }
`;

export const AnimationDiv = styled.div`
  animation: 1s ${fadeIn} ease-out forwards;
`;

export const H2 = styled.h1`
  margin: ${(props) =>
    props.headingType === "goal"
      ? "auto auto 20px auto"
      : "40px auto 20px auto"};
  letter-spacing: 1.6px;
  color: ${(props) => (props.headingType === "goal" ? "#011936" : "#861657")};
  letter-spacing: 0.6px;
  line-height: 50px;
  text-align: center;
`;

export const SubHeadingDiv = styled.div`
  width: 80%;
  text-align: center;
  margin: 0 auto;
`;

export const FormWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 50px;
  align-items: center;
`;

export const QuotesWrapper = styled.div`
  width: 40%;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0px 0px 0px 10px;
  /* border-radius: 10px 0px 0px 10px; */
`;

export const QuoteHeading = styled.div`
  color: #020887;
  letter-spacing: 1px;
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
  margin-bottom: 15px;
`;

export const P = styled.p`
  color: #13262f;
  letter-spacing: 1px;
  margin: ${(props) => (props.quote ? "0px 0px 10px 0px" : "0px")};
  font-size: 20px;
  line-height: 32px;
  span {
    font-weight: ${(props) => (props.divType === "logout" ? "bold" : "unset")};
    margin-top: 10px;
    color: ${(props) => (props.divType === "logout" ? "#13262f" : "#020887")};
  }
`;

export const GetStartedWrapper = styled.div`
  width: 60%;
  color: #191a35;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CreateButton = styled.div`
  outline: none;
  border: none;
  width: 130px;
  padding: 7px 11px 7px 14px;
  border-radius: 5px;
  background: #496ddb;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 18px;
  height: 40px;
  margin: 20px 0px;
  cursor: pointer;
  color: #fff;
  letter-spacing: 1px;
  text-align: center;
  :focus,
  :hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    transform: scale(1.05);
  }
`;
