import React,{ useState, useEffect} from 'react'

import InventoryPage from '../pages/InventoryPage';
import ShoppingCartPage from '../pages/ShoppingCartPage';
import FishStorePage from '../pages/FishStorePage';

const App = () => {

    const [inventory, setInventory] = useState([]);
    const [shoppingCart, setShoppingCart] = useState([]);
    const [total, setTotal] = useState();

    useEffect(() => {
        var restoredInventory = JSON.parse(localStorage.getItem('inventory'));
        if (restoredInventory !== null) {
            setInventory(restoredInventory.queue);
        } else {
            setInventory([])
        }

        var restoredCart = JSON.parse(localStorage.getItem('shoppingCart'));
        if (restoredCart !== null) {
            setShoppingCart(restoredCart.cart);
            setTotal(restoredCart.total);
        } else {
            setShoppingCart([])
        }
    }, []);

    return (
        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
            <FishStorePage inventory={inventory}/>
            <ShoppingCartPage shoppingCart={shoppingCart} total={total}/>
            <InventoryPage inventory={inventory}/>
        </div>
    )

}

export default App
