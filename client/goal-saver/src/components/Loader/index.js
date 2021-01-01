import React from "react";
import { connect } from "react-redux";
import "./style.css";

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
