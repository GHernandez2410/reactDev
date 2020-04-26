import React from 'react';

import InventoryProduct from './InventoryProduct';

const InventoryList = (props) => {

    const products = props.inventory.map((product) => {
        return (
            <li class="list-group-item">
                <InventoryProduct product={product} />
            </li>
        )
    });

    return (
        <div className='row'>
            <ul class="list-group list-group-flush">
                {products}
            </ul>
        </div>
    )
}

export default InventoryList;