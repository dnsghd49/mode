import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { getTotals } from "./slices/cartSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    }
});

store.dispatch(getTotals());