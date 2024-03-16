import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Cards = () => {

    const [data, setData] = useState([]);
    const [view, setView] = useState({})
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

        axios.post('http://localhost:3001/products', newProduct).then((res) => {
            fetchData()
            setNewProduct({
                Name: '',
                expiry: '',
                price: '',
                quantity: '',
            });
        })

    }
    const deleteData = (id) => {
        axios.delete(`http://localhost:3001/products/${id}`).then((res) => {
            setData(data.filter((ele) => ele.id !== id))
        });
    }

    const viewData = (ind) => {
        let user = data[ind]
        setView(user);
    }

    const updateHandle = (e) =>{
        setView({...view, [e.target.name] : e.target.value});
    }


        const updatechange = (() =>{
            axios.put(`http://localhost:3001/products/${view.id}`, view).then((res)=>{
            setData(
                data.map((val,ind)=>{
                    if(val.id === res.data.id){
                        return res.data;
                    }
                    else{
                        return val;
                    }
                })
            )
        })
        })

        
        

    console.log(view);



    return (
        <>
            <h3>Add New Product</h3>
            <form onSubmit={handleSubmit}>
                <input
                    className='m-1'
                    type="text"
                    name="Name"
                    placeholder='Name'
                    value={newProduct.Name}
                    onChange={handleChange}
                    required
                />
                <input
                    className='m-1'
                    type="text"
                    name="expiry"
                    placeholder='Expiry'
                    value={newProduct.expiry}
                    onChange={handleChange}
                    required
                />


                <input
                    className='m-1'
                    type="text"
                    name="price"
                    placeholder="Price"
                    value={newProduct.price}
                    onChange={handleChange}
                    required
                />
                <input
                    className='m-1'
                    type="text"
                    name="quantity"
                    placeholder="Quantity"
                    value={newProduct.quantity}
                    onChange={handleChange}
                    required
                />
                <button type="submit" className='p-1 rounded-2 m-2'>Add Product</button>
            </form>

            {/* Update-data */}

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div className="modal-content">
                        <div class="modal-header d-block">
                            <h3>Update - Product</h3>

                            <input
                                className='m-1'
                                type="text"
                                name="Name"
                                placeholder="Name"
                                value={view.Name}
                                onChange={updateHandle}

                            />
                            <input
                                className='m-1'
                                type="text"
                                name="expiry"
                                placeholder="Expiry"
                                value={view.expiry}
                                onChange={updateHandle}

                            />


                            <input
                                className='m-1'
                                type="text"
                                name="price"
                                placeholder="Price"
                                value={view.price}
                                onChange={updateHandle}

                            />
                            <input
                                className='m-1'
                                type="text"
                                name="quantity"
                                placeholder="Quantity"
                                value={view.quantity}
                                onChange={updateHandle}

                            />
                            <button type="submit" className='p-1 rounded-2 m-2' data-bs-dismiss="modal" onClick={updatechange}>Update</button>
                            <button type="submit" className='p-1 rounded-2 m-2' data-bs-dismiss="modal">Cancle</button>
                        </div>
                    </div>
                </div>
            </div>




            <div className="row">
                {

                    data.map((val, ind) => {
                        // console.log(val);
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
                                <div className="update p-3">
                                    <button onClick={() => deleteData(val.id)} className='m-2 p-1 rounded-2'>Delete</button>
                                    <button onClick={() => viewData(ind)} className='m-2 p-1 rounded-2' data-bs-toggle="modal" data-bs-target="#exampleModal">View</button>
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
