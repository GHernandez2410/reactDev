import React, { useState } from 'react';


const NewFish = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [status, setStatus] = useState('');
    const [desc, setDesc] = useState('');
    const [image, setImage] = useState('');

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

    const loadData = () => {
        //load Inventory
        let inventory = {queue:[]};
        let item1 = {
            name: 'fish1',
            price: '111',
            status: 'available',
            desc: 'desc fish1',
            image: 'image fish1'
        };
        let item2 = {
            name: 'fish2',
            price: '222',
            status: 'unavailable',
            desc: 'desc fish2',
            image: 'image fish2'
        };
        inventory.queue.push(item1);
        inventory.queue.push(item2);
        localStorage.setItem(`inventory`, JSON.stringify(inventory));

        //load shopping cart
        let shoppingCart = {cart:[], total: 0};
        localStorage.setItem(`shoppingCart`, JSON.stringify(shoppingCart));

    }

    const isEmpty = () => {
        let disable = (name === '' ||
            price === '' ||
            status === '' ||
            desc === '' ||
            image === '')
        console.log(disable)
        return disable;
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

                <div class="form-group">
                    <button type="submit" class="btn btn-primary">ADD FISH</button>
                </div>

                {/*                 <button type="submit" class="btn btn-primary" disabled={isEmpty}>LOAD SAMPLE DATA</button>
 */}
            </form>
            
            <button  class="btn btn-primary" onClick={loadData} >LOAD SAMPLE DATA</button>

        </div>
    )
}

export default NewFish;