
import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const addToCart = createAction("ADD_TO_CART");

const cartReducer = createReducer([], (buiLder) => {
    buiLder.addCase(addToCart, (state, action) => {
        state.push(action.payload)
        // state.cart = [...state.cart, action.payload],
    });
});

const login = createAction("CREATE_SESSION")
const loginReducer = createReducer({ status: false }, (buiLder) => {
    buiLder.addCase(login, (state, action) => {
        state.status = true
    })
})
const store = configureStore({
    reducer: { login: loginReducer, cart: cartReducer },
});
console.log("onCreate Store : ", store.getState())

store.subscribe(() => {
    console.log("Store change : ", store.getState())
})

store.dispatch(addToCart({ id: 1, qty: 2 }))
store.dispatch(addToCart({ id: 2, qty: 2 }))
store.dispatch(login())