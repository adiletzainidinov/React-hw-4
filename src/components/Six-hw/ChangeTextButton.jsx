import { useState } from 'react';
import Button from '../Button/Button';
import css from './ChangeTextButton.module.css';

const ChangeTextButton = () => {
  const [show, setShowText] = useState('HOME');

  function showTextHome() {
    setShowText('HOME');
  }
  function showTextABOUT() {
    setShowText('ABOUT');
  }
  function showTextCONTACT() {
    setShowText('CONTACT');
  }

  return (
    <>
    <div><h1>Алтынчы уй тапшырма</h1></div>
      <div className={css.showBtnPapa}>
        <Button text={'HOME'} onClick={showTextHome} />
        <Button text={'ABOUT'} onClick={showTextABOUT} />
        <Button text={'CONTACT'} onClick={showTextCONTACT} />
      </div>
      <div>
        <p className={css.showBtnP}>{show}</p>
      </div>
    </>
  );
};

export default ChangeTextButton;
