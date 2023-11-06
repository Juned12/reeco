import React from "react";
import Button from "../../component/button";
import "./index.scss"
import OrderSummary from "./orderSummary";
import TextInput from "../../component/textInput";
import OrderItems from "./orderItems";

const Orders = () => {

    return (
        <>
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
                        <i className="fa fa-print"></i>
                        </div>
                    </div>
                </div>
                <OrderItems />
            </div>
        </>
    )
}

export default Orders;