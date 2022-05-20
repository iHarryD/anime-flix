import { Routes, Route } from "react-router-dom";
import ExplorePage from "./explorePage/ExplorePage";
import HistoryPage from "./historyPage/HistoryPage";
import SingleVideoPage from "./singleVideoPage/SingleVideoPage";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="/watch/:videoID" element={<SingleVideoPage />} />
      <Route path="history" element={<HistoryPage />} />
      <Route path="*" element={<ExplorePage />} />
    </Routes>
  );
}
