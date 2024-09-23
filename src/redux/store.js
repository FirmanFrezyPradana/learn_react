import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cardSlice"

const store = configureStore({
    reducer: { cart: cartReducer },
});
console.log("once create store: ", store.getState());
store.subscribe(() => {
    console.log("Store changed:", store.getState());
});
export default store;