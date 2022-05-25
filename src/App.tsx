import "./css/utilities.css";

import Header from "./components/header/Header";
import AllRoutes from "./pages/routes";
import Footer from "./components/footer/Footer";
import { GlobalStyle } from "./components/styled/Global.styled";

export default function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}
