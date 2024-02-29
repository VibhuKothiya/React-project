import React, { useState } from 'react'
// import { data } from '../data'
import Card from './Card';


const Count = () => {
    const [data, setCards] = useState([
        {
            id: 1,
            product_name: "T-Max Men Solid Crew Neck Lounge T-Shirt",
            price: 149,
            description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, dicta!",
            available: true,
            imgSrc: "img/product2-300x300.png",
            productNumber: 1,
            rating: 3,
        },
    ]);

    const add = () => {

        const newCard = {

            id: `${data.length + 1}`,
            product_name: `Max Men Textured Slim Fit Structured T-Shirt ${data.length + 1}`,
            price: 349,
            description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit ${data.length + 1}`,
            available: true,
            imgSrc: "img/product1-300x300.png",
            productNumber: 1,
            rating: 4.8,
        };
        setCards([...data, newCard]);
    }

    const deletcard = (id) => {
        console.log(id);
        setCards(data.filter(data => data.id !== id));
    };

    return (
        <>
            <button className='btn btn-primary mb-4' onClick={add} >Add Product</button>
            <div className="row">
                <Card data={data} deletcard={deletcard} />
            </div>
        </>
    )
}
export default Count;