import React, { useEffect, useState } from "react";
import { GetOrderItems, GetOrderSummary, UpdateOrderItemStatus } from "../../services/order";
import { useDispatch, useSelector } from "react-redux";
import { setOrderItems, updateOrderItem } from "../../redux/orderItemSlice";
import { setOrderSummary } from "../../redux/orderSummarySlice";
import Button from "../../component/button";
import OrderSummary from "./orderSummary";
import TextInput from "../../component/textInput";
import OrderItems from "./orderItems";
import MissingProductModal from "./orderItems/missingProductModal";
import "./index.scss";

const Orders = () => {

    const dispatch = useDispatch()
    const orderSummary = useSelector((state)=>state.orderSummary.summary)
    const [missingData, setMissingData] = useState({})

    useEffect(()=>{
        getOrderItems()
        getOrderSummary()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const getOrderItems = () => {
        GetOrderItems()
        .then((res)=>{
            dispatch(setOrderItems([...res.data]))
        })
    }

    const getOrderSummary = () => {
        GetOrderSummary()
        .then((res)=>{
            dispatch(setOrderSummary(res.data))
        })
    }

    const markApproved = (id) => {
        dispatch(updateOrderItem({id:id, isApproved: true, status: "Approved"}))
        UpdateOrderItemStatus(id, {isApproved: true, status: "Approved"})
    }

    const markMissing = (data) => {
        setMissingData({
            isOpen: true,
            ...data
        })
    }

    const updateStatus = (urgent) => {
        const status = urgent ? "Missing-Urgent" : "Missing"
        dispatch(updateOrderItem({id:missingData?.id, status: status, isApproved: false}))
        UpdateOrderItemStatus(missingData?.id, {status: status, isApproved: false})
        .then(()=>{
            setMissingData({})
        })
    }

    return (
        <>
            <MissingProductModal
                isOpen={missingData?.isOpen}
                productName={missingData?.productName}
                toggleModal={()=>setMissingData({})}
                updateStatus={(data)=> updateStatus(data)}
            />
            <div className="order-header-wrap ps-5 pt-2 pb-2">
                <div className="ps-5">
                    <span className="order-font pe-2">
                        Orders
                    </span>
                    <span className="order-font pe-2">
                        {">"}
                    </span>
                    <span className="order-font underline">
                        Order 32431ABCD
                    </span>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-2 ps-5">
                    <div className="order-head">
                        Order 32431ABCD
                    </div>
                    <div className="pe-5">
                        <Button
                            label={"Back"}
                            activeGreen={false}
                            onClick={()=>{}}
                            classname="me-3"
                        />
                        <Button
                            label={"Approve Orders"}
                            activeGreen={true}
                            onClick={()=>{}}
                            classname="me-5"
                        />
                    </div>
                </div>
            </div>
            <div className="mt-4 mb-4 ps-5 pe-5">
                <OrderSummary />
            </div>
            <div className="order-details-wrap">
                <div className="d-flex justify-content-between align-items-center">
                    <TextInput
                        classname="search-text-field"
                        type="text"
                        onChange={()=>{}}
                        id="search"
                        placeholder={"Search..."}
                        showSearchIcon={true}
                    />
                    <div className="d-flex align-items-center">
                        <Button
                            label={"Add Item"}
                            onClick={()=>{}}
                            classname="me-5"
                        />
                        <div>
                        <i className="fa fa-print print-icon" ></i>
                        </div>
                    </div>
                </div>
                <OrderItems 
                    markApproved={markApproved} 
                    markMissing={markMissing}
                    shippingDate={orderSummary?.shippingDate}
                />
            </div>
        </>
    )
}

export default Orders;