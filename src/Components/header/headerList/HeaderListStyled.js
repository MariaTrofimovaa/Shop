import styled from "styled-components";

export const HeaderNavigation = styled.nav`
  .headerList {
    display: flex;
    flex-direction: column;
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

  @media (min-width: 768px) {
    .headerList {
      flex-direction: row;
    }
  }

  /* @media (min-width: 1024px) {
   
  } */
`;
