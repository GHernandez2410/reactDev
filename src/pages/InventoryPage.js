import React,{ useEffect, useState } from 'react';

import InventoryList from '../components/InventoryList';
import NewFish from '../components/NewFish';

const InventoryPage = (props) => {
    const inventory = props.inventory;

    return (
        <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden" style={{ flex: 1 }}>
            <div className="my-3 p-3">
                <h2 className="display-5">INVENTORY</h2>
                <p className="lead"></p>
            </div>
            <div className="bg-light shadow-sm mx-auto menuComponent" >
                <InventoryList inventory={inventory} />
            </div>
            <div className="my-3 p-3">
                <h2 className="display-5">ADD A NEW FISH</h2>
                <NewFish />
            </div>
        </div>
    )

}

export default InventoryPage;
