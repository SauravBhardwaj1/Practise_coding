import { useState } from 'react';
import { useThrottle } from 'your-use-throttle-library'; // Replace with your actual useThrottle hook

const FormValidationExample = () => {
  const [inputValue, setInputValue] = useState('');
  const [isInputValid, setIsInputValid] = useState(true);

  // Throttle the validation check to limit its frequency
  const throttledValidation = useThrottle(validateInput, 500); // 500ms throttle delay

  function handleInputChange(event) {
    const value = event.target.value;
    setInputValue(value);
    
    // Perform the throttled validation check on each input change
    throttledValidation(value);
  }

  function validateInput(value) {
    // Perform your validation logic here
    // For example, check if the input value meets certain criteria
    const isValid = value.length >= 5;
    
    setIsInputValid(isValid);
  }

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      {isInputValid ? (
        <span>Input is valid</span>
      ) : (
        <span>Input is invalid (minimum length: 5)</span>
      )}
    </div>
  );
};

export default FormValidationExample;