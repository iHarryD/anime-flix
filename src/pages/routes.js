import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "../components";
import { useAuth } from "../contexts";
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
import SettingPage from "./settingPage/SettingPage";

export default function AllRoutes() {
  const { userCredentials } = useAuth();
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute
            isAuthenticated={!userCredentials}
            redirectTo="/explore"
          >
            <LandingPage />
          </PrivateRoute>
        }
      />
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
      <Route
        path="/history"
        element={
          <PrivateRoute>
            <HistoryPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/watch-later"
        element={
          <PrivateRoute>
            <WatchLaterPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/setting"
        element={
          <PrivateRoute>
            <SettingPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/login"
        element={
          <PrivateRoute
            isAuthenticated={!userCredentials}
            redirectTo="/explore"
          >
            <LoginPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <PrivateRoute
            isAuthenticated={!userCredentials}
            redirectTo="/explore"
          >
            <SignupPage />
          </PrivateRoute>
        }
      />

      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
