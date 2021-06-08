import styled from "styled-components";

export const PhoneItemContainer = styled.li`
  width: 100%;
  padding: 5px 10px;
  /* background-color: #aaa9e9; */

  .itemWrapper {
    border: 1px solid black;
    border-radius: 14px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .itemTitle {
    text-align: center;
    margin-top: 10px;
  }

  .itemImage {
    width: 150px;
  }

  .itemColorList {
    display: flex;
    list-style: none;
  }

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 1024px) {
    width: 25%;
  }
`;

export const PhoneColorsListItem = styled.li`
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.colorListItem};
  border-radius: 4px;
  border: 1px solid black;

  :not(:last-child) {
    margin-right: 5px;
  }
`;
