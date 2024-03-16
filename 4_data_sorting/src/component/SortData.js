// import React from 'react'
import React, { useState } from 'react';
import {Data} from './Data';

const ProductTable = () => {
    const [searchPrice, setSearchPrice] = useState('');
    const [searchName, setSearchName] = useState('');
  
    const filteredProducts = Data.filter(Data => {
      return (
        Data.price >= parseInt(searchPrice) && // Filtering by price
        Data.name.toLowerCase().includes(searchName.toLowerCase()) // Filtering by name
      );
    });
  
    return (
      <div>
        <input
          type="text"
          placeholder="Search by price"
          value={searchPrice}
          onChange={e => setSearchPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Search by name"
          value={searchName}
          onChange={e => setSearchName(e.target.value)}
        />
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map(Data => (
              <tr key={Data.id}>
                <td>{Data.name}</td>
                <td>{Data.price}</td>
                <td>{Data.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  export default ProductTable;


    