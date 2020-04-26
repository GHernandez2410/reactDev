import React, { useState } from 'react';


const InventoryProduct = (props) => {

    const product = props.product;

    const [name, setName] = useState(product.name);
    const [price, setPrice] = useState(product.price);
    const [status, setStatus] = useState(product.status);
    const [desc, setDesc] = useState(product.desc);
    const [image, setImage] = useState(product.image);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        var restoredInventory = JSON.parse(localStorage.getItem('inventory'));
        restoredInventory.queue.push({
            name: name,
            price: price,
            status: status,
            desc: desc,
            image: image
        });

        localStorage.setItem('inventory', JSON.stringify(restoredInventory));
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <input type="text" class="form-control" value={name} placeholder="Name" onChange={e => setName(e.target.value)} />
                    </div>
                    <div class="form-group col-md-4">
                        <input type="text" class="form-control" value={price} placeholder="Price" onChange={e => setPrice(e.target.value)} />
                    </div>
                    <div class="form-group col-md-2">
                        <select id="inputState" class="form-control" value={status} placeholder="Status" onChange={e => setStatus(e.target.value)}>
                            <option selected>available</option>
                            <option>unavailable</option>
                        </select>
                    </div>
                </div>

                <div class="form-group">
                    <input type="text" class="form-control" value={desc} placeholder="Desc" onChange={e => setDesc(e.target.value)} />
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" value={image} placeholder="Image" onChange={e => setImage(e.target.value)} />
                </div>

                {/*                 <button type="submit" class="btn btn-primary" disabled={isEmpty}>LOAD SAMPLE DATA</button>
 */}
            </form>
        </div>
    )
}

export default InventoryProduct;