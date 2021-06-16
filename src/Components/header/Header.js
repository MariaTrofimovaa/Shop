import React, { Component } from "react";
import HeaderList from "./headerList/HeaderList";
import { HeaderContainer } from "./HeaderStyled";
import sprite from "../../icons/header/header.svg";
import Modal from "../modal/Modal";

class Header extends Component {
  state = {
    width: window.innerWidth,
    breakPoint: 768,
    isModalOpen: false,
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResizeWindow);
  }

  componentWillUnmount() {
    window.removeEventListenere("resize", this.handleResizeWindow);
  }

  setModalState = () => {
    this.setState((prevState) => ({ isModalOpen: !prevState.isModalOpen }));
  };

  handleResizeWindow = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width, breakPoint, isModalOpen } = this.state;

    return (
      <HeaderContainer>
        {isModalOpen && width < breakPoint && (
          <Modal hideModal={this.setModalState}>
            <div className="wrapper">
              <HeaderList />
            </div>
          </Modal>
        )}
        <svg className="headerLogo">
          <use href={sprite + "#icon-home3"} />
        </svg>
        {width < breakPoint ? (
          <svg className="headerLogo" onClick={this.setModalState}>
            <use href={sprite + "#icon-menu"} />
          </svg>
        ) : (
          <HeaderList />
        )}
      </HeaderContainer>
    );
  }
}

export default Header;
