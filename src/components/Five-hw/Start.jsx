import { useState } from 'react';
import Button from '../Button/Button';
import css from "./Start.module.css"

const Start = () => {

    const [isTrue, setShowSpinner] = useState(false)

    function showSpinner() {
        setShowSpinner(prev => !prev)
    }

  return (
    <>
      <div>
        <h1>Бешинчи уй тапшырма</h1>
        <Button text={'Start'} onClick={showSpinner} />
        <div class={isTrue ? css.loader : ''}></div>
      </div>
    </>
  );
};

export default Start;
