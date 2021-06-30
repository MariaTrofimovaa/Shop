import axios from "axios";

const baseURL = "https://react-shop-bdd1a-default-rtdb.firebaseio.com/";

export const createNewAdv = async (category, newAdv) => {
  try {
    const response = await axios.post(
      baseURL + `advertisements/${category}.json`,
      newAdv
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const getProductByID = async (category, id) => {
  console.log("id :>> ", id);
  try {
    const response = await axios.get(
      baseURL + `advertisements/${category}/${id}.json`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteAdv = async (category, id) => {
  try {
    await axios.delete(baseURL + `advertisements/${category}/${id}.json`);
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

// ===================== PROFILE ===================== //

export const createProfile = async (user) => {
  try {
    await axios.post(baseURL + "profile.json", user);
  } catch (error) {
    console.log(error);
  }
};

export const getProfileData = async () => {
  try {
    const response = await axios.get(
      baseURL + `profile/-MdMC5rTM35ycYJJJ4PF.json`
      // baseURL + `profile/-MdRWFAbGwmKIwB3Sr37.json`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
