import React, { useState } from 'react';
import Modal from 'react-modal';
import PropTypes from "prop-types";
import './product.scss';
import Stars from '../stars';


function Product({ name, price, priceBeforeDiscount, stars, type }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    if (isModalOpen) {
        return (
            <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                contentLabel="Products Information"
            >
                <button onClick={() => setIsModalOpen(false)}>close</button>
                <span>name: {name} || </span>
                <span>price: {price} || </span>
                <span>priceBeforeDiscount: {priceBeforeDiscount} || </span>
                <span>stars: {stars} || </span>
                <span>type: {type} || </span>
            </Modal>
        )
    }

    return (
        <div className="card_veg" onClick={() => setIsModalOpen(true)}>
            <span className="type">{type}</span>
            <span className="name">{name}</span> 
            <span className="price">${price}.00</span>
            <span className="priceBefore">${priceBeforeDiscount}.00</span>
            <span className="stars"><Stars /></span>
        </div>
    )
}

Product.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    priceBeforeDiscount: PropTypes.number,
    stars: PropTypes.number,
    type: PropTypes.string
};

export default Product;

