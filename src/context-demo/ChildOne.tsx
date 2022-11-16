import React from 'react';
import GrandChildOne from './GrandChildOne';
import GrandChildTwo from './GrandChildTwo';

const ChildOne: React.FC<{}> = () => {
  return (
    <div className="child-one-container">
      <h4>this is child one</h4>
      <GrandChildOne />
      <GrandChildTwo />
    </div>
  );
};

export default ChildOne;
