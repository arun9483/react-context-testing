import React from 'react';
import GrandChildThree from './GrandChildThree';

const ChildTwo: React.FC<{}> = () => {
  return (
    <div className="child-two-container">
      <h4>this is child two</h4>
      <GrandChildThree />
    </div>
  );
};

export default ChildTwo;
