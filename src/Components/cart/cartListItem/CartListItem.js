import React from "react";

const CartListItem = ({ product, removeFromCart }) => {
  return (
    <li>
      <p>{product.name}</p>
      <p>{product.price}</p>
      <button type="button" onClick={() => removeFromCart(product.id)}>
        Удалить
      </button>
    </li>
  );
};

export default CartListItem;
