import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles/product-card.css';

const ProductCard = (props) => {
  return (
    <div className='card' key={props.id}>
      <img src={props.img} className='card-img-top' alt={props.title} />
      <div className='card-body'>
        <h3 className='card-title'>{props.title}</h3>
        <p className='card-text'>{props.summery}</p>
        <div className='btn-container tw-flex tw-flex-row'>
          <a href={props.link} className='btn btn-primary' target='_blank'>
            Hosted Site
          </a>
          <a href={props.repo} className='btn btn-primary' target='_blank'>
            Git Repository
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
