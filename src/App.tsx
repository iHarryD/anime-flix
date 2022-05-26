import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import "./css/utilities.css";

import AllRoutes from "./pages/routes";

export default function App() {
  return (
    <div className="App">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}
