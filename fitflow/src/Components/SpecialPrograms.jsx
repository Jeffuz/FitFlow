import React, { useState } from 'react';

export default function SpecialPrograms({ onContinue, onGoBack }) {
    const [selectedGoals, setSelectedGoals] = useState([]);

    const handleOptionToggle = (goal) => {
        if (goal === 'no_thanks') {
            setSelectedGoals([goal]);
        } else if (goal === 'postnatal') {
            const updatedGoals = selectedGoals.includes('postnatal')
                ? selectedGoals.filter((g) => g !== 'postnatal')
                : selectedGoals.filter((g) => g !== 'prenatal').concat('postnatal');
            setSelectedGoals(updatedGoals);
        } else if (goal === 'prenatal') {
            const updatedGoals = selectedGoals.includes('prenatal')
                ? selectedGoals.filter((g) => g !== 'prenatal')
                : selectedGoals.filter((g) => g !== 'postnatal').concat('prenatal');
            setSelectedGoals(updatedGoals);
        } else {
            const updatedGoals = [...selectedGoals];
            const goalIndex = updatedGoals.indexOf(goal);

            if (goalIndex === -1) {
                updatedGoals.push(goal);
            } else {
                updatedGoals.splice(goalIndex, 1);
            }

            if (updatedGoals.length > 0 && updatedGoals.includes('no_thanks')) {
                updatedGoals.splice(updatedGoals.indexOf('no_thanks'), 1);
            }

            setSelectedGoals(updatedGoals);
        }
    };

    const handleContinue = () => {
        if (selectedGoals.length > 0) {
            // console.log('Selected Goals:', selectedGoals);
            onContinue(selectedGoals);
        } else {
            alert('Please select at least one interest');
        }
    };

    const handleGoBack = () => {
        onGoBack();
    };

    return (
        <>
            <button onClick={handleGoBack}>&#8592;</button>
            <p className='text-2xl mb-5'>Do you want to include special programs?</p>
            <div className='mb-2' onClick={() => handleOptionToggle('no_thanks')}>
                <input className='mr-1' type="radio" checked={selectedGoals.includes('no_thanks')} onChange={() => { }} />
                <label>
                    <strong>No Thanks</strong>
                </label>
            </div>
            <div className='mb-2' onClick={() => handleOptionToggle('sensitive_back')}>
            <input className='mr-1' type="radio" checked={selectedGoals.includes('sensitive_back')} onChange={() => { }} />
                <label>
                    <strong>Sensitive Back</strong>
                </label>
            </div>
            <div className='mb-2' onClick={() => handleOptionToggle('sensitive_knees')}>
                <input className='mr-1' type="radio" checked={selectedGoals.includes('sensitive_knees')} onChange={() => { }} />
                <label>
                    <strong>Sensitive Knees</strong>
                </label>
            </div>
            <div className='mb-2' onClick={() => handleOptionToggle('limited_mobility')}>
                <input className='mr-1' type="radio" checked={selectedGoals.includes('limited_mobility')} onChange={() => { }} />
                <label>
                    <strong>Limited Mobility (Wheelchair)</strong>
                </label>
            </div>
            <div className='mb-2' onClick={() => handleOptionToggle('prenatal')}>
                <input className='mr-1' type="radio" checked={selectedGoals.includes('prenatal')} onChange={() => { }} />
                <label>
                    <strong>Prenatal</strong>
                </label>
                {selectedGoals.includes('prenatal') && (
                    <div>
                        <p>Please Note:</p>
                        <p>If you're pregnant, consult your doctor before working out</p>
                    </div>
                )}
            </div>
            <div className='mb-5' onClick={() => handleOptionToggle('postnatal')}>
                <input className='mr-1' type="radio" checked={selectedGoals.includes('postnatal')} onChange={() => { }} />
                <label>
                    <strong>Postnatal</strong>
                </label>
                {selectedGoals.includes('postnatal') && (
                    <div>
                        <p>Please Note:</p>
                        <p>If you've recently given birth, consult your doctor before working out</p>
                    </div>
                )}
            </div>
            <button onClick={handleContinue}>Next</button>
        </>
    );
}
