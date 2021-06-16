import React from "react";
import CartListItem from "./cartListItem/CartListItem";

const CartList = ({ cart, removeFromCart, createOrder }) => {
  return (
    <>
      {cart.length ? (
        <>
          <ul>
            {cart.map((product) => (
              <CartListItem
                product={product}
                key={product.id}
                removeFromCart={removeFromCart}
              />
            ))}
          </ul>
          <button type="button" onClick={createOrder}>
            Оформить заказ
          </button>
        </>
      ) : (
        <p>Добавьте товары в корзину</p>
      )}
    </>
  );
};

export default CartList;
