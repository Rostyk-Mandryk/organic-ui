import React, { useState } from 'react';
import Modal from 'react-modal';
import PropTypes from "prop-types";
import './product.scss';
import Stars from '../stars/stars';

function Product({ id, name, price, priceBeforeDiscount, stars, type }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    if (isModalOpen) {
        return (
            <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                contentLabel="Products Information"
                className="Products-Modal"
            >
                <div className="card_veg">
                    <span className="type">{type}</span>
                    <img className='prod-image' src={`${process.env.PUBLIC_URL}/images/${id}.svg`} alt='product'/>
                    <span className="name">{name}</span>
                    <hr className="my-line" />
                    <div className="pr">
                        <span className="pr_priceBefore">${priceBeforeDiscount}.00</span>
                        <span className="pr_price">${price}.00</span>
                        <span className="pr_stars"><Stars stars={stars} /></span>
                    </div>
                </div>
            </Modal>
        )
    }

    return (
        <div className="card_veg" onClick={() => setIsModalOpen(true)}>
            <span className="type">{type}</span>
            <img className='prod-image' src={`${process.env.PUBLIC_URL}/images/${id}.svg`} alt='product'/>
            <span className="name">{name}</span> 
            <hr className="my-line" />
            <div className="pr">
            <span className="pr_priceBefore">${priceBeforeDiscount}.00</span>
            <span className="pr_price">${price}.00</span>
            <span className="pr_stars"><Stars stars={stars} /></span>
            </div>
        </div>
    )
}

Product.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    priceBeforeDiscount: PropTypes.number,
    stars: PropTypes.number,
    type: PropTypes.string
};

export default Product;

