import React from "react";
import PhoneListItem from "./phoneListItem/PhoneListItem";
import { PhoneListContainer } from "./PhoneListStyled";

const PhoneList = ({ phones = [], addToCart }) => {
  return (
    <PhoneListContainer>
      <h2>Phone List</h2>
      {phones.map((phone) => (
        <PhoneListItem phone={phone} key={phone.id} addToCart={addToCart} />
      ))}
    </PhoneListContainer>
  );
};

export default PhoneList;
