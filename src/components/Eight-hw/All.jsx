import { useState } from 'react';
import Button from '../Button/Button';
import css from './All.module.css';

const All = () => {
  const [filter, setFilter] = useState('All');

  const handleFileterClick = (selectFilter) => {
    setFilter(selectFilter);
  };

  function renderTasks()  {
    if (filter === 'All') {
      return (
        <>
          <p>TASK 1 NOT COMPLETED</p>
          <p>TASK 2 COMPLETED</p>
          <p>TASK 3 NOT COMPLETED</p>
          <p>TASK 4 COMPLETED</p>
        </>
      );
    } else if (filter === 'Completed') {
      return (
        <>
          <p>TASK 2 COMPLETED</p>
          <p>TASK 4 COMPLETED</p>
        </>
      );
    } else if (filter === 'Uncompleted') {
      return (
        <>
          <p>TASK 1 NOT COMPLETED</p>
          <p>TASK 3 NOT COMPLETED</p>
        </>
      );
    }
  }

  return (
    <>
      <div>
        <h1>Сегизинчи уй тапшырма</h1>
        <div className={css.allPapa}>
          <Button text={'All'} onClick={() => handleFileterClick('All')} />
          <Button
            text={'Completed'}
            onClick={() => handleFileterClick('Completed')}
          />
          <Button
            text={'Uncompleted'}
            onClick={() => handleFileterClick('Uncompleted')}
          />
        </div>
        <div>{renderTasks()}</div>
      </div>
    </>
  );
};

export default All;
