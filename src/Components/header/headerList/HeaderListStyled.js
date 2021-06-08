import styled from "styled-components";

export const HeaderNavigation = styled.nav`
  .headerList {
    display: flex;
    list-style: none;
    align-items: center;
  }

  .headerListItem:not(:last-child) {
    margin-right: 20px;
  }

  .headerListLink {
    text-decoration: none;
    text-transform: uppercase;
    color: blue;
  }

  .headerListLink:hover {
    color: red;
  }
`;
