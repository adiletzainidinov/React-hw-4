import { useEffect, useState } from 'react';
import css from './Item.module.css';

const Item = () => {
  let items = [
    {
      item: 'item 1',
      item2: 'item 2',
      item3: 'item 3',
      item4: 'item 4',
      item5: 'item 5',
    },
  ];

  const [selectedItem, setShowItem] = useState(null);

  const handleClick = (selectedItem) => {
    setShowItem(selectedItem);
  };

  return (
    <>
      <div>
        <h1>Жетинчи уй тапшырма</h1>
        {items.map((item, index) => (
          <div className={css.item} key={index}>
            <p
              className={selectedItem === item.item ? css.selected : ''}
              onClick={() => handleClick(item.item)}
            >
              {item.item}
            </p>
            <p
              className={selectedItem === item.item2 ? css.selected : ''}
              onClick={() => handleClick(item.item2)}
            >
              {item.item2}
            </p>
            <p
              className={selectedItem === item.item3 ? css.selected : ''}
              onClick={() => handleClick(item.item3)}
            >
              {item.item3}
            </p>
            <p
              className={selectedItem === item.item4 ? css.selected : ''}
              onClick={() => handleClick(item.item4)}
            >
              {item.item4}
            </p>
            <p
              className={selectedItem === item.item5 ? css.selected : ''}
              onClick={() => handleClick(item.item5)}
            >
              {item.item5}
            </p>
          </div>
        ))}
        <p>You selected:{selectedItem}</p>
      </div>
    </>
  );
};

export default Item;
