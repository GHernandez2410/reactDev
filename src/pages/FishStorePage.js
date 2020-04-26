import React, { useEffect, useState } from 'react';

import ProductList from '../components/ProductsList';

const FishStorePage = (props) => {
    const inventory = props.inventory

    return (
        <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden" style={{ flex: 1 }}>
            <div className="my-3 p-3">
                <h2 className="display-5">FISH STORE</h2>
                <p className="lead">OUR PRODUCT LIST</p>
            </div>
            <div className="bg-dark shadow-sm mx-auto menuComponent" >
                <ProductList inventory={inventory}/>
            </div>
        </div>

    )

}

export default FishStorePage;
