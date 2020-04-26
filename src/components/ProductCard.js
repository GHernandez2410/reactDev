import React from 'react';


const ProductCard = (props) => {
    const product = props.product;

    const getAmount = (array,name) => {
        return array.filter((item) => (item.name === name)).length;
    }

    const getPosition = (array,name) => {
        for (let i = 0; i < array.length; i++) {
            if (array[i].name === name) {
                return i;
            }
        }
    }

    const getTotal = (array) => {
        let total = 0;
        for (let i = 0; i < array.length; i++) {
            if(array[i].amount>1){
                total = parseInt(total) + parseInt(array[i].price * array[i].amount);
            } else {
                total = parseInt(total) + parseInt(array[i].price);
            }
        }
        return total;
    }

    const addToCart = () => {
        var restoredCart = JSON.parse(localStorage.getItem('shoppingCart'));
        let amount = getAmount(restoredCart.cart,product.name);
        if(amount !== 0){
            restoredCart.cart[getPosition(restoredCart.cart,product.name)].amount = 
                restoredCart.cart[getPosition(restoredCart.cart,product.name)].amount + 1;
        } else {
            restoredCart.cart.push({
                name: product.name,
                amount: 1,
                price: product.price,
            });
        }

        let total = getTotal(restoredCart.cart);
        restoredCart.total = total;

        localStorage.setItem('shoppingCart', JSON.stringify(restoredCart));
    }

    return (
        <div className="card mb-3" style={{maxWidth: 540}}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src="..." className="card-img" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{product.name}
                        <p className="card-text">${product.price}</p>
                        </h5>
                        <p className="card-text">{product.desc}</p>
                    </div>
                </div>
            </div>
            <button  class="btn btn-secondary" onClick={addToCart}>ADD TO CART</button>
        </div>
    )
}

export default ProductCard;