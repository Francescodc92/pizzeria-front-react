import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({ isLoggedIn }: { isLoggedIn: boolean }) {
    if (!isLoggedIn) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
}