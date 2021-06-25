import { createAction } from "@reduxjs/toolkit";

const GET_PRODUCTS_BY_CATEGORY = "products/getProductsByCategory";

export { GET_PRODUCTS_BY_CATEGORY };

const getProductsByCategory = createAction(
  "products/getProductsByCategory",
  (category, products) => ({
    payload: { category, products },
  })
);

// const getProductsByCategory = (category, products) => ({
//     type: GET_PRODUCTS_BY_CATEGORY,
//     payload: {
//         category: category,
//         products: products
//     }
// })

export { getProductsByCategory };
