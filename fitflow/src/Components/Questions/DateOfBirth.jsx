import React, { useState } from 'react';

export default function DateOfBirth({ onContinue, onGoBack }) {
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
            const birthday = new Date(year, month - 1, day, 0, 0, 0);
            onContinue({ birthday });
        } else {
            alert('Please enter a valid date of birth');
        }
    };

    const handleGoBack = () => {
        onGoBack();
    };

    const currentYear = new Date().getFullYear();
    const yearOptions = Array.from(
        { length: currentYear - 1899 },
        (_, index) => currentYear - index
    );
    const monthOptions = Array.from({ length: 12 }, (_, index) => index + 1);
    const dayOptions = Array.from({ length: 31 }, (_, index) => index + 1);

    return (
        <>
            <button onClick={handleGoBack}>&#8592;</button>
            <p className="text-2xl mb-5">Enter Your Date of Birth</p>
            <div>
                <label>
                    Month:
                    <select value={month} onChange={handleMonthChange}>
                        <option value="">Select Month</option>
                        {monthOptions.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </label>
                <label>
                    Day:
                    <select value={day} onChange={handleDayChange}>
                        <option value="">Select Day</option>
                        {dayOptions.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </label>
                <label>
                    Year:
                    <select value={year} onChange={handleYearChange}>
                        <option value="">Select Year</option>
                        {yearOptions.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
            <button onClick={handleContinue}>Next</button>
        </>
    );
}
