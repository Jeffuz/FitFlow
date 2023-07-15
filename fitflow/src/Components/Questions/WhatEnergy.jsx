import React, { useState } from 'react';

export default function WhatEnergy({ onContinue, onGoBack }) {
    const [selectedEnergy, setSelectedEnergy] = useState(null);

    const handleOptionClick = (event, Energy) => {
        setSelectedEnergy(Energy);
    };

    const handleContinue = () => {
        if (selectedEnergy) {
            onContinue({energy_level: selectedEnergy});
        } else {
            alert('Please select a gender');
        }
    };

    const handleGoBack = () => {
        onGoBack();
    };

    return (
        <>
            <button onClick={handleGoBack}>&#8592;</button>
            <p className='text-2xl mb-5'>How are your energy levels during the day?</p>
            <div className='mb-2' onClick={(event) => handleOptionClick(event, 'even_throughout_the_day')}>
                <input
                    type="radio"
                    className='mr-1'
                    checked={selectedEnergy === 'even_throughout_the_day'}
                    onChange={() => { }}
                />
                <label>
                    <strong>Even Throughout the Day</strong>
                </label>
            </div>
            <div className='mb-2' onClick={(event) => handleOptionClick(event, 'i_feel_a_dip_around_lunchtime')}>
                <input
                    type="radio"
                    className='mr-1'
                    checked={selectedEnergy === 'i_feel_a_dip_around_lunchtime'}
                    onChange={() => { }}
                />
                <label>
                    <strong>I Feel a Dip Around Lunchtime</strong>
                </label>
            </div>
            <div className='mb-2' onClick={(event) => handleOptionClick(event, 'i_need_a_nap_after_meals')}>
                <input
                    type="radio"
                    className='mr-1'
                    checked={selectedEnergy === 'i_need_a_nap_after_meals'}
                    onChange={() => { }}
                />
                <label>
                    <strong>I Need a Nap After Meals</strong>
                </label>
            </div>
            <button onClick={handleContinue}>Next</button>
        </>
    );
}

