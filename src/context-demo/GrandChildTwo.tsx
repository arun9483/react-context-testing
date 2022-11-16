import React from 'react';
import { useAgeContext } from './AgeContext';

const GrandChildTwo: React.FC<{}> = () => {
  const { age } = useAgeContext();

  return (
    <div className="grand-child-two-container">
      <h5>this is grand child two</h5>
      <span aria-label="grand-child-two">age is {age}</span>
    </div>
  );
};

export default GrandChildTwo;
