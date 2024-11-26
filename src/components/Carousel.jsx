import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { CAROUSELDATA } from '../data/carouselData';
import '../styles/carousel-component.css';

export default function Carousel() {
  return (
    <div>
      <div
        id='carouselExampleSlidesOnly'
        class='carousel slide'
        data-bs-ride='carousel'
      >
        <div class='carousel-inner'>
          {CAROUSELDATA.map((item) => {
            return (
              <div class='carousel-item active' key={item.id}>
                <img src={item.img} class='d-block w-100' alt={item.title} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
