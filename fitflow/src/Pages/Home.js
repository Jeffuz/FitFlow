import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <h1>FitFlow</h1>
            <h3>Unlock your potential, embrace your strength, and flow towards a healthier you with FitFlow</h3>
            <h4>
                By tapping GET STARTED, you agree to our 
                <a href="/">Terms of Use</a> and
                <a href="/">Privacy Policy</a>.
                Please review them before continuing.
            </h4>
            <Link to="/question">
                <button>GET STARTED</button>
            </Link>
        </div>
    )
}
