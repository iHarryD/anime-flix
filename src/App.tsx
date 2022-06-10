import { useLocation } from "react-router-dom";
import { Header, Footer } from "./components";
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
