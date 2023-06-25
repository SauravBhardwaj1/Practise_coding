import React, { useState } from 'react';

const ParentComponent = () => {
  const [propValue, setPropValue] = useState('Initial Value');

  const handleChangePropValue = () => {
    setPropValue('New Value');
  };

  return (
    <div>
      <ChildComponent propValue={propValue} />
      <button onClick={handleChangePropValue}>Change Prop Value</button>
    </div>
  );
};

const ChildComponent = ({ propValue }) => {
  return <div>{propValue}</div>;
};

export default ParentComponent;
