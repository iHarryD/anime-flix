import { Routes, Route } from "react-router-dom";
import ExplorePage from "./explorePage/ExplorePage";
import PlaylistPage from "./playlistPage/PlaylistPage";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ExplorePage />} />
      <Route path="/playlist" element={<PlaylistPage />} />
    </Routes>
  );
}
