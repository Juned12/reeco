import { createSlice } from "@reduxjs/toolkit";

const OrderSummarySlice = createSlice({
    name: "orderSummary",
    initialState : {
        summary : {}
    },
    reducers : {
        setOrderSummary: (state, action) => {
            state.summary = action.payload
        }
    }
})

export const { setOrderSummary } = OrderSummarySlice.actions;

export default OrderSummarySlice.reducer;