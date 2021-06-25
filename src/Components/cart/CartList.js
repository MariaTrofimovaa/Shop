import React from "react";
import CartListItem from "./cartListItem/CartListItem";
import { CartListContainer, CartListContainerWrapper } from "./CartListStyled";
import { connect } from "react-redux";
import { createOrder, removeFromCart } from "../../redux/cart/cartActions";
import { createNewOrder } from "../../services/api";

const CartList = ({ cart, removeFromCart, createOrder }) => {
  const getTotalPrice = () =>
    cart.reduce((acc, product) => {
      acc += product.price;
      return acc;
    }, 0);
  
  const submitOrder = async() => {
try {
  await createNewOrder(cart)
  createOrder()
} catch (error) {
  console.log(error)
}
  }
  
  return (
    <CartListContainerWrapper>
      {cart.length ? (
        <>
          <CartListContainer>
            {cart.map((product) => (
              <CartListItem
                key={product.id}
                product={product}
                removeFromCart={removeFromCart}
              />
            ))}
          </CartListContainer>
          <div className="totalInfo">
            <p className="totalInfoTitle">Общая сумма заказа:</p>
            <p className="totalInfoPrice">
              {getTotalPrice()} <span className="totalInfoTitle">грн</span>
            </p>
          </div>
          <button type="button" onClick={submitOrder} className="orderButton">
            Оформить заказ
          </button>
        </>
      ) : (
        <p>Добавьте товары в корзину</p>
      )}
    </CartListContainerWrapper>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart.items,
});

const mapDispatchToProps = { removeFromCart, createOrder };

export default connect(mapStateToProps, mapDispatchToProps)(CartList);
