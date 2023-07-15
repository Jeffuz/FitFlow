import React, { useState } from 'react';

export default function WhereWorkout({ onContinue, onGoBack }) {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleOptionClick = (event, location) => {
    setSelectedLocation(location);
  };

  const handleContinue = () => {
    if (selectedLocation) {
      onContinue({location: selectedLocation}); // Pass selected location as a parameter
    } else {
      alert('Please select a workout location');
    }
  };

  const handleGoBack = () => {
    onGoBack();
  };

    return (
        <>
            <button onClick={handleGoBack}>&#8592;</button>
            <p className='text-2xl mb-5'>Where do you workout?</p>
            <div className='mb-2' onClick={(event) => handleOptionClick(event, 'gym')}>
                <input
                    className='mr-1'
                    type="radio"
                    checked={selectedLocation === 'gym'}
                    onChange={() => { }}
                />
                <label>
                    <strong>Gym</strong>
                </label>
            </div>
            <div className='mb-5' onClick={(event) => handleOptionClick(event, 'home')}>
                <input
                    className='mr-1'
                    type="radio"
                    checked={selectedLocation === 'home'}
                    onChange={() => { }}
                />
                <label>
                    <strong>Home</strong>
                </label>
            </div>
            <button onClick={handleContinue}>Next</button>
        </>
    );
}

