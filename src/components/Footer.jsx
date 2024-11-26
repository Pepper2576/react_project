import React from 'react';

export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <div>
      <h5>&copy; Chris Pepper {date}</h5>
    </div>
  );
}
