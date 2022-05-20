import { Routes, Route } from "react-router-dom";
import PrivateRoute from "../components/privateRoute/PrivateRoute";
import { useAuth } from "../contexts/authContext";
import ExplorePage from "./explorePage/ExplorePage";
import LoginPage from "./loginPage/LoginPage";
import SignupPage from "./signupPage/SignupPage";

export default function AllRoutes() {
  const { userData } = useAuth();
  return (
    <Routes>
      <Route path="/" element={<ExplorePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route
        path="/history"
        element={
          <PrivateRoute>
            <SignupPage />
          </PrivateRoute>
        }
      />
      <Route path="/watch-later" element={<PrivateRoute />} />
    </Routes>
  );
}
