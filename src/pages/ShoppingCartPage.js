import React from 'react';

const ShoppingCartPage = (props) => {
    const shoppingCart = props.shoppingCart;
    const total = props.total;
    
    const cart = shoppingCart.map((product) => {
        return (
            <li class="list-group-item">
                {product.amount} x {product.name}  $ {product.price}
            </li>
        )
    });


    return (
        <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden" style={{ flex: 1 }}>
            <div className="my-3 p-3">
                <h2 className="display-5">SHOPPING CART</h2>
                <p className="lead">{cart}</p>
            </div>
            <div className="bg-light shadow-sm mx-auto menuComponent" >
                <p className="lead">{total}</p>
            </div>
        </div>
    )

}

export default ShoppingCartPage;
