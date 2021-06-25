import React, {Component} from "react";
import PhoneListItem from "./phoneListItem/PhoneListItem";
import { PhoneListContainer } from "./PhoneListStyled";
import {connect} from "react-redux"
import { addToCart } from "../../redux/cart/cartActions";
import { getAllAdvByCategory } from "../../services/api";
import { getProductsByCategory } from "../../redux/products/productsActions";

class PhoneList extends Component {
  state = {};

  componentDidMount() {
    this.getPhones()
  }

  getPhones = async () => {
    const response = await getAllAdvByCategory("phones");
    if (response) {
      const phones = Object.keys(response).map((key) => ({
        id: key,
        ...response[key],
      }));
      this.props.getProductsByCategory("phones", phones )
      // this.setState({ phones });
    }
  };
  
  render() {
    return (

    <PhoneListContainer>
      {this.props.phones.map((phone) => (
        <PhoneListItem phone={phone} key={phone.id} addToCart={this.props.addToCart} />
        ))}
    </PhoneListContainer>

    );
  }
}


const mapStateToProps = (state) => ({
  phones: state.products.items.phones
})

const mapDispatchToProps = {
  addToCart,
  getProductsByCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(PhoneList);
