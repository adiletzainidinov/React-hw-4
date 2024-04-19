import { useState } from 'react';
import Button from '../Button/Button';
import css from './IncrDecr.module.css';

const IncrDecr = () => {
  const [incrDecr, setShowResult] = useState(0);

  function increment() {
    setShowResult((prev) => prev + 1);
  }

  function decrement() {
    setShowResult((prev) => prev - 1);
  }

  return (
    <>
      <div>
        <h1>Экинчи уй тапшырма</h1>
        <div className={css.incrDecr}>
          <Button text={'increment'} onClick={increment} />
          <p>{incrDecr}</p>
          <Button text={'decrement'} onClick={decrement} />
        </div>
      </div>{' '}
    </>
  );
};

export default IncrDecr;
