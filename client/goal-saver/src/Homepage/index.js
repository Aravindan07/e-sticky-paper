import React, { useState, useEffect } from "react";
import { ReactSVG } from "react-svg";
import { connect } from "react-redux";
import Modals from "../components/Modals";
import {
  HomeWrapper,
  InnerWrapper,
  HeadingWrapper,
  H2,
  FormWrapper,
  QuotesWrapper,
  P,
  GetStartedWrapper,
  MessagePara,
  CreateButton,
  ButtonsDiv,
  SignInSignupButton,
} from "./styles";
import WinnerIcon from "../images/winner.svg";
import { loadQuotes, openModal } from "../actions";

function HomePage({ loadQuote, quote, OpenModal, isOpen, ...props }) {
  useEffect(() => {
    loadQuote();
  }, [loadQuote]);

  const clickHandler = () => {
    props.history.push("/user/2kjs322ujsisd38273/create-goal");
  };

  return (
    <HomeWrapper>
      {isOpen && <Modals />}

      <InnerWrapper>
        <HeadingWrapper>
          <ReactSVG src={WinnerIcon} />
          <H2>Goal Store !</H2>
        </HeadingWrapper>
      </InnerWrapper>
      <FormWrapper>
        <QuotesWrapper>
          <H2 headingType="quote">Quote of the Day!</H2>
          <P>{quote.quote.quoteText}</P>
          <P>
            By <span>{quote.quote.quoteAuthor}</span>
          </P>
        </QuotesWrapper>
        <GetStartedWrapper>
          <MessagePara>
            What are you waiting for ? Just start creating your{" "}
            <span>GOALS !</span>
          </MessagePara>
          <CreateButton onClick={clickHandler}>Start Now</CreateButton>
          <MessagePara>
            It would be great if you click on any one of the below buttons !
          </MessagePara>
          <ButtonsDiv>
            <SignInSignupButton>Sign In</SignInSignupButton>
            OR
            <SignInSignupButton onClick={OpenModal}>Sign Up</SignInSignupButton>
          </ButtonsDiv>
        </GetStartedWrapper>
      </FormWrapper>
    </HomeWrapper>
  );
}

const mapStateToProps = (state) => ({
  quote: state.quote,
  isOpen: state.modal.isOpen,
});

const mapDispatchToProps = (dispatch) => ({
  loadQuote: () => dispatch(loadQuotes()),
  OpenModal: () => dispatch(openModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
