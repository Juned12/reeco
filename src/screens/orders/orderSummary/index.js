import React from "react";
import { currency_formatter } from "../../../utils/currency_formatter";
import "./index.scss"

const OrderSummary = ({
    orderSummary
}) => {
    
    
    return (
        <>
            <div className="order-summary-wrap ms-5 me-5">
                <div className="order-summary-box">
                    <div className="order-summary-head">
                        Supplier
                    </div>
                    <div className="order-summary-content">
                        {orderSummary?.supplier}
                    </div>
                </div>
                <div className="border-end ms-4 me-4" />
                <div className="order-summary-box">
                    <div className="order-summary-head">
                        Shipping Date
                    </div>
                    <div className="order-summary-content">
                        {new Date(orderSummary?.shippingDate).toDateString()}
                    </div>
                </div>
                <div className="border-end ms-4 me-4" />
                <div className="order-summary-box">
                    <div className="order-summary-head">
                        Total
                    </div>
                    <div className="order-summary-content">
                        {currency_formatter(orderSummary?.total)}
                    </div>
                </div>
                <div className="border-end ms-4 me-4" />
                <div className="order-summary-box">
                    <div className="order-summary-head">
                        Category
                    </div>
                    <div className="order-summary-content">
                        East Coast fruits & vegetables
                    </div>
                </div>
                <div className="border-end ms-4 me-4" />
                <div className="order-summary-box">
                    <div className="order-summary-head">
                        Department
                    </div>
                    <div className="order-summary-content">
                        {orderSummary?.department}
                    </div>
                </div>
                <div className="border-end ms-4 me-4" />
                <div className="order-summary-box">
                    <div className="order-summary-head">
                        Status
                    </div>
                    <div className="order-summary-content">
                        {orderSummary?.status}
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderSummary;