import { Routes, Route } from "react-router-dom";
import PrivateRoute from "../components/privateRoute/PrivateRoute";
import { useAuth } from "../contexts/authContext";
import ExplorePage from "./explorePage/ExplorePage";
import HistoryPage from "./historyPage/HistoryPage";
import WatchLaterPage from "./watchLaterPage/WatchLaterPage";
import PlaylistPage from "./playlistPage/PlaylistPage";
import LoginPage from "./loginPage/LoginPage";
import SignupPage from "./signupPage/SignupPage";
import SingleVideoPage from "./singleVideoPage/SingleVideoPage";

export default function AllRoutes() {
  const { userData } = useAuth();
  return (
    <Routes>
      <Route path="/" element={<ExplorePage />} />
      <Route path="/playlist" element={<PlaylistPage />} />
      <Route
        path="/login"
        element={
          <PrivateRoute isAuthenticated={!userData.token} redirectTo="/">
            <LoginPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <PrivateRoute isAuthenticated={!userData.token} redirectTo="/">
            <SignupPage />
          </PrivateRoute>
        }
      />
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="/watch/:videoID" element={<SingleVideoPage />} />
      <Route path="/history" element={<HistoryPage />} />
      <Route path="/watch-later" element={<WatchLaterPage />} />
      <Route path="*" element={<ExplorePage />} />
    </Routes>
  );
}
