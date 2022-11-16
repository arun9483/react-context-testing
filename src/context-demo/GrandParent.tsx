import React from 'react';

import { useAgeContext } from './AgeContext';
import ChildOne from './ChildOne';
import ChildTwo from './ChildTwo';

const GrandParent: React.FC<{}> = () => {
  const { age, setAge } = useAgeContext();

  return (
    <div className="grand-parent-container">
      <h3>this is grand parent</h3>
      <span aria-label="grand-parent">age is {age}</span>
      <hr />
      <button
        onClick={() => {
          setAge(100);
        }}
      >
        change age to 100
      </button>
      <hr />
      <ChildOne />
      <ChildTwo />
    </div>
  );
};

export default GrandParent;
