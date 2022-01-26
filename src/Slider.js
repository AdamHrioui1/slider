import React, { useState } from 'react';
import data from './Data'
import Item from './Item';

function Slider() {
  const [counter, setCounter] = useState(0)
  return <div>
      <h1>Slider</h1>
      <div className="wrapper">
        {
          data.map((item, index) => {
            return <Item key={index} data={item} counter={counter} />
          })
        }
      </div>

      <button onClick={() => setCounter(counter+1)} >L</button>
  </div>;
}

export default Slider;
