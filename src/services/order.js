import Axios from "../utils/axiosInstance"

export const GetOrderItems = () => {
    return Axios.get("/orders")
}
export const GetOrderSummary = () => {
    return Axios.get("/summary")
}
export const UpdateOrderItemStatus = (id, payload) => {
    return Axios.patch(`/orders/${id}`, payload)
}