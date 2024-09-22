import { legacy_createStore } from "redux"
// redux sebuah state container yang digunakan pada javascript
// saat kita tidak mengguakaan redux maka harus parent ke chil satu satu menggunakan props
// saat menggunakan redux untuk melakuka perubahannya tidak perlu lagi mengrimkan parent ke child untuk statenya, langsung akses store

// 1. instal redux - npm i redux

// file yang dibutuhkan reducer,store , dispatch, subscrib(melihat oerubahan di dalam store)


// reducer
const cartReducer = (
    state = {
        login: false,
        cart: [{ id: 1, qty: 4 }],
    },
    action

) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
        default:
            return state
    }
};
// store
const store = legacy_createStore(cartReducer);
console.log("onCreate Store : ", store.getState())
// subscrib
store.subscribe(() => {
    console.log("Store change : ", store.getState())
})
// dispatch
const action1 = { type: "ADD_TO_CART", payload: { id: 2, qty: 20 } }
store.dispatch(action1)

// dispatch
const action2 = { type: "ADD_TO_CART", payload: { id: 3, qty: 30 } }
store.dispatch(action2)