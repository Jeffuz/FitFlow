import React, { useState } from 'react';

export default function DietType({ onContinue, onGoBack }) {
    const [selectedDietType, setSelectedDietType] = useState(null);

    const handleOptionClick = (event, Diet) => {
        setSelectedDietType(Diet);
    };

    const handleContinue = () => {
        if (selectedDietType) {
            onContinue({ diet_type: selectedDietType });
        } else {
            alert('Please select an option');
        }
    };

    const handleGoBack = () => {
        onGoBack();
    };

    return (
        <>
            <p className='text-2xl mb-5'>Choose your diet type</p>
            <div className='mb-2' onClick={(event) => handleOptionClick(event, 'traditional')}>

                <input
                    type="radio"
                    className='mr-1'
                    checked={selectedDietType === 'traditional'}
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
                    checked={selectedDietType === 'vegetarian'}
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
                    checked={selectedDietType === 'keto'}
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
                    checked={selectedDietType === 'pescatarian'}
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
                    checked={selectedDietType === 'vegan'}
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
                    checked={selectedDietType === 'paleo'}
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
                    checked={selectedDietType === 'mediterranean'}
                    onChange={() => { }}
                />
                <label>
                    <strong>Mediterranean</strong>
                </label>
            </div>
            <div className='mb-2' onClick={(event) => handleOptionClick(event, 'diabete type 1')}>

                <input
                    type="radio"
                    className='mr-1'
                    checked={selectedDietType === 'diabete type 1'}
                    onChange={() => { }}
                />
                <label>
                    <strong>Diabete Type 1</strong>
                </label>
            </div>
            <div className='mb-5' onClick={(event) => handleOptionClick(event, 'diabete type 2')}>

                <input
                    type="radio"
                    className='mr-1'
                    checked={selectedDietType === 'diabete type 2'}
                    onChange={() => { }}
                />
                <label>
                    <strong>Diabete Type 2</strong>
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

