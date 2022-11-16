import React from 'react';

import GrandParent from './GrandParent';
import { AgeProvider } from './AgeContext';

import './GreatGrandParent.css';

const GreatGrandParent: React.FC<{}> = () => {
  return (
    <div className="great grand parent-container">
      <h2>this is great grand parent</h2>
      <AgeProvider>
        <GrandParent />
      </AgeProvider>
    </div>
  );
};

export default GreatGrandParent;
