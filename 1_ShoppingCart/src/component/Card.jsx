import React, { useState } from "react";
import Count from './Count'

const Card = ({ data, deletcard }) => {
  console.log(data);
  
  return (
    <>
      {
        data.map((val, ind) => {
          return (
            <div className='col-md-3 mb-3'>
            <div className="card">
              <img src={val.imgSrc} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4>{val.id}</h4>
                <h5 className="card-title">{val.product_name}</h5>
                <p className="card-text">{val.description}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
                <a href="#" className="btn btn-primary ms-3" onClick={()=> deletcard(val.id)}>Delete</a>
              </div>

            </div>
            </div>
          )
        })
      }
    </>
  )
}
export default Card;

