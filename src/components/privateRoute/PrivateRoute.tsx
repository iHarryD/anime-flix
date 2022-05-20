import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";

export default function PrivateRoute({ children }: any) {
  const { userData } = useAuth();
  if (!Element) return;
  return userData.token ? { children } : <Navigate to="/login" />;
}
