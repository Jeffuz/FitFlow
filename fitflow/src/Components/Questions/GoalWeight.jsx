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
        onContinue({ goal_weight: weight, unit: measurementUnit });
    };
    
    const handleGoBack = () => {
        onGoBack();
    };

    return (
        <>
            <button onClick={handleGoBack}>&#8592;</button>
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
            <button onClick={handleContinue}>Next</button>
        </>
    );
}
