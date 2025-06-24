import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import appService from "../appwrite/authConfig";
import { login, logout } from "../store/authSlice";

export default function AuthLoader({ children }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [unverified, setUnverified] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const user = await appService.getCurrentUser();
        if (user) {
          if (user.emailVerification === false) {
            setUnverified(true);
            setLoading(false);
            // DO NOT log out here!
            return;
          }
          dispatch(
            login({ name: user.name, email: user.email, userId: user.$id })
          );
        } else {
          dispatch(logout());
        }
      } catch {
        dispatch(logout());
      } finally {
        setLoading(false);
      }
    })();
  }, [dispatch]);

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (unverified)
    return (
      <div className="text-center py-8 text-red-600 font-semibold">
        Please verify your email address to continue.
        <br />
        <button
          className="mt-4 px-4 py-2 bg-purple-600 text-white rounded"
          onClick={() => window.location.reload()}
        >
          I have verified my email
        </button>
      </div>
    );
  return children;
}
