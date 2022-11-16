import React from 'react';
import { useAgeContext } from './AgeContext';

const GrandChildOne: React.FC<{}> = () => {
  const { age, setAge } = useAgeContext();
  return (
    <div className="grand-child-one-container">
      <h5>this is grand child one</h5>
      <span aria-label="grand-child-one">age is {age}</span>
      <hr />
      <button
        onClick={() => {
          setAge(10);
        }}
      >
        change age to 10
      </button>
    </div>
  );
};

export default GrandChildOne;
