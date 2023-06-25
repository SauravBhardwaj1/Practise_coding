// actions.js
export const TOGGLE_FEATURE = 'TOGGLE_FEATURE';

export const toggleFeature = (enabled) => {
  return {
    type: TOGGLE_FEATURE,
    payload: enabled,
  };
};

