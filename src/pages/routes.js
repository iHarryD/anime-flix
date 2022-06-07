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
import LandingPage from "./landingPage/LandingPage";
import Page404 from "./page404/Page404";
import SinglePlaylistPage from "./singlePlaylistPage/SinglePlaylistPage";

export default function AllRoutes() {
  const { userCredentials } = useAuth();
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="/watch/:videoID" element={<SingleVideoPage />} />
      <Route
        path="/playlists"
        element={
          <PrivateRoute>
            <PlaylistPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/playlists/:playlistID"
        element={
          <PrivateRoute>
            <SinglePlaylistPage />
          </PrivateRoute>
        }
      />
      <Route path="/history" element={<HistoryPage />} />
      <Route path="/watch-later" element={<WatchLaterPage />} />
      <Route
        path="/login"
        element={
          <PrivateRoute isAuthenticated={!userCredentials.token} redirectTo="/">
            <LoginPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <PrivateRoute isAuthenticated={!userCredentials.token} redirectTo="/">
            <SignupPage />
          </PrivateRoute>
        }
      />

      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
