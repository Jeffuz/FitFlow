import React, { useState } from 'react';

export default function DietType({ onContinue, onGoBack }) {
    const [selectedGoal, setSelectedGoal] = useState(null);

    const handleOptionClick = (event, Diet) => {
        setSelectedGoal(Diet);
    };

    const handleContinue = () => {
        if (selectedGoal) {
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
            <h2>Choose your diet type</h2>
            <div onClick={(event) => handleOptionClick(event, 'traditional')}>
                <label>
                    <strong>Traditional</strong>
                </label>
                <input
                    type="radio"
                    checked={selectedGoal === 'traditional'}
                    onChange={() => { }}
                />
            </div>
            <div onClick={(event) => handleOptionClick(event, 'vegetarian')}>
                <label>
                    <strong>Vegetarian</strong>
                </label>
                <input
                    type="radio"
                    checked={selectedGoal === 'vegetarian'}
                    onChange={() => { }}
                />
            </div>
            <div onClick={(event) => handleOptionClick(event, 'keto')}>
                <label>
                    <strong>Keto</strong>
                </label>
                <input
                    type="radio"
                    checked={selectedGoal === 'keto'}
                    onChange={() => { }}
                />
            </div>
            <div onClick={(event) => handleOptionClick(event, 'pescatarian')}>
                <label>
                    <strong>Pescatarian</strong>
                </label>
                <input
                    type="radio"
                    checked={selectedGoal === 'pescatarian'}
                    onChange={() => { }}
                />
            </div>
            <div onClick={(event) => handleOptionClick(event, 'vegan')}>
                <label>
                    <strong>Vegan &#40;Plant diet&#41;</strong>
                </label>
                <input
                    type="radio"
                    checked={selectedGoal === 'vegan'}
                    onChange={() => { }}
                />
            </div>
            <div onClick={(event) => handleOptionClick(event, 'paleo')}>
                <label>
                    <strong>Paleo</strong>
                </label>
                <input
                    type="radio"
                    checked={selectedGoal === 'paleo'}
                    onChange={() => { }}
                />
            </div>
            <div onClick={(event) => handleOptionClick(event, 'mediterranean')}>
                <label>
                    <strong>Mediterranean</strong>
                </label>
                <input
                    type="radio"
                    checked={selectedGoal === 'mediterranean'}
                    onChange={() => { }}
                />
            </div>
            <div onClick={(event) => handleOptionClick(event, 'diabete_type_1')}>
                <label>
                    <strong>Diabete Type 1</strong>
                </label>
                <input
                    type="radio"
                    checked={selectedGoal === 'diabete_type_1'}
                    onChange={() => { }}
                />
            </div>
            <div onClick={(event) => handleOptionClick(event, 'diabete_type_2')}>
                <label>
                    <strong>Diabete Type 2</strong>
                </label>
                <input
                    type="radio"
                    checked={selectedGoal === 'diabete_type_2'}
                    onChange={() => { }}
                />
            </div>
            <button onClick={handleContinue}>Next</button>
        </>
    );
}

