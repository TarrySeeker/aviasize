import React from 'react';
import './Filters.css';

const Filters = () => {
  return (
    <section className="filters">
      <h2 className="filters__title">Количество пересадок</h2>
      <form className="filters__form">
        <label className="filters__label">
          <input type="checkbox" name="stops" value="all" />
          Все
        </label>
        <label className="filters__label">
          <input type="checkbox" name="stops" value="0" />
          Без пересадок
        </label>
        <label className="filters__label">
          <input type="checkbox" name="stops" value="1" />
          1 пересадка
        </label>
        <label className="filters__label">
          <input type="checkbox" name="stops" value="2" />
          2 пересадки
        </label>
      </form>
    </section>
  );
};

export default Filters;