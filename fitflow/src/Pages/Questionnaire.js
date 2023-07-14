import React from 'react';
import { Link } from 'react-router-dom';

export default function Questionnaire() {
    const goBack = () => {
        window.history.back();
    };

    return (
        <>
            <button onClick={goBack}>&#8592;</button>
            <p>Do you have an account?</p>
            <Link to="/login">
                <button>Yes, I Already Have an Account</button>
            </Link>
            <button>Not Yet</button>
        </>
    );
}
