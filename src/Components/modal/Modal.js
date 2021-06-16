import React, { Component } from "react";
import { ModalContainer } from "./ModalStyled";

class Modal extends Component {
  state = {};

  componentDidMount() {
    window.addEventListener("keydown", this.handleEscape);
    const body = document.querySelector("body");
    body.style.overflow = "hidden";
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleEscape);
    const body = document.querySelector("body");
    body.style.overflow = "auto";
  }

  handleEscape = (e) => {
    if (e.code === "Escape") {
      this.props.hideModal();
    }
  };

  onHandleClick = () => this.props.hideModal();

  handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.hideModal();
    }
  };

  render() {
    return (
      <ModalContainer onClick={this.handleBackdropClick}>
        <div className="modal">{this.props.children}</div>
      </ModalContainer>
    );
  }
}

export default Modal;
