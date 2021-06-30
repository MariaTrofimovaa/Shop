import styled from "styled-components";

export const ProfileFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 10px 0 10px;

  .profileFormLabel {
    display: flex;
    flex-direction: column;
    font-size: 16px;
  }
  .profileInputData {
    border: 1px solid #819ff5;
    height: 30px;
    border-radius: 14px;
    padding-left: 10px;
    margin: 5px 0;
    font-size: 14px;
    outline: none;
    &:hover {
      border: 2px solid #5f73a1;
      cursor: pointer;
    }
  }

  .userInfo {
    font-weight: 700;
  }

  .submitButton {
    display: block;
    margin: 0 auto;
    margin-top: 20px;
  }

  @media (min-width: 768px) {
    .profileFormContent {
      /* justify-content: center;
      width: 70%; */
    }

    .submitButton {
      margin-top: 20px;
    }
  }

  @media (min-width: 1024px) {
    .profileFormContent {
      justify-content: center;
      /* width: 50%; */
    }
  }
`;
