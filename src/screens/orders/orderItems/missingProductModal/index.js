import React from "react";
import Modal from "../../../../component/modal";
import { trimString } from "../../../../utils/trimString";

const MissingProductModal = ({
    productName,
    toggleModal,
    isOpen,
    updateStatus
}) => {

    return (
        <>
            <Modal
                isOpen={isOpen}
                title={"Missing Product"}
                className={"p-4 missing-product-modal"}
                onClose={toggleModal}
            >
                <div className="mt-3">
                    {`Is '${trimString(productName, 30)}' urgent ?`}
                </div>
                <div className="text-end fw-bold mt-5">
                    <span className="me-5 pointer" onClick={()=>updateStatus(false)}>
                        No
                    </span>
                    <span className="pointer" onClick={()=>updateStatus(true)}>
                        Yes
                    </span>
                </div>
            </Modal>  
        </>
    )
}
export default MissingProductModal;