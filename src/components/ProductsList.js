import React from 'react';

import ProductCard from './ProductCard';

const ProductsList = (props) => {
    const products = props.inventory.map((product) => {
        return (
            <li class="list-group-item">
                <ProductCard product={product} />
            </li>
        )
    });

    return (
            <ul class="list-group list-group-flush">
                {products}
            </ul>
    )
}

export default ProductsList;