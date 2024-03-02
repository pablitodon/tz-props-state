import React, { useState } from 'react';
import ChildComponent from './components/ChildComponent';
import SiblingComponent from './components/SiblingComponent';

const ParentComponent = () => {

  let [count, setCount] = useState(0);

  const uppCount = () => setCount(count + 1);
  const lowCount = () => setCount(count > 0 ? count - 1 : 0);
  const reset = () => setCount(0);
  const randomNum = () => setCount(count = Math.floor(Math.random() * 10) + 1);

  const name = 'Pavel';

  return (
    <div className='wrapper'>
    
      <p>Счёт: {count}</p>
      <button onClick={uppCount}>Увеличить</button>
      <button onClick={reset}>Сбросить</button>
      <button onClick={randomNum}>Случайное число</button>
      <button onClick={lowCount}>Уменьшить</button>
      
      <ChildComponent
        name={name}
        count={count}
      />
      
      <SiblingComponent/>

    </div>
    

  );
}

export default ParentComponent;
