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
            <p className='text-2xl mb-5'>Choose your diet type</p>
            <div className='mb-2' onClick={(event) => handleOptionClick(event, 'traditional')}>
                
                <input
                    type="radio"
                    className='mr-1'
                    checked={selectedGoal === 'traditional'}
                    onChange={() => { }}
                />
                <label>
                    <strong>Traditional</strong>
                </label>
            </div>
            <div className='mb-2' onClick={(event) => handleOptionClick(event, 'vegetarian')}>
                
                <input
                    type="radio"
                    className='mr-1'
                    checked={selectedGoal === 'vegetarian'}
                    onChange={() => { }}
                />
                <label>
                    <strong>Vegetarian</strong>
                </label>
            </div>
            <div className='mb-2' onClick={(event) => handleOptionClick(event, 'keto')}>
                
                <input
                    type="radio"
                    className='mr-1'
                    checked={selectedGoal === 'keto'}
                    onChange={() => { }}
                />
                <label>
                    <strong>Keto</strong>
                </label>
            </div>
            <div className='mb-2' onClick={(event) => handleOptionClick(event, 'pescatarian')}>
                
                <input
                    type="radio"
                    className='mr-1'
                    checked={selectedGoal === 'pescatarian'}
                    onChange={() => { }}
                />
                <label>
                    <strong>Pescatarian</strong>
                </label>
            </div>
            <div className='mb-2' onClick={(event) => handleOptionClick(event, 'vegan')}>
                
                <input
                    type="radio"
                    className='mr-1'
                    checked={selectedGoal === 'vegan'}
                    onChange={() => { }}
                />
                <label>
                    <strong>Vegan &#40;Plant diet&#41;</strong>
                </label>
            </div>
            <div className='mb-2' onClick={(event) => handleOptionClick(event, 'paleo')}>
                
                <input
                    type="radio"
                    className='mr-1'
                    checked={selectedGoal === 'paleo'}
                    onChange={() => { }}
                />
                <label>
                    <strong>Paleo</strong>
                </label>
            </div>
            <div className='mb-2' onClick={(event) => handleOptionClick(event, 'mediterranean')}>
                
                <input
                    type="radio"
                    className='mr-1'
                    checked={selectedGoal === 'mediterranean'}
                    onChange={() => { }}
                />
                <label>
                    <strong>Mediterranean</strong>
                </label>
            </div>
            <div className='mb-2' onClick={(event) => handleOptionClick(event, 'diabete_type_1')}>
                
                <input
                    type="radio"
                    className='mr-1'
                    checked={selectedGoal === 'diabete_type_1'}
                    onChange={() => { }}
                />
                <label>
                    <strong>Diabete Type 1</strong>
                </label>
            </div>
            <div className='mb-5' onClick={(event) => handleOptionClick(event, 'diabete_type_2')}>
                
                <input
                    type="radio"
                    className='mr-1'
                    checked={selectedGoal === 'diabete_type_2'}
                    onChange={() => { }}
                />
                <label>
                    <strong>Diabete Type 2</strong>
                </label>
            </div>
            <button onClick={handleContinue}>Next</button>
        </>
    );
}

