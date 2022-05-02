import "./css/generic.css";
import "./css/utilities.css";
import "./css/variables.css";
import "./css/typography.css";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import PageNavbar from "./components/pageNavbar/PageNavbar";

export default function App() {
  return (
    <div className="App">
      <Header />
      <PageNavbar />
      <Footer />
    </div>
  );
}
