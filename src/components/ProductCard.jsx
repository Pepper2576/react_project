import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles/product-card.css';

const ProductCard = (props) => {
  return (
    <div class='card' key={props.id}>
      <img src={props.img} class='card-img-top' alt={props.title} />
      <div class='card-body'>
        <h3 class='card-title'>{props.title}</h3>
        <p class='card-text'>{props.summery}</p>
        <div className='btn-container tw-flex tw-flex-row'>
          <a href={props.link} class='btn btn-primary' target='_blank'>
            Hosted Site
          </a>
          <a href={props.repo} class='btn btn-primary' target='_blank'>
            Git Repository
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
