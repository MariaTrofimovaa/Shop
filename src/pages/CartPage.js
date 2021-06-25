import React from "react";
import CartList from "../Components/cart/CartList";
import Section from "../Components/section/Section";

const CartPage = () => {
  return (
    <Section title="Корзина">
      <CartList />
    </Section>
  );
};

export default CartPage;
