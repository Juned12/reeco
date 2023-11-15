import { configureStore } from "@reduxjs/toolkit";
import OrderItemsSlice from "./orderItemSlice";
import orderSummarySlice from "./orderSummarySlice";

export default configureStore({
    reducer:{
        orderItem: OrderItemsSlice,
        orderSummary: orderSummarySlice
    }
})