import styled from 'styled-components';

export const HomeWrapper = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const InnerWrapper = styled.div`
    background: #e7d1ff;
    position: fixed;
    height: 100%;
    width: 100%;
    color: #ffffff;
`;

export const HeadingWrapper = styled.div`
    width: fit-content;
    margin: auto;
    color: #ffffff;
    svg {
        width: 150px;
        height: 150px;
        margin-bottom: 5px;
    }
`;

export const H2 = styled.h2`
    margin: 0px;
    letter-spacing: 1.6px;
    color: ${(props) => (props.headingType === 'quote' ? '#2a6049' : '#26937d')};
`;

export const FormWrapper = styled.div`
    width: 98%;
    height: 65%;
    background: #ffffff;
    position: relative;
    top: 34%;
    left: 1%;
    right: 1%;
    border-radius: 15px;
    display: flex;
`;

export const QuotesWrapper = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 10px;
    background: #ffe7d0;
    border-radius: 10px 0px 0px 10px;
`;

export const P = styled.p`
    color: #0c3b2e;
    letter-spacing: 0.8px;
    span {
        font-weight: bold;
        color: #26937d;
    }
`;

export const GetStartedWrapper = styled.div`
    width: 60%;
    height: 100%;
    color: #323232;
    border-radius: 0px 15px 15px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
    background: #ffe7d0;
`;

export const MessagePara = styled.div`
    margin: 20px 0px;
    font-size: 20px;
    font-weight: 600;
    color: #2a6049;
    span {
        color: #26937d;
    }
`;

export const CreateButton = styled.div`
    outline: none;
    border: none;
    width: 130px;
    padding: 7px 11px 7px 14px;
    border-radius: 10px;
    background: #ffba00;
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
    color: #2a6049;
`;

export const SignInSignupButton = styled.button`
    outline: none;
    border: none;
    width: 130px;
    padding: 7px 15px;
    color: #ffffff;
    background: #26937d;
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
