import AboutUs from "./components/Contact";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Nav from "./components/Nav";
import Services from "./components/Services";
import "./index.css";
import Cards from "./components/Cards";

function App() {
  return (
    <>
      <Nav />
      <Landing />

      <Services />
      <Cards />
      <AboutUs />
      <Footer />
    </>
  );
}

export default App;
