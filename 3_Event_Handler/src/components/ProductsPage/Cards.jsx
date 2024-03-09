import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Cards = () => {

    const [data, setData] = useState([]);
    const [newProduct, setNewProduct] = useState({
        Name: '',
        expiry: '',
        
        price: '',
        quantity: '',
    })

    let fetchData = () => {
        axios.get('http://localhost:3001/products').then((res) => {
            setData(res.data);
            console.log(res);
        })
    }

    useEffect(() => {
        fetchData()
    }, []);

    //Add-data
    const handleChange = (e) => {
        
        setNewProduct({
            ...newProduct,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post('http://localhost:3001/products', newProduct).then((res) =>{
            fetchData()
            setNewProduct({
                Name: '',
                expiry: '',
                
                price: '',
                quantity: '',
              });
        })        

    }


    return (
        <>
            <h3>Add New Product</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="Name"
                    placeholder="Name"
                    value={newProduct.Name}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="expiry"
                    placeholder="Expiry"
                    value={newProduct.expiry}
                    onChange={handleChange}
                />
                
                
                <input
                    type="text"
                    name="price"
                    placeholder="Price"
                    value={newProduct.price}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="quantity"
                    placeholder="Quantity"
                    value={newProduct.quantity}
                    onChange={handleChange}
                />
                <button type="submit">Add Product</button>
            </form>


            <div className="row">
                {

                    data.map((val, ind) => {
                        console.log(val);
                        return (
                            <div className="card">
                                <div className="card-header">
                                    <h3>{val.Name}</h3>
                                </div>
                                <div className="card-body">
                                    <p><strong>Expiry:</strong> {val.expiry}</p>
                                    <p><strong>Price:</strong> ${val.price}</p>
                                    <p><strong>Quantity:</strong> {val.quantity}</p>
                                </div>
                            </div>
                        )
                    })

                }
            </div>

        </>
    )
}

export default Cards;
