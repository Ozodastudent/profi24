import React from 'react';
import "./cardList.css"
const Card = ({ title,image }) => (
    <div className="card_box">      
  <div className="card">
    <div className="card-content">
      <h3>{title}</h3>
    </div>
    <img src={image} alt={title} />
  </div>
    </div>
);

const CardList = ({ items }) => (
  <div className="card-list">
    {items?.map((item) => (
      <Card key={item.title} {...item} />
    ))}
  </div>
);

export default CardList;
