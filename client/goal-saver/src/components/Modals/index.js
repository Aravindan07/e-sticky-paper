import React, { useState, useEffect, memo } from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { clearError, closeModal, signUp } from "../../actions";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { compose } from "redux";
import { useRef } from "react";
import SignupModal from "./Signup";
import SignInModal from "./Signin";
import LogoutModal from "./Logout";
import PropTypes from "prop-types";

toast.configure();

const ModalList = {
  signup: SignupModal,
  signin: SignInModal,
  logout: LogoutModal,
};

function Modals({
  isOpen,
  modalType,
  data,
  closeModal,
  errorMsg,
  successMsg,
  isAuthenticated,
}) {
  useEffect(() => {
    Modal.setAppElement("body");
  });

  const [errorMessage, setErrorMsg] = useState(null);
  const [successMessage, setSuccessMsg] = useState(null);
  const didMount = useRef(false);
  const errMessage = useRef(errorMsg);
  const SucMessage = useRef(successMsg);

  useEffect(() => {
    if (didMount.current) {
      if (errMessage.current !== errorMsg) {
        errMessage.current = errorMsg;
        setErrorMsg(errorMsg);
        toast.error(errorMessage, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: false,
        });
        return;
      }
      if (SucMessage.current !== successMsg) {
        SucMessage.current = successMsg;
        setSuccessMsg(successMsg);
        toast.success(successMessage, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 4000,
          hideProgressBar: true,
        });
        return;
      }
      setErrorMsg(null);
      return setSuccessMsg(null);
    } else {
      didMount.current = true;
    }
  }, [errorMsg, successMsg, errorMessage, successMessage]);

  const overlay = {
    backgroundColor: "rgba(0,0,0,0.8)",
  };
  const content = {
    width: "50%",
    height: "70%",
    margin: "auto",
    borderRadius: "10px",
    padding: "30px 20px 20px 20px",
  };

  const logoutContent = {
    width: "40%",
    height: "200px",
    margin: "auto",
    borderRadius: "10px",
    padding: "30px 20px 20px 20px",
  };

  const ModalToShow = ModalList[modalType];

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={{
          overlay: overlay,
          content: modalType === "logout" ? logoutContent : content,
        }}
      >
        {isOpen && <ModalToShow data={data} />}
      </Modal>
    </>
  );
}

Modals.propTypes = {
  isOpen: PropTypes.bool,
  modalType: PropTypes.string,
  data: PropTypes.object,
  closeModal: PropTypes.func.isRequired,
};

Modals.defaultProps = {
  isOpen: false,
  modalType: "",
  data: {},
};

const mapStateToProps = (state) => ({
  isOpen: state.modal.isOpen,
  modalType: state.modal.modalType,
  data: state.modal.data,
  errorMsg: state.message.error,
  successMsg: state.message.success,
  isAuthenticated: state.authentication.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
  clearErrors: () => dispatch(clearError()),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Modals);
