import { useLocation } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import "./css/utilities.css";

import AllRoutes from "./pages/routes";

export default function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" && <Header />}
      <AllRoutes />
      {location.pathname !== "/" && <Footer />}
    </div>
  );
}
