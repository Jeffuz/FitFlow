import React, { useState } from 'react';

export default function BadHabits({ onContinue, onGoBack }) {
    const [selectedGoals, setSelectedGoals] = useState([]);

    const handleOptionToggle = (goal) => {
        if (goal === "none_of_the_above") {
            setSelectedGoals([goal]);
        } else {
            const updatedGoals = [...selectedGoals];
            const goalIndex = updatedGoals.indexOf(goal);

            if (goalIndex === -1) {
                updatedGoals.push(goal);
            } else {
                updatedGoals.splice(goalIndex, 1);
            }

            if (updatedGoals.length > 0 && updatedGoals.includes("none_of_the_above")) {
                updatedGoals.splice(updatedGoals.indexOf("none_of_the_above"), 1);
            }

            setSelectedGoals(updatedGoals);
        }
    };

    const handleContinue = () => {
        if (selectedGoals.length > 0) {
            // console.log('Selected Goals:', selectedGoals);
            onContinue(selectedGoals);
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
            <p className='text-2xl mb-5'>What bad habits hinder you from reaching your goals?</p>
            <div className='mb-2' onClick={() => handleOptionToggle('i_dont_rest_enough')}>
                
                <input
                    type="radio"
                    className='mr-1'
                    checked={selectedGoals.includes('i_dont_rest_enough')}
                    onChange={() => { }}
                />
                <label>
                    <strong>I Don't Rest Enough</strong>
                </label>
            </div>
            <div className='mb-2' onClick={() => handleOptionToggle('i_have_a_sweet_tooth')}>
                
                <input
                    type="radio"
                    className='mr-1'
                    checked={selectedGoals.includes('i_have_a_sweet_tooth')}
                    onChange={() => { }}
                />
                <label>
                    <strong>I have a Sweeth Tooth</strong>
                </label>
            </div>
            <div className='mb-2' onClick={() => handleOptionToggle('i_love_salty_food')}>
                
                <input
                    type="radio"
                    className='mr-1'
                    checked={selectedGoals.includes('i_love_salty_food')}
                    onChange={() => { }}
                />
                <label>
                    <strong>I Love Salty Foods</strong>
                </label>
            </div>
            <div className='mb-2' onClick={() => handleOptionToggle('i_have_too_much_soda')}>
                
                <input
                    type="radio"
                    className='mr-1'
                    checked={selectedGoals.includes('i_have_too_much_soda')}
                    onChange={() => { }}
                />
                <label>
                    <strong>I have Too Much Soda</strong>
                </label>
            </div>
            <div className='mb-2' onClick={() => handleOptionToggle('i_enjoy_midnight_snacks')}>
                
                <input
                    type="radio"
                    className='mr-1'
                    checked={selectedGoals.includes('i_enjoy_midnight_snacks')}
                    onChange={() => { }}
                />
                <label>
                    <strong>I Enjoy Midnight Snacks</strong>
                </label>
            </div>
            <div className='mb-5' onClick={() => handleOptionToggle('none_of_the_above')}>
                
                <input
                    type="radio"
                    className='mr-1'
                    checked={selectedGoals.includes('none_of_the_above')}
                    onChange={() => { }}
                />
                <label>
                    <strong>None of the Above</strong>
                </label>
            </div>
            <button onClick={handleContinue}>Next</button>
        </>
    );
}