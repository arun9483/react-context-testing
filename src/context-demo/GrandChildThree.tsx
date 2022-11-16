import React from 'react';
import { useAgeContext } from './AgeContext';

const GrandChildThree: React.FC<{}> = () => {
  const { age, setAge } = useAgeContext();

  return (
    <div className="grand-child-three-container">
      <h5>this is grand child three</h5>
      <span aria-label="grand-child-three">age is {age}</span>
      <hr />
      <button
        onClick={() => {
          setAge(30);
        }}
      >
        change age to 30
      </button>
    </div>
  );
};

export default GrandChildThree;
