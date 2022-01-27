import React, { useState } from 'react';

function Item({ data, counter, width }) {
  const { id, title, price, image } = data
  console.log(width);

  return <div className="item" key={id} style={{ 'left': `${(id-counter)*width}vw`, 'width': `${width}vw`, 'height': `${width}vw`}}>
    <div className="img_container">
      <img src="../imgs/img0.jpg" />
    </div>

    <p>hello everyone, this is a random text </p>
    <p>{id}</p>

  </div>
}

export default Item;
