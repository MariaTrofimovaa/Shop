import React, { Component } from "react";
import data from "../../data";
import CartList from "../cart/CartList";
// import LaptopList from "../laptopList/LaptopList";
import PhoneList from "../phoneList/PhoneList";
import Section from "../section/Section";

// console.dir(Component);

class Main extends Component {
  state = {
    cart: [],
  };
  // основной способ добавления элемента
  addToCart = (product) =>
    this.setState((prevState) => ({ cart: [...prevState.cart, product] }));

  // удаление одного элемента из корзины
  removeFromCart = (id) =>
    this.setState((prevState) => ({
      cart: [...prevState.cart.filter((product) => product.id !== id)],
    }));

  // удаление всех элементов из корзины
  removeAllFromCart = () => this.setState({ cart: [] });

  render() {
    return (
      <main>
        <Section title="Корзина">
          <CartList
            cart={this.state.cart}
            removeFromCart={this.removeFromCart}
            removeAllFromCart={this.removeAllFromCart}
          />
        </Section>

        <Section title="Мобильные телефоны">
          <PhoneList phones={data.phones} addToCart={this.addToCart} />
        </Section>

        {/* <Section title="Ноутбуки">
        <LaptopList laptops={data.laptops} />
      </Section> */}
      </main>
    );
  }
}

export default Main;
