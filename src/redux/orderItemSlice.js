import { createSlice } from "@reduxjs/toolkit";

export const OrderItemsSlice = createSlice({
    name: "orderItem",
    initialState: {
        orders: [] 
    },
    reducers: {
        setOrderItems: (state, action) => {
            state.orders = action.payload
        },
        updateOrderItem: (state, action) => {
            const itemData = state.orders.map((res) => {
                if(res.id === action.payload.id) {
                    return {...res, ...action.payload}
                } else return res
            })
            state.orders = itemData
        }
    }
})

export const { setOrderItems, updateOrderItem } = OrderItemsSlice.actions

export default OrderItemsSlice.reducer;