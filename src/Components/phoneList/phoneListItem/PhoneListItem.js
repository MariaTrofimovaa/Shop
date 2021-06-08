import React from "react";
import { PhoneColorsListItem, PhoneItemContainer } from "./PhoneListItemStyled";

const PhoneListItem = ({ phone }) => {
  // const {name, image, isSale, description, price} = phone;
  return (
    <PhoneItemContainer>
      <div className="itemWrapper">
        <h3 className="itemTitle">{phone.name}</h3>
        <img className="itemImage" src={phone.image} alt={phone.name} />
        <p>
          Sale:{" "}
          {phone.isSale ? "Действует акционная цена" : "В акции не участвует"}
        </p>
        {/* <p>{phone.description}</p> */}
        <ul className="itemColorList">
          {phone.colors.map((color) => (
            <PhoneColorsListItem key={color} colorListItem={color} />
          ))}
        </ul>
        <p>
          Цена: <span>{phone.price}</span>
        </p>
      </div>
    </PhoneItemContainer>
  );
};

export default PhoneListItem;
