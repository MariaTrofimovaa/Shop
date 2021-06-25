import React, { Component, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
// import HomePage from "../../pages/homePage/HomePage";
// import ProductsPage from "../../pages/productsPage/ProductsPage";
// import CartPage from "../../pages/cartPage/CartPage";
// import data from "../../data";
import { createNewOrder, getAllAdvByCategory } from "../../services/api";
// import AdvForm from "../admin/AdvForm";
// import CartList from "../cart/CartList";
// import LaptopList from "../laptopList/LaptopList";
// import PhoneList from "../phoneList/PhoneList";
// import Section from "../section/Section";
import { mainRotes } from "../../routes/mainRoutes";

class Main extends Component {
  state = {
    cart: [],
    phones: [],
    laptops: [],
  };

  componentDidMount() {
    this.getPhones();
    this.getLaptops();
  }

  getPhones = async () => {
    const response = await getAllAdvByCategory("phones");

    if (response) {
      const phones = Object.keys(response).map((key) => ({
        id: key,
        ...response[key],
      }));

      this.setState({ phones: phones });
    }
  };

  getLaptops = async () => {
    const response = await getAllAdvByCategory("laptops");

    if (response) {
      const laptops = Object.keys(response).map((key) => ({
        id: key,
        ...response[key],
      }));

      this.setState({ laptops });
    }
  };

  createOrder = async () => {
    await createNewOrder(this.state.cart);
    this.removeAllFromCart();
  };

  addProduct = (category, product) => {
    this.setState((prevState) => ({
      [category]: [...prevState[category], product],
    }));
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

  getData = (path) => {
    if (path === "/cart") {
      return {
        cart: this.state.cart,
        removeFromCart: this.removeFromCart,
        createOrder: this.createOrder,
      };
    }

    if (path === "/products") {
      return {
        phones: this.state.phones,
        laptops: this.state.laptops,
        addToCart: this.addToCart,
      };
    }

    if (path === "/admin") {
      return {
        addProduct: this.addProduct,
      };
    }
    return null;
  };

  render() {
    return (
      <main>
        <Suspense fallback={<h2>... Loading</h2>}>
          <Switch>
            {mainRotes.map(({ path, exact, component: MyComponent }) => (
              <Route
                path={path}
                exact={exact}
                // component={component}
                render={(props) => (
                  <MyComponent {...props} data={this.getData(path)} />
                )}
                key={path}
              />
            ))}
          </Switch>
        </Suspense>
        {/* <Section title="Новое объявление">
          <AdvForm addProduct={this.addProduct} />
        </Section>

        <Section title="Корзина">
          <CartList
            cart={this.state.cart}
            removeFromCart={this.removeFromCart}
            createOrder={this.createOrder}
          />
        </Section>

        <Section title="Мобильные телефоны">
          <PhoneList phones={this.state.phones} addToCart={this.addToCart} />
        </Section>

        <Section title="Ноутбуки">
          <LaptopList laptops={this.state.laptops} />
        </Section> */}
      </main>
    );
  }
}

export default Main;
