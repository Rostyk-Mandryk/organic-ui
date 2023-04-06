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
                <button onClick={() => setIsModalOpen(false)}>X</button>
                <span>asddadas: {name} || </span>
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
            <hr className="my-line" />
            <div className="pr">
            <span className="pr_priceBefore">${priceBeforeDiscount}.00</span>
            <span className="pr_price">${price}.00</span>
            <span className="pr_stars"><Stars /></span>
            </div>
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

