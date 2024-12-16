import React, { useState } from 'react';
import './Sorting.css';

const Sorting = () => {
  const [activeSort, setActiveSort] = useState('cheapest'); // Стейт для активной сортировки

  const handleSortChange = (sortType) => {
    setActiveSort(sortType);
  };

  return (
    <section className="sorting">
      <button
        className={`sorting__button ${activeSort === 'cheapest' ? 'active' : ''}`}
        onClick={() => handleSortChange('cheapest')}
      >
        Самый дешевый
      </button>
      <button
        className={`sorting__button ${activeSort === 'fastest' ? 'active' : ''}`}
        onClick={() => handleSortChange('fastest')}
      >
        Самый быстрый
      </button>
    </section>
  );
};

export default Sorting;