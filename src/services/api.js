import axios from "axios";

const baseURL = "https://react-shop-bdd1a-default-rtdb.firebaseio.com/";

export const createNewAdv = async (category, newAdv) => {
  try {
    const response = await axios.post(
      baseURL + `advertisements/${category}.json`,
      newAdv
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllAdvByCategory = async (category) => {
  try {
    const response = await axios.get(
      baseURL + `advertisements/${category}.json`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const createNewOrder = async (order) => {
  try {
    await axios.post(baseURL + "orders.json", order);
  } catch (error) {
    console.log(error);
  }
};
