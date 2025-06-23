import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import appService from '../appwrite/authConfig';
import { login, logout } from '../store/authSlice';

export default function AuthLoader({ children }) {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
       ( async ()=> {
            try {
                const user = await appService.getCurrentUser();
                if (user) {
                    dispatch(login({ name: user.name, email: user.email, userId: user.$id }));
                } else {
                    dispatch(logout());
                }
            } catch {
                dispatch(logout());
            } finally {
                setLoading(false);
            }
        })()

    }, [dispatch]);

    if (loading) return <div className="text-center py-8">Loading...</div>;
    return children;
}
