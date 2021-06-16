import React, { Component } from "react";
// import { v4 as uuidv4 } from "uuid";
import { createNewAdv } from "../../services/api";

const categories = ["phones", "laptops"];

class AdvForm extends Component {
  state = {
    name: "",
    image: "",
    description: "",
    price: 0,
    isSale: false,
    colors: [],
    category: categories[0],
  };

  onHandleChange = (evt) => {
    const { name, value, checked, type } = evt.target;
    if (type === "checkbox") {
      this.setState({ [name]: checked }); // [name] - вычисляемое значение
      return;
    }
    this.setState({ [name]: value });
  };

  onHandleSubmit = async (evt) => {
    evt.preventDefault();
    const response = await createNewAdv(this.state.category, this.state);

    this.props.addProduct(this.state.category, {
      ...this.state,
      id: response.name,
    });
  };
  render() {
    return (
      <div className="advFormWrapper">
        <form className="advForm" onSubmit={this.onHandleSubmit}>
          <label>
            Категория
            <select
              type="text"
              name="category"
              value={this.state.category}
              className="advFormInput"
              onChange={this.onHandleChange}
            >
              {categories.map((category) => (
                <option value={category} key={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>
          <label>
            Название продукта
            <input
              type="text"
              name="name"
              value={this.state.name}
              className="advFormInput"
              onChange={this.onHandleChange}
            />
          </label>
          <label>
            Изображение
            <input
              type="text"
              name="image"
              value={this.state.image}
              className="advFormInput"
              onChange={this.onHandleChange}
            />
          </label>
          <label>
            Описание
            <textarea
              type="text"
              name="description"
              value={this.state.description}
              className="advFormInput"
              onChange={this.onHandleChange}
            />
          </label>
          <label>
            Цена
            <input
              type="text"
              name="price"
              value={this.state.price}
              className="advFormInput"
              onChange={this.onHandleChange}
            />
          </label>
          <label>
            Скидка
            <input
              type="checkbox"
              name="isSale"
              checked={this.state.isSale}
              className="advFormCheckBox"
              onChange={this.onHandleChange}
            />
          </label>
          <button type="submit">Добавить продукт</button>
        </form>
      </div>
    );
  }
}

export default AdvForm;
