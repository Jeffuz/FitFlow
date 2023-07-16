import React, { useState } from 'react';

export default function WhatHeight({ onContinue, onGoBack }) {
    const [unit, setUnit] = useState('inches');
    const [feet, setFeet] = useState('');
    const [inches, setInches] = useState('');
    const [centimeters, setCentimeters] = useState('');

    const handleUnitChange = (event) => {
        setUnit(event.target.value);
    };

    const handleFeetChange = (event) => {
        setFeet(event.target.value);
    };

    const handleInchesChange = (event) => {
        setInches(event.target.value);
    };

    const handleCentimetersChange = (event) => {
        setCentimeters(event.target.value);
    };

    const handleContinue = () => {
        if (unit === 'inches') {
            if (!feet || !inches) {
                alert('Please enter your height in feet and inches');
                return;
            }
            onContinue({ feet, inches, unit });
        } else if (unit === 'cm') {
            if (!centimeters) {
                alert('Please enter your height in centimeters');
                return;
            }
            onContinue({ centimeters, unit });
        }
    };

    const handleGoBack = () => {
        onGoBack();
    };

    return (
        <>
            <button onClick={handleGoBack}>&#8592;</button>
            <img className="object-scale-down m-4 h-24"
                src="https://static-00.iconduck.com/assets.00/ruler-90-icon-512x512-2r0ls61q.png" />
            <p className='text-2xl mb-4'>Enter Your Height:</p>
            <div className='mb-3'>
                <label>
                    Unit of Measurement:
                    <select className='ml-2 rounded-lg h-6 w-26 text-center' value={unit} onChange={handleUnitChange}>
                        <option value="inches">Inches</option>
                        <option value="cm">Centimeters</option>
                    </select>
                </label>
            </div>
            {unit === 'inches' && (
                <div className='mb-5'>
                    <label>
                        Feet:
                        <select className='ml-2 mr-2 rounded-lg h-6 w-20 text-center' value={feet} onChange={handleFeetChange}>
                            <option value="">Select</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                        </select>
                    </label>
                    <label>
                        Inches:
                        <select className='ml-2 rounded-lg h-6 w-20 text-center' value={inches} onChange={handleInchesChange}>
                            <option value="">Select</option>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                        </select>
                    </label>
                </div>
            )}
            {unit === 'cm' && (
                <div className='mb-5'>
                    <label>
                        Centimeters:
                        <input
                            className='ml-2 rounded-lg h-6 w-25 text-center'
                            type="number"
                            value={centimeters}
                            onChange={handleCentimetersChange}
                            placeholder="Centimeters"
                        />
                    </label>
                </div>
            )}
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
