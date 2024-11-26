import React from 'react';
import Carousel from '../components/Carousel';
import Accordion from '../components/Accordion';
import '../styles/home-page.css';

export default function Home() {
  return (
    <div className='home-body '>
      <div className='c-container tw-col-start-3 tw-col-end-5 tw-row-start-1 tw-row-end-3 tw-m-5 '>
        <Carousel />
      </div>
      <div className='tw-col-start-1 tw-col-end-3 tw-row-start-1 tw-row-end-3 tw-m-5 md:tw-mt-28 tw-mt-2'>
        <Accordion />
      </div>
    </div>
  );
}
