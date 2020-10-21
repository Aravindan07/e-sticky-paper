import styled, { keyframes } from "styled-components";

export const HomeWrapper = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #f9dc5c;
`;

export const HeadingWrapper = styled.div`
  width: 100%;
  height: 250px;
  color: #ffffff;
  /* svg {
    width: 150px;
    height: 150px;
    margin-bottom: 5px;
  } */
`;

export const H2 = styled.h1`
  margin: 40px auto 20px auto;
  letter-spacing: 1.6px;
  color: #ba1200;
  /* font-size: 28px; */
  letter-spacing: 0.6px;
  line-height: 50px;
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
  /* margin: 0px; */
  margin: ${(props) => (props.quote ? "0px 0px 10px 0px" : "0px")};
  font-size: 20px;
  line-height: 32px;
  span {
    /* font-weight: bold; */
    margin-top: 10px;
    color: #020887;
  }
`;

export const GetStartedWrapper = styled.div`
  width: 60%;
  color: #191a35;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MessagePara = styled.div`
  margin: 20px 0px;
  font-size: 20px;
  font-weight: 600;
  color: #191a35;
  span {
    color: #191a35;
  }
`;

export const CreateButton = styled.div`
  outline: none;
  border: none;
  width: 130px;
  padding: 7px 11px 7px 14px;
  border-radius: 10px;
  background: #ffa51d;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 18px;
  height: 40px;
  margin: 20px 0px;
  cursor: pointer;
  :focus,
  :hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    transform: scale(1.05);
  }
`;

export const AnchorTag = styled.div`
  color: blue;
  text-decoration-line: underline;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;

export const ButtonsDiv = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #191a35;
`;

export const SignInSignupButton = styled.button`
  outline: none;
  border: none;
  width: 130px;
  padding: 7px 15px;
  color: #ffffff;
  background: #2e31be;
  text-transform: uppercase;
  height: 40px;
  font-weight: 600;
  letter-spacing: 0.3px;
  font-size: 18px;
  border-radius: 10px;
  cursor: pointer;
  :hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    transform: scale(1.03);
  }
`;
