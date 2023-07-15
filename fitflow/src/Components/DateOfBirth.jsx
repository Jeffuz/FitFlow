import React, { useState } from 'react';

export default function DateOfBirth({ onContinue }) {
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    const handleDayChange = (event) => {
        const value = event.target.value;
        if (value >= 1 && value <= 31) {
            setDay(value);
        }
    };

    const handleMonthChange = (event) => {
        const value = event.target.value;
        if (value >= 1 && value <= 12) {
            setMonth(value);
        }
    };

    const handleYearChange = (event) => {
        const value = event.target.value;
        const currentYear = new Date().getFullYear();
        if (value >= 1900 && value <= currentYear) {
            setYear(value);
        }
    };

    const handleContinue = () => {
        if (day && month && year) {
            const birthday = new Date(year, month - 1, day);
            onContinue(birthday);
        } else {
            alert('Please enter a valid date of birth');
        }
    };

    return (
        <>
            <h2>Enter Your Date of Birth</h2>
            <div>
                <label>
                    Month:
                    <input
                        type="number"
                        value={month}
                        onChange={handleMonthChange}
                        placeholder="Month"
                        min={1}
                        max={12}
                    />
                </label>
                <label>
                    Day:
                    <input
                        type="number"
                        value={day}
                        onChange={handleDayChange}
                        placeholder="Day"
                        min={1}
                        max={31}
                    />
                </label>
                <label>
                    Year:
                    <input
                        type="number"
                        value={year}
                        onChange={handleYearChange}
                        placeholder="Year"
                        min={1900}
                        max={new Date().getFullYear()}
                    />
                </label>
            </div>
            <button onClick={handleContinue}>Next</button>
        </>
    );
}
