import React, { useEffect, useState } from 'react';
import data from './Data'
import Item from './Item';

function Slider() {
  const [counter, setCounter] = useState(0)
  const [width, setWidth] = useState(20)
  const [limitOfCounter, setLimitOfCounter] = useState(4)

  window.addEventListener('resize', (e) => {
    const w = e.target.innerWidth
    if(w >= 900) {
      setWidth(20)
      setLimitOfCounter(5)
    }
    else if(w < 900 && w > 800) {
      setWidth(25)
      setLimitOfCounter(4)
    }
    else if(w < 800 && w > 600) {
      setWidth(33)
      setLimitOfCounter(3)
    }
    else if(w < 600 && w > 510) {
      setWidth(50)
      setLimitOfCounter(2)
    }
    else if(w < 510) {
      setWidth(100)
      setLimitOfCounter(1)
    }
})

  useEffect(() => {
    console.log('yep');
  }, [width]);
  

  const increaseCounter = () => {
    if(counter >= data.length - limitOfCounter) {
      setCounter(counter)
    }
    else {
      setCounter(counter+1)
    }
  }

  const decreaseCounter = () => {
    if(counter === 0) {
      setCounter(0)
    }
    else {
      setCounter(counter-1)
    }
  }
  return <div>
      <h1>Slider</h1>
      <div className="wrapper">
        {
          data.map((item, index) => {
            return <Item key={index} data={item} counter={counter} width={width} />
          })
        }
      </div>

      <button onClick={decreaseCounter}>L</button>
      <button onClick={increaseCounter}>R</button>
  </div>;
}

export default Slider;
