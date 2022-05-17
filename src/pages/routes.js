import { Routes, Route } from "react-router-dom";
import ExplorePage from "./explorePage/ExplorePage";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ExplorePage />} />
    </Routes>
  );
}
