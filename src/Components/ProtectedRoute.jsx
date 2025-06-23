import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import appService from '../appwrite/authConfig.js'

function ProtectedRoute({ children, authenticationRequired = false }) {
    const navigate = useNavigate();
    const authStatus = useSelector(state => state.auth.status); // true or false
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Wait for authStatus to be defined
        if (authStatus === undefined || authStatus === null) return;

        // If the route requires auth but the user isn't logged in
        if (authenticationRequired && !authStatus) {
            navigate('/login', { replace: true });
        }
        // If the route should be accessed by guests but the user is logged in
        else if (!authenticationRequired && authStatus) {
            navigate('/', { replace: true });
        } else {
            setLoading(false); // all good, stop loading
        }
    }, [authStatus, authenticationRequired, navigate]);

    return loading ? <h2>...loading</h2> : <>{children}</>;
}

export default ProtectedRoute;
