/**
 * Created by GIFT MSIGWA.
 * Project : frontend
 * GitHub username: gisacc54
 * Date: 27/11/2022
 * Time: 11:01 AM
 */

import React from 'react';
import Modal from "../../../elements/modal/Modal.";
import ModalHeader from "../../../elements/modal/ModalHeader";
import RequestProductsForm from "../forms/RequestProductsForm";



const RequestProductModal = ({onCloseModal}) => {
    return (
        <Modal onCloseModal={onCloseModal}>
            <ModalHeader onCloseModal={onCloseModal} title="Request Phone"/>
            <RequestProductsForm onCloseModal={onCloseModal}/>
        </Modal>
    );
};

export default RequestProductModal;