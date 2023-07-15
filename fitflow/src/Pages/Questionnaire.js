import React, { useState } from 'react';
import DoesUserHaveAccount from '../Components/DoesUserHaveAccount';
import ImReady from '../Components/ImReady';
import MainGoal from '../Components/MainGoal';
import YourInterest from '../Components/YourInterest';
import WhatGender from '../Components/WhatGender';
import SpecialPrograms from '../Components/SpecialPrograms';
import WhereWorkout from '../Components/WhereWorkout';
import WhereAttention from '../Components/WhereAttention';
import WhatBodyType from '../Components/WhatBodyType';
import WhatDreamShapeBody from '../Components/WhatDreamShapeBody';
import WhatTypicalDay from '../Components/WhatTypicalDay';
import WhatEnergy from '../Components/WhatEnergy';
import HowActive from '../Components/HowActive';
import SendentaryLifestyle from '../Components/SendentaryLifestyle';
import HowMuchSleep from '../Components/HowMuchSleep';
import DietType from '../Components/DietType';
import NutritionToExclude from '../Components/NutritionToExclude';
import BadHabits from '../Components/BadHabits';
import WhatWeight from '../Components/WhatWeight';
import GoalWeight from '../Components/GoalWeight';
import DateOfBirth from '../Components/DateOfBirth';
import WhatHeight from '../Components/WhatHeight';

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
            {step === 1 && <DoesUserHaveAccount onContinue={handleContinue} />}
            {step === 2 && <ImReady onContinue={handleContinue} onGoBack={handleGoBack} />}
            {step === 3 && <MainGoal onContinue={handleContinue} onGoBack={handleGoBack} />}
            {step === 4 && <YourInterest onContinue={handleContinue} onGoBack={handleGoBack} />}
            {step === 5 && <WhatGender onContinue={handleContinue} onGoBack={handleGoBack} />}
            {step === 6 && <SpecialPrograms onContinue={handleContinue} onGoBack={handleGoBack} />}
            {step === 7 && <WhereWorkout onContinue={handleContinue} onGoBack={handleGoBack} />}
            {step === 8 && <WhereAttention onContinue={handleContinue} onGoBack={handleGoBack} />}
            {step === 9 && <WhatBodyType onContinue={handleContinue} onGoBack={handleGoBack} />}
            {step === 10 && <WhatDreamShapeBody onContinue={handleContinue} onGoBack={handleGoBack} />}
            {step === 11 && <WhatTypicalDay onContinue={handleContinue} onGoBack={handleGoBack} />}
            {step === 12 && <WhatEnergy onContinue={handleContinue} onGoBack={handleGoBack} />}
            {step === 13 && <HowActive onContinue={handleContinue} onGoBack={handleGoBack} />}
            {step === 14 && <SendentaryLifestyle onContinue={handleContinue} onGoBack={handleGoBack} />}
            {step === 15 && <HowMuchSleep onContinue={handleContinue} onGoBack={handleGoBack} />}
            {step === 16 && <DietType onContinue={handleContinue} onGoBack={handleGoBack} />}
            {step === 17 && <NutritionToExclude onContinue={handleContinue} onGoBack={handleGoBack} />}
            {step === 18 && <BadHabits onContinue={handleContinue} onGoBack={handleGoBack} />}
            {step === 19 && <WhatHeight onContinue={handleContinue} onGoBack={handleGoBack} />}
            {step === 20 && <WhatWeight onContinue={handleContinue} onGoBack={handleGoBack} />}
            {step === 21 && <GoalWeight onContinue={handleContinue} onGoBack={handleGoBack} />}
            {step === 22 && <DateOfBirth onContinue={handleContinue} onGoBack={handleGoBack} />}
        </>
    );
}
