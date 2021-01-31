import React, { useEffect } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import {
  HomeWrapper,
  AnimationDiv,
  H2,
  SubHeadingDiv,
  FormWrapper,
  QuotesWrapper,
  QuoteHeading,
  P,
  GetStartedWrapper,
  CreateButton,
} from "./styles";
import { loadQuotes, openModal } from "../actions";
import Header from "../components/Header";

toast.configure();

function HomePage({
  loadQuote,
  quote,
  OpenModal,
  isOpen,
  isAuthenticated,
  id,
  ...props
}) {
  useEffect(() => {
    loadQuote();
  }, [loadQuote]);

  const openModalType = (modalType, data = {}) => {
    return OpenModal(modalType, data);
  };
  const clickHandler = () => {
    if (isAuthenticated) {
      return props.history.push(`user/${id}/goals`);
    }
    openModalType("signin");
  };
  return (
    <HomeWrapper>
      <Header />
      <AnimationDiv>
        <H2>Create and store your Goals </H2>
        <SubHeadingDiv>
          <P>
            This application is created to nullify the use of sticky-paper for
            writing out some deadlines,tasks,notes,etc.. and allow us to create
            and store them on the web. Thus we are reducing the use of
            papers!!!!!
          </P>
        </SubHeadingDiv>
        <FormWrapper>
          <QuotesWrapper>
            <QuoteHeading>Quote of the Moment!!!</QuoteHeading>
            <P quote>{quote && quote.content}</P>
            <P>
              -- <span>{quote && quote.author}</span>
            </P>
          </QuotesWrapper>
          <GetStartedWrapper>
            <P>Try it now.It's free!!!</P>
            <CreateButton onClick={() => clickHandler()}>Try Now</CreateButton>
          </GetStartedWrapper>
        </FormWrapper>
      </AnimationDiv>
    </HomeWrapper>
  );
}

const mapStateToProps = (state) => ({
  quote: state.quote,
  isOpen: state.modal.isOpen,
  isAuthenticated: state.authentication.isAuthenticated,
  id: state.authentication.isAuthenticated && state.authentication.user.id,
});

const mapDispatchToProps = (dispatch) => ({
  loadQuote: () => dispatch(loadQuotes()),
  OpenModal: (modalType, data) => dispatch(openModal(modalType, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
