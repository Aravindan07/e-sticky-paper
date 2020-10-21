import React, { useState, useEffect } from "react";
import { ReactSVG } from "react-svg";
import { connect } from "react-redux";
import Modals from "../components/Modals";
import {
  HomeWrapper,
  InnerWrapper,
  HeadingWrapper,
  H2,
  SubHeadingDiv,
  FormWrapper,
  QuotesWrapper,
  QuoteHeading,
  P,
  GetStartedWrapper,
  MessagePara,
  CreateButton,
  ButtonsDiv,
  SignInSignupButton,
} from "./styles";
import WinnerIcon from "../images/winner.svg";
import { loadQuotes, openModal } from "../actions";
import Header from "../components/Header";

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
      <Header />
      <H2>Create and store your Goals </H2>
      <SubHeadingDiv>
        <P>
          This application is created to nullify the use of sticky-paper for
          writing out some deadlines,tasks,notes,etc.. and allow us to create
          and store them on the web. Thus we are reducing the use of papers!!!!!
        </P>
      </SubHeadingDiv>
      <FormWrapper>
        <QuotesWrapper>
          <QuoteHeading>Quote of the Moment!!!</QuoteHeading>
          <P quote>{quote.quote.quoteText}</P>
          <P>
            -- <span>{quote.quote.quoteAuthor}</span>
          </P>
        </QuotesWrapper>
        <GetStartedWrapper>
          <P>Try it now.It's free!!!</P>
          <CreateButton onClick={clickHandler}>Try Now</CreateButton>
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
