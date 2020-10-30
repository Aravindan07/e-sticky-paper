import React from "react";
// import { css } from "@emotion/core";
// import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { connect } from "react-redux";
import "./style.css";

// const override = css`
//   display: block;
//   margin: 0 auto;
//   border-color: red;
// `;

function Loader({ isLoading }) {
  return (
    <>
      {isLoading && (
        <div className="loader-wrapper">
          <div className="lds-circle">
            <div></div>
          </div>
        </div>
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  isLoading: state.authentication.isLoading,
});

export default connect(mapStateToProps, null)(Loader);
