import { useState } from 'react';
import css from './Checkbox.module.css';

const Checkbox = () => {
  const [isChecked, setChangeBac] = useState(false);

  function changeBac() {
    setChangeBac((prev) => !prev);
    document.body.style.backgroundColor = !isChecked ? 'black' : 'white';

    const h1Element = document.querySelectorAll('h1');
    h1Element.forEach((h1Element) => {
      h1Element.style.color = !isChecked ? 'white' : 'black';
    });

    const pElement = document.querySelectorAll('p');
    pElement.forEach((pElement) => {
        pElement.style.color = !isChecked ? 'white' : 'black';
    });
  }

  return (
    <>
      <div className={css.checkbox}>
        <h1>Учунчу уй тапшырма</h1>
        <input type="checkbox" onChange={changeBac} checked={isChecked} />
      </div>
    </>
  );
};

export default Checkbox;
