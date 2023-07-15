import React, { useState } from 'react';
import DoesUserHaveAccount from '../Components/Questions/DoesUserHaveAccount';
import ImReady from '../Components/Questions/ImReady';
import MainGoal from '../Components/Questions/MainGoal';
import YourInterest from '../Components/Questions/YourInterest';
import WhatGender from '../Components/Questions/WhatGender';
import SpecialPrograms from '../Components/Questions/SpecialPrograms';
import WhereWorkout from '../Components/Questions/WhereWorkout';
import WhereAttention from '../Components/Questions/WhereAttention';
import WhatBodyType from '../Components/Questions/WhatBodyType';
import WhatDreamShapeBody from '../Components/Questions/WhatDreamShapeBody';
import WhatTypicalDay from '../Components/Questions/WhatTypicalDay';
import WhatEnergy from '../Components/Questions/WhatEnergy';
import HowActive from '../Components/Questions/HowActive';
import SendentaryLifestyle from '../Components/Questions/SendentaryLifestyle';
import HowMuchSleep from '../Components/Questions/HowMuchSleep';
import DietType from '../Components/Questions/DietType';
import NutritionToExclude from '../Components/Questions/NutritionToExclude';
import BadHabits from '../Components/Questions/BadHabits';
import WhatWeight from '../Components/Questions/WhatWeight';
import GoalWeight from '../Components/Questions/GoalWeight';
import DateOfBirth from '../Components/Questions/DateOfBirth';
import WhatHeight from '../Components/Questions/WhatHeight';

import './styles.css'; // Import the CSS file 

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
            {step === 1  && <DoesUserHaveAccount onContinue={handleContinue} />}
            {step === 2  && <ImReady onContinue={handleContinue} onGoBack={handleGoBack} />}
            {step === 3  && <MainGoal onContinue={handleContinue} onGoBack={handleGoBack} />}
            {step === 4  && <YourInterest onContinue={handleContinue} onGoBack={handleGoBack} />}
            {step === 5  && <WhatGender onContinue={handleContinue} onGoBack={handleGoBack} />}
            {step === 6  && <SpecialPrograms onContinue={handleContinue} onGoBack={handleGoBack} />}
            {step === 7  && <WhereWorkout onContinue={handleContinue} onGoBack={handleGoBack} />}
            {step === 8  && <WhereAttention onContinue={handleContinue} onGoBack={handleGoBack} />}
            {step === 9  && <WhatBodyType onContinue={handleContinue} onGoBack={handleGoBack} />}
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
