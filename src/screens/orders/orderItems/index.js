import React, { useState } from "react";
import { cart } from "../../../assets/images";
import "./index.scss"

const OrderItems = ({
    orders
}) => {

    const [orderData, setOrderData] = useState([])
    return (
        <>
            <div className="mt-4">
                <table className="table">
                    <thead className="order-thead">
                        <tr>
                            <th />
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
                            <th>
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <img src={cart} alt="" />
                            </td>
                            <td>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            </td>
                            <td>Hormely BLack lable and Inc</td>
                            <td>$60 / 6 * 1 LB</td>
                            <td>
                                <span>0</span>
                                x6x1LB
                            </td>
                            <td>0</td>
                            <td>
                                <div className="text-end">

                                </div>
                            </td>

                        </tr>
                    </tbody>
                </table>
            </div>  
        </>
    )
}
export default OrderItems;