import React from 'react';
import ProductCard from '../components/ProductCard';
import { DATA } from '../data/data';
import '../styles/product-page.css';

const Products = () => {
  return (
    <div className='card-container tw-flex md:tw-flex-row tw-flex-col tw-justify-center md:tw-items-stretch tw-items-center'>
      {DATA.map((item) => {
        return (
          <ProductCard
            id={item.id}
            img={item.img}
            title={item.title}
            author={item.author}
            summery={item.summary}
            link={item.url}
            repo={item.repo}
          />
        );
      })}
    </div>
  );
};

export default Products;
