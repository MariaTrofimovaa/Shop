import React from "react";
import CartListItem from "./cartListItem/CartListItem";

const CartList = ({ cart, removeFromCart, removeAllFromCart }) => {
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
                removeAllFromCart={removeAllFromCart}
              />
            ))}
          </ul>
          <button type="button">Оформить заказ</button>
        </>
      ) : (
        <p>Добавьте товары в корзину</p>
      )}
    </>
  );
};

export default CartList;
