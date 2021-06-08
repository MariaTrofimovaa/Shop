import styled from "styled-components";

export const PhoneListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  list-style: none;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (min-width: 1024px) {
  }
`;
