import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Accordion() {
  return (
    <div>
      <div className='accordion accordion-flush' id='accordionFlushExample'>
        <div className='accordion-item'>
          <h2 className='accordion-header'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#flush-collapseOne'
              aria-expanded='false'
              aria-controls='flush-collapseOne'
            >
              About Me
            </button>
          </h2>
          <div
            id='flush-collapseOne'
            className='accordion-collapse collapse'
            data-bs-parent='#accordionFlushExample'
          >
            <div className='accordion-body'>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aliquid unde corporis ex sit, omnis, aspernatur excepturi
                corrupti qui rem reprehenderit eveniet? Numquam, adipisci
                dolorem debitis quas necessitatibus consequuntur architecto,
                placeat nesciunt nisi dolorum quidem dolor aliquid obcaecati
                maxime vel molestiae.
              </p>
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#flush-collapseTwo'
              aria-expanded='false'
              aria-controls='flush-collapseTwo'
            >
              My Work
            </button>
          </h2>
          <div
            id='flush-collapseTwo'
            className='accordion-collapse collapse'
            data-bs-parent='#accordionFlushExample'
          >
            <div className='accordion-body'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                ratione adipisci odit vero nam natus voluptates placeat ipsa
                itaque veritatis. Modi officiis totam ipsam laborum aperiam
                perferendis error voluptas architecto officia! Eaque quod autem
                aspernatur, quibusdam quae ad recusandae odio dolor facilis ut
                ab suscipit nemo in id quos laboriosam harum adipisci ex odit
                repudiandae.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
