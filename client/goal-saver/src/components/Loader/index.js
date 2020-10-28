import React from "react";
import { css } from "@emotion/core";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { connect } from "react-redux";
import { LoaderWrap } from "./styles";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function Loader({ isLoading }) {
  return (
    <LoaderWrap>
      <ClimbingBoxLoader
        css={override}
        // size={150}
        color={"#123abc"}
        loading={isLoading}
      />
    </LoaderWrap>
  );
}

const mapStateToProps = (state) => ({
  isLoading: state.authentication.isLoading,
});

export default connect(mapStateToProps, null)(Loader);
