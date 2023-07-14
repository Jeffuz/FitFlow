import React, { useState } from 'react';
import DoesUserHaveAccount from '../Components/DoesUserHaveAccount';
import ImReady from '../Components/ImReady';
import MainGoal from '../Components/MainGoal';
import YourInterest from '../Components/YourInterest';

export default function Questionnaire() {
    const [step, setStep] = useState(1);

    const handleContinue = () => {
        if (step === 2) {
            setStep(3);
        } else {
            setStep((prevStep) => prevStep + 1);
        }
    };

    const handleGoBack = () => {
        setStep((prevStep) => prevStep - 1);
    };

    return (
        <>
            {step === 1 && (
                <DoesUserHaveAccount onContinue={handleContinue} onGoBack={handleGoBack} />
            )}
            {step === 2 && <ImReady onContinue={handleContinue} />}
            {step === 3 && <MainGoal onContinue={handleContinue} />}
            {step === 4 && <YourInterest onContinue={handleContinue} />}
        </>
    );
}
