import React, { useState } from 'react';

function Item({ data, counter }) {
  const { id, title, price, image } = data

  return <div className="item" key={id} style={{ 'left': `${(id-counter)*20}vw`}}>
    <div className="img_container">
      <img src="../imgs/img0.jpg" />
    </div>

    <p>hello everyone, this is a random text </p>
    <p>{id}</p>


  </div>
}

export default Item;
