import { createContext, useContext, useReducer, useState } from "react"

const TotalPriceContext = createContext(null);

const TotalPricedDispatchContext = createContext(null);

const totalPriceReducer = (state, action) => {
    switch (action.type) {
        case "UPDATE": {
            return {
                total: action.payload.total,
            }
        }
        default: {
            throw Error("Unknow action" + action.type)
        }
    }
}

export function TotalPriceProvider({ children }) {
    const [totalPrice, dispatch] = useReducer(totalPriceReducer, { total: 4 });
    return (
        <TotalPriceContext.Provider value={totalPrice}>
            <TotalPricedDispatchContext.Provider value={dispatch}>
                {children}
            </TotalPricedDispatchContext.Provider>
        </TotalPriceContext.Provider>
    )
}

export function useTotalPrice() {
    return useContext(TotalPriceContext);
}

export function useTotalPriceDispatch() {
    return useContext(TotalPricedDispatchContext);
}