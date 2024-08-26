import shoppingBagReducer from "./shoppingBag";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    shoppingBag: shoppingBagReducer,
  }
})

export default store