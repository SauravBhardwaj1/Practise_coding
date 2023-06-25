
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFeature } from './actions';

const FeatureToggle = () => {
  const dispatch = useDispatch();
  const featureEnabled = useSelector((state) => state.featureEnabled);

  const handleToggle = () => {
    const toggledValue = !featureEnabled;
    dispatch(toggleFeature(toggledValue));

    // Perform side effects based on the toggledValue
    if (toggledValue) {
      // Side effect when toggle is turned on
      console.log('Toggle turned on');
      // Perform additional actions or logic
    } else {
      // Side effect when toggle is turned off
      console.log('Toggle turned off');
      // Perform additional actions or logic
    }
  };

  return (
    <div>
      <label>
        Enable Feature:
        <input
          type="checkbox"
          checked={featureEnabled}
          onChange={handleToggle}
        />
      </label>
    </div>
  );
};

export default FeatureToggle;
