import React from 'react'


const Card = (val) => {

    return (
        <div className='col-md-3'>
            <div class="card" style={{ width: '18rem' }}>

                <div class="card-content">
                    <h2 class="show-title">{val.title}</h2>
                    <p class="description">{val.desc}</p>
                    <a href="#" class="watch-now-btn">Watch Now</a>
                </div>
            </div>
        </div>
    )

}




export default Card
