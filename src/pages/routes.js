import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import LandingPage from "./landingPage/LandingPage";

export default function AllRoutes() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/" && <Header />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      {location.pathname !== "/" && <Footer />}
    </>
  );
}
