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
            <h2>What do you want to exclude?</h2>
            <div onClick={(event) => handleOptionClick(event, 'dairy')}>
                <label>
                    <strong>Dairy</strong>
                </label>
                <input
                    type="radio"
                    checked={selectedNutrition === 'dairy'}
                    onChange={() => { }}
                />
            </div>
            <div onClick={(event) => handleOptionClick(event, 'gluten')}>
                <label>
                    <strong>Gluten</strong>
                </label>
                <input
                    type="radio"
                    checked={selectedNutrition === 'gluten'}
                    onChange={() => { }}
                />
            </div>
            <div onClick={(event) => handleOptionClick(event, 'eggs')}>
                <label>
                    <strong>Eggs</strong>
                </label>
                <input
                    type="radio"
                    checked={selectedNutrition === 'eggs'}
                    onChange={() => { }}
                />
            </div>
            <div onClick={(event) => handleOptionClick(event, 'fish')}>
                <label>
                    <strong>Fish</strong>
                </label>
                <input
                    type="radio"
                    checked={selectedNutrition === 'fish'}
                    onChange={() => { }}
                />
            </div>
            <div onClick={(event) => handleOptionClick(event, 'i_eat_everything')}>
                <label>
                    <strong>I eat everything</strong>
                </label>
                <input
                    type="radio"
                    checked={selectedNutrition === 'i_eat_everything'}
                    onChange={() => { }}
                />
            </div>
            <button onClick={handleContinue}>Next</button>
        </>
    );
}