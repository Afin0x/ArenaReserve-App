import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: JSON.parse(localStorage.getItem("products")) || [],
};

const addproductSlice = createSlice({
  name: "addProductSlice",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      state.products.push(action.payload);
      localStorage.setItem("products", JSON.stringify(state.products));
    },
    editProducts: (state, action) => {
      const editProductIndex = state.products.findIndex(
        (prdt) => prdt.id === action.payload
      );
      if (editProductIndex !== -1) {
        state.products[editProductIndex] = { ...action.payload };
        localStorage.setItem("products", JSON.stringify(state.products));
      }
    },
    deleteProducts: (state, action) => {
      const editProductIndex = state.products.findIndex(
        (prdt) => prdt.id === action.payload
      );
      if (editProductIndex !== -1) {
        state.products.splice(editProductIndex,1)
        localStorage.setItem("products", JSON.stringify(state.products));
      }
    },
  },
});

export const { addProducts, editProducts,deleteProducts } = addproductSlice.actions;
export default addproductSlice.reducer;
