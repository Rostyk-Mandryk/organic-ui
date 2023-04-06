import React, { useEffect, useState } from 'react';
import './categories.scss';
import { getProducts } from "../../api/dataApi";
import Product from "../../components/product/product";

function Categories() {
    const [showMore, setShowMore] = useState(false);
    const [isDataLoading, setIsDataLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [initialProductsLoaded, setInitialProductsLoaded] = useState(false);
    const [areAllProductsLoaded, setAreAllProductsLoaded] = useState(false);
    const [productsInfo, setProductsInfo] = useState([]);

    useEffect(() => {
        const initialProductsLoad = async () => {
            try {
                const products = await getProducts(false);
                setProductsInfo(products);
                setIsDataLoading(false);
                setInitialProductsLoaded(true);
            } catch (error) {
                console.error('Error occurred while loading products data: ', error);
                setHasError(true);
            }
        };
        initialProductsLoad();
    }, []);

    useEffect(() => {
        const loadAllProducts = async () => {
            try {
                const products = await getProducts(true);
                setProductsInfo(products);
                setIsDataLoading(false);
                setAreAllProductsLoaded(true);
            } catch (error) {
                console.error('Error occurred while loading products data: ', error);
                setHasError(true);
            }
        }
        if (!areAllProductsLoaded && initialProductsLoaded && showMore) {
            setIsDataLoading(true);
            loadAllProducts();
        }
    }, [showMore, areAllProductsLoaded]);

    if (hasError) {
        // Build some error page with JSX/SCSS
        return 'Build some Error page component and return it here';
    }

    if (isDataLoading) {
        // Draw some spinner with JSX/SCSS
        return 'Spinner';
    }

    console.log({productsInfo});
    // products info - your DATA to render in JSX

    return (
        <div className='categories-container'>
            <h1>Categories</h1>
            <h2>Our Products</h2>
            <div className="product_card">
                {productsInfo.map(({ name, price, priceBeforeDiscount, stars, type }) => (
                    <div>
                        <Product
                            name={name}
                            price={price}
                            priceBeforeDiscount={priceBeforeDiscount}
                            stars={stars}
                            type={type}
                        />
                    </div>
                ))}
            </div>
            <button onClick={() => setShowMore(!showMore)}>Load more</button>
        </div>
    );
}

export default Categories;
