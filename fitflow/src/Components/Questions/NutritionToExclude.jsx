import React, { useState } from 'react';

export default function NutritionToExclude({ onContinue, onGoBack }) {
    const [selectedNutrition, setSelectedNutrition] = useState(null);

    const handleOptionClick = (event, Nutrition) => {
        setSelectedNutrition(Nutrition);
    };

    const handleContinue = () => {
        if (selectedNutrition) {
            onContinue();
        } else {
            alert('Please select an option');
        }
    };

    const handleGoBack = () => {
        onGoBack();
    };

    return (
        <>
            <button onClick={handleGoBack}>&#8592;</button>
            <p className='text-2xl mb-5'>What do you want to exclude?</p>
            <div className='mb-2' onClick={(event) => handleOptionClick(event, 'dairy')}>
                
                <input
                    type="radio"
                    className='mr-1'
                    checked={selectedNutrition === 'dairy'}
                    onChange={() => { }}
                />
                <label>
                    <strong>Dairy</strong>
                </label>
            </div>
            <div className='mb-2' onClick={(event) => handleOptionClick(event, 'gluten')}>
                
                <input
                    type="radio"
                    className='mr-1'
                    checked={selectedNutrition === 'gluten'}
                    onChange={() => { }}
                />
                <label>
                    <strong>Gluten</strong>
                </label>
            </div>
            <div className='mb-2' onClick={(event) => handleOptionClick(event, 'eggs')}>
            
                <input
                    type="radio"
                    className='mr-1'
                    checked={selectedNutrition === 'eggs'}
                    onChange={() => { }}
                />
                <label>
                    <strong>Eggs</strong>
                </label>
            </div>
            <div className='mb-2' onClick={(event) => handleOptionClick(event, 'fish')}>
                
                <input
                    type="radio"
                    className='mr-1'
                    checked={selectedNutrition === 'fish'}
                    onChange={() => { }}
                />
                <label>
                    <strong>Fish</strong>
                </label>
            </div>
            <div className='mb-5' onClick={(event) => handleOptionClick(event, 'i_eat_everything')}>
                
                <input
                    type="radio"
                    className='mr-1'
                    checked={selectedNutrition === 'i_eat_everything'}
                    onChange={() => { }}
                />
                <label>
                    <strong>I eat everything</strong>
                </label>
            </div>
            <button onClick={handleContinue}>Next</button>
        </>
    );
}