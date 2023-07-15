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

export default function Questionnaire() {
    const [step, setStep] = useState(1);

    const handleContinue = () => {
        if (step === 2) {
            setStep(3);
        } else {
            setStep((prevStep) => prevStep + 1);
        }
    };

    // const handleGoBack = () => {
    //     setStep((prevStep) => prevStep - 1);
    // };

    return (
        <>
            {step === 1 && <DoesUserHaveAccount onContinue={handleContinue} />}
            {step === 2 && <ImReady onContinue={handleContinue} />}
            {step === 3 && <MainGoal onContinue={handleContinue} />}
            {step === 4 && <YourInterest onContinue={handleContinue} />}
            {step === 5 && <WhatGender onContinue={handleContinue} />}
            {step === 6 && <SpecialPrograms onContinue={handleContinue} />}
            {step === 7 && <WhereWorkout onContinue={handleContinue} />}
            {step === 8 && <WhereAttention onContinue={handleContinue} />}
            {step === 9 && <WhatBodyType onContinue={handleContinue} />}
            {step === 10 && <WhatDreamShapeBody onContinue={handleContinue} />}
            {step === 11 && <WhatTypicalDay onContinue={handleContinue} />}
            {step === 12 && <WhatEnergy onContinue={handleContinue} />}
            {step === 13 && <HowActive onContinue={handleContinue} />}
            {step === 14 && <SendentaryLifestyle onContinue={handleContinue} />}
            {step === 15 && <HowMuchSleep onContinue={handleContinue} />}
            {step === 16 && <DietType onContinue={handleContinue} />}
            {step === 17 && <NutritionToExclude onContinue={handleContinue} />}
            {step === 18 && <BadHabits onContinue={handleContinue} />}
            {step === 19 && <WhatWeight onContinue={handleContinue} />}
            {step === 20 && <GoalWeight onContinue={handleContinue} />}
            {step === 21 && <DateOfBirth onContinue={handleContinue} />}
        </>
    );
}
