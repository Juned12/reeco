import React from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";
import { avocado } from "../../../assets/images";
import { currency_formatter } from "../../../utils/currency_formatter";
import "./index.scss"

const OrderItems = ({
    markApproved,
    markMissing,
    shippingDate
}) => {
    const orderData = useSelector((state) => state.orderItem.orders)

    return (
        <>
            <div className="mt-4">
                <table>
                    <thead className="order-thead">
                        <tr>
                            <th></th>
                            <th>
                                Product Name
                            </th>
                            <th>
                                Brand
                            </th>
                            <th>
                                Price
                            </th>
                            <th>
                                Quantity    
                            </th>
                            <th>
                                Total
                            </th>
                            <th className="ps-4">
                                Status
                            </th>
                            <th>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orderData?.map((order)=>{
                                return (
                                        <tr key={order.id}>
                                            <td colSpan={1}>
                                                <img src={avocado} alt="" className="product-img"/>
                                            </td>
                                            <td colSpan={1} className="w-25">
                                                <div className="product-name">
                                                    {order?.productName}
                                                </div>
                                            </td>
                                            <td colSpan={1} className="brand-wrap">{order.brand}</td>
                                            <td colSpan={1}>{currency_formatter(order.price)}/6*1 LB</td>
                                            <td colSpan={1}>
                                                <span className="fw-bold">{order.quantity} </span>
                                                 x 6 x 1LB
                                            </td>
                                            <td colSpan={1}>{currency_formatter(order.total)}</td>
                                            <td colSpan={1} className="bg-light ps-3">
                                                <div
                                                    className={
                                                        classNames(
                                                            "status-chip",
                                                            ["Missing", "Missing-Urgent", "Urgent"].includes(order?.status) ?
                                                                "bg-danger" :
                                                                "bg-success")
                                                    }
                                                >
                                                    {order.status}
                                                </div>
                                            </td>
                                            <td className="bg-light text-end ps-3 pe-3">
                                                {
                                                    new Date(shippingDate) > new Date() &&
                                                    <>
                                                        <i 
                                                            className="fa fa-check me-3 pointer" 
                                                            style={{color:  order?.isApproved ?"green": "black"}}
                                                            aria-hidden="true"
                                                            onClick={()=>{
                                                                markApproved(order?.id)
                                                            }}    
                                                        />
                                                        <i 
                                                            className="fa fa-times me-3 pointer" 
                                                            aria-hidden="true"
                                                            onClick={()=>{
                                                                markMissing(order)
                                                            }}
                                                            style={{color: ["Missing", "Missing-Urgent"].includes(order?.status) ? "red": "black"}}
                                                        />
                                                        <span className="pointer">Edit</span>
                                                    </>
                                                }
                                            </td>

                                        </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>  
        </>
    )
}
export default OrderItems;