import "./App.css";
import Navbar from "../components/navbar/Navbar";
import Home from "../components/home/Home";
import About from "../components/about/About";
import Services from "../components/services/Services";
import Footer from "../components/footer/Footer";
import Contact from "../components/contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
