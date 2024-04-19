import { useState } from 'react';
import Button from '../Button/Button';

const Open = () => {
  const [changeText, setChangeText] = useState('Open');

  function changeTextButton() {
    setChangeText((prev) => (prev === 'Open' ? 'Close' : 'Open'));
  }

  return (
    <>
      <div>
        <h1>Биринчи уй тапшырма</h1>
        <Button text={changeText} onClick={changeTextButton} />
      </div>
    </>
  );
};

export default Open;
