import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";

interface privateRouteProps {
  children: React.ReactNode;
  isAuthenticated?: boolean;
  redirectTo?: string;
}

export default function PrivateRoute({
  children,
  isAuthenticated,
  redirectTo,
}: privateRouteProps) {
  const location = useLocation();
  const { userCredentials } = useAuth();

  return (
    isAuthenticated !== undefined ? isAuthenticated : userCredentials.token
  ) ? (
    children
  ) : (
    <Navigate
      to={redirectTo !== undefined ? redirectTo : "/login"}
      state={{ comingFrom: location.pathname }}
      replace
    />
  );
}
