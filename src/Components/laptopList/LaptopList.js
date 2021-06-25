import React, {Component} from "react";
import LaptopListItem from "./laptopListItem/LaptopListItem";
import { LaptopListContainer } from "./LaptopListStyled";
import { connect } from "react-redux";
import { addToCart } from "../../redux/cart/cartActions";
import { getAllAdvByCategory } from "../../services/api";
import { getProductsByCategory } from "../../redux/products/productsActions";

class LaptopList extends Component {
  state = {}
  
componentDidMount() {
  this.getLaptops()
  }
  
  getLaptops = async () => {
    const response = await getAllAdvByCategory("laptops");
    if (response) {
      const laptops = Object.keys(response).map((key) => ({
        id: key,
        ...response[key],
      }));
    
      this.props.getProductsByCategory("laptops", laptops)
      // this.setState({ laptops });
    }
  };

  render() {
    return (
       <LaptopListContainer>
      {this.props.laptops.map((laptop) => (
        <LaptopListItem laptop={laptop} key={laptop.id} addToCart={this.props.addToCart} />
      ))}
    </LaptopListContainer>
    );
  }
}


// const LaptopList = ({ laptops, addToCart }) => {
//   return (
//     <LaptopListContainer>
//       {laptops.map((laptop) => (
//         <LaptopListItem laptop={laptop} key={laptop.id} addToCart={addToCart} />
//       ))}
//     </LaptopListContainer>
//   );
// };

const mapStateToProps = (state) => ({
  laptops: state.products.items.laptops
})

const mapDispatchToProps = { addToCart, getProductsByCategory };

export default connect(mapStateToProps, mapDispatchToProps)(LaptopList);
