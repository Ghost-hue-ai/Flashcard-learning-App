import React, { useEffect } from 'react';
import appService from '../appwrite/authConfig.js';

function LogInForm() {
    useEffect(() => {
        appService.loginWithAuth0();
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen text-lg font-semibold">
            Redirecting to login...
        </div>
    );
}

export default LogInForm;
