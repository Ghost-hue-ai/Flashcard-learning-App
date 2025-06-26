import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import appService from '../appwrite/authConfig';
import { useDispatch } from 'react-redux';
import { login, logout } from '../store/authSlice';

function OAuthCallback() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
       ( async()=> {
            try {
                const user = await appService.account.get(); // Get loggedIn user
                dispatch(login(user));
                navigate('/dashboard', { replace: true });
            } catch (err) {
                console.error('OAuth failed:', err);
                dispatch(logout());
                // Redirect to your OAuth login flow again
                window.location.href = import.meta.env.DEV
                    ? "http://localhost:5173/login"
                    : "https://flarelearn.vercel.app/login";
            }
        })()

    }, [dispatch, navigate]);

    return (
        <div className="flex justify-center items-center min-h-screen text-lg font-semibold">
            Logging you in...
        </div>
    );
}

export default OAuthCallback;
