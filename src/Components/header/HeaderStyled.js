import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  background-color: #cbf0f0;
  padding: 0 20px;

  .headerLogo {
    width: 30px;
    height: 30px;
    fill: blue;

    :hover {
      cursor: pointer;
      fill: red;
    }
  }
`;
