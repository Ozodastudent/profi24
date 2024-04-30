import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./filter.css"

function Filter() {
  const [activeFilter, setActiveFilter] = useState(null); 

  const handleFilterClick = (filterText) => {
    setActiveFilter(filterText); 
  };

  return (
    <div className="filter_part">
      <ul className="filter">
        <li
          className={`filter_item ${activeFilter === 'Установить розетку' ? 'active' : ''}`}
          onClick={() => handleFilterClick('Установить розетку')}
        >
          <Link to="#">
            <p className="filter_text">Установить розетку</p>
          </Link>
        </li>
        <li
          className={`filter_item ${activeFilter === 'Мастер на час' ? 'active' : ''}`}
          onClick={() => handleFilterClick('Мастер на час')}
        >
          <Link to="#">
            <p className="filter_text">Мастер на час</p>
          </Link>
        </li>
        <li
          className={`filter_item ${activeFilter === 'Уборка квартиры' ? 'active' : ''}`}
          onClick={() => handleFilterClick('Уборка квартиры')}
        >
          <Link to="#">
            <p className="filter_text">Уборка квартиры</p>
          </Link>
        </li>
        <li
          className={`filter_item ${activeFilter === 'Починить кондиционер' ? 'active' : ''}`}
          onClick={() => handleFilterClick('Починить кондиционер')}
        >
          <Link to="#">
            <p className="filter_text">Починить кондиционер</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Filter;
