import { useState } from 'react';
import Button from '../Button/Button';
import css from './Upss.module.css';

const Upss = () => {
  const [upss, setChange] = useState('Open');

  function changeText() {
    setChange((prev) => (prev === 'Open' ? 'Close' : 'Open'));
    const upssElement = document.querySelector('.upss');
    upssElement.textContent = upss === 'Open' ? 'Upps!' : '';
  }

  return (
    <>
      <div>
        <h1>Тортунчу уй тапшырма</h1>
        <p className={css.upss}>{upss === 'Open' ? 'Upss!' : ''}</p>
        <Button text={upss} onClick={changeText} />
      </div>
    </>
  );
};

export default Upss;
