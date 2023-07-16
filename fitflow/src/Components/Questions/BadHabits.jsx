import React, { useState } from 'react';

export default function BadHabits({ onContinue, onGoBack }) {
    const [selectedHabitsupdatedHabits, setSelectedHabitsupdatedHabits] = useState([]);

    const handleOptionToggle = (habit) => {
        if (habit === "none of the above") {
            setSelectedHabitsupdatedHabits([habit]);
        } else {
            const updatedHabits = [...selectedHabitsupdatedHabits];
            const habitIndex = updatedHabits.indexOf(habit);

            if (habitIndex === -1) {
                updatedHabits.push(habit);
            } else {
                updatedHabits.splice(habitIndex, 1);
            }

            if (updatedHabits.length > 0 && updatedHabits.includes("none of the above")) {
                updatedHabits.splice(updatedHabits.indexOf("none of the above"), 1);
            }

            setSelectedHabitsupdatedHabits(updatedHabits);
        }
    };

    const handleContinue = () => {
        if (selectedHabitsupdatedHabits.length > 0) {
            onContinue({ habits: selectedHabitsupdatedHabits });
        } else {
            alert('Please select an option');
        }
    };

    const handleGoBack = () => {
        onGoBack();
    };

    return (
        <>
            <p className='text-2xl mb-5'>What bad habits hinder you from reaching your goals?</p>
            <div className='mb-2' onClick={() => handleOptionToggle('i dont rest enough')}>

                <input
                    type="checkbox"
                    className='mr-1'
                    checked={selectedHabitsupdatedHabits.includes('i dont rest enough')}
                    onChange={() => { }}
                />
                <label>
                    <strong>I Don't Rest Enough</strong>
                </label>
            </div>
            <div className='mb-2' onClick={() => handleOptionToggle('i have a sweet tooth')}>

                <input
                    type="checkbox"
                    className='mr-1'
                    checked={selectedHabitsupdatedHabits.includes('i have a sweet tooth')}
                    onChange={() => { }}
                />
                <label>
                    <strong>I have a Sweeth Tooth</strong>
                </label>
            </div>
            <div className='mb-2' onClick={() => handleOptionToggle('i love salty food')}>

                <input
                    type="checkbox"
                    className='mr-1'
                    checked={selectedHabitsupdatedHabits.includes('i love salty food')}
                    onChange={() => { }}
                />
                <label>
                    <strong>I Love Salty Foods</strong>
                </label>
            </div>
            <div className='mb-2' onClick={() => handleOptionToggle('i have too much soda')}>

                <input
                    type="checkbox"
                    className='mr-1'
                    checked={selectedHabitsupdatedHabits.includes('i have too much soda')}
                    onChange={() => { }}
                />
                <label>
                    <strong>I have Too Much Soda</strong>
                </label>
            </div>
            <div className='mb-2' onClick={() => handleOptionToggle('i enjoy midnight snacks')}>

                <input
                    type="checkbox"
                    className='mr-1'
                    checked={selectedHabitsupdatedHabits.includes('i enjoy midnight snacks')}
                    onChange={() => { }}
                />
                <label>
                    <strong>I Enjoy Midnight Snacks</strong>
                </label>
            </div>
            <div className='mb-5' onClick={() => handleOptionToggle('none of the above')}>

                <input
                    type="checkbox"
                    className='mr-1'
                    checked={selectedHabitsupdatedHabits.includes('none of the above')}
                    onChange={() => { }}
                />
                <label>
                    <strong>None of the Above</strong>
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