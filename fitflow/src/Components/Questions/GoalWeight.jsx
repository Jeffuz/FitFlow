import React, { useState } from 'react';

export default function GoalWeight({ onContinue, onGoBack }) {
    const [weight, setWeight] = useState('');
    const [measurementUnit, setMeasurementUnit] = useState('kg');

    const handleInputChange = (event) => {
        const value = event.target.value;
        if (value >= 0 && value <= 660) {
            setWeight(value);
        }
    };

    const handleUnitChange = (event) => {
        setMeasurementUnit(event.target.value);
    };

    const handleContinue = () => {
        if (weight === '') {
            alert('Please enter your goal weight');
        } else {
            onContinue({ goal_weight: weight, unit: measurementUnit });
        }
    };
    
    const handleGoBack = () => {
        onGoBack();
    };

    return (
        <>
            <p className='text-2xl mb-4'>What is your goal weight?</p>
            <div className='mb-2'>
                <label>
                    <input
                        className='mr-2 rounded-lg h-6 w-48 text-center'
                        type="number"
                        value={weight}
                        onChange={handleInputChange}
                        placeholder={`Enter your weight in ${measurementUnit}`}
                        min={0}
                        max={660}
                    />
                    {measurementUnit}
                </label>
            </div>
            <div className='mb-5'>
                <label className='mr-3'>
                    <input
                        className='mr-1'
                        type="radio"
                        value="kg"
                        checked={measurementUnit === 'kg'}
                        onChange={handleUnitChange}
                    />
                    kg
                </label>
                <label>
                    <input
                        className='mr-1'
                        type="radio"
                        value="lb"
                        checked={measurementUnit === 'lb'}
                        onChange={handleUnitChange}
                    />
                    lb
                </label>
            </div>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mr-2"
                onClick={handleContinue}
            >
                Next
            </button>
            <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md"
                onClick={handleGoBack}
            >
                Back
            </button>
        </>
    );
}
