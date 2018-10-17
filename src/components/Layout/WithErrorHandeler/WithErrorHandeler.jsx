import React, { Component } from "react";

import Modal from "../../components/UI/Modal/Modal";
import Aux from "../../../hoc/Aux";
const withErrorHandeler = WrappedComponent => {
  return props => {
    return;
    <Aux>
      <Modal>some error</Modal>
      <WrappedComponent {...props} />
    </Aux>;
  };
};

export default withErrorHandeler;
