import React from "react";
import CartList from "../../Components/cart/CartList";

const CartPage = ({ data }) => {
  return (
    <>
      <h2>CartPage</h2>
      <CartList {...data} />
    </>
  );
};

export default CartPage;
