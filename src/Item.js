import React, { useState } from 'react';

function Item({ data, counter, width }) {
  const { id, name, price, img } = data

  return <div className="item" key={id} style={{ 'left': `${(id-counter)*width}vw`, 'width': `${width}vw`, 'height': `${width}vw`}}>
    <div className="img_container">
      <img src={img} />
    </div>

    <h2>{name}</h2>
    <span>${price.toLocaleString()}.00</span>

  </div>
}

export default Item;
