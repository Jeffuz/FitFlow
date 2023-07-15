import React, { useState } from 'react';

export default function SpecialPrograms({ onContinue }) {
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

    return (
        <>
            <h2>Do you want to include special programs?</h2>
            <div onClick={() => handleOptionToggle('no_thanks')}>
                <label>
                    <strong>No Thanks</strong>
                </label>
                <input type="radio" checked={selectedGoals.includes('no_thanks')} onChange={() => { }} />
            </div>
            <div onClick={() => handleOptionToggle('sensitive_back')}>
                <label>
                    <strong>Sensitive Back</strong>
                </label>
                <input type="radio" checked={selectedGoals.includes('sensitive_back')} onChange={() => { }} />
            </div>
            <div onClick={() => handleOptionToggle('sensitive_knees')}>
                <label>
                    <strong>Sensitive Knees</strong>
                </label>
                <input type="radio" checked={selectedGoals.includes('sensitive_knees')} onChange={() => { }} />
            </div>
            <div onClick={() => handleOptionToggle('limited_mobility')}>
                <label>
                    <strong>Limited Mobility (Wheelchair)</strong>
                </label>
                <input type="radio" checked={selectedGoals.includes('limited_mobility')} onChange={() => { }} />
            </div>
            <div onClick={() => handleOptionToggle('prenatal')}>
                <label>
                    <strong>Prenatal</strong>
                </label>
                <input type="radio" checked={selectedGoals.includes('prenatal')} onChange={() => { }} />
                {selectedGoals.includes('prenatal') && (
                    <div>
                        <p>Please Note:</p>
                        <p>If you're pregnant, consult your doctor before working out</p>
                    </div>
                )}
            </div>
            <div onClick={() => handleOptionToggle('postnatal')}>
                <label>
                    <strong>Postnatal</strong>
                </label>
                <input type="radio" checked={selectedGoals.includes('postnatal')} onChange={() => { }} />
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
