import "./App.css";
import { useEffect } from "react";
import HomePage from "./Sections/Home/Home";
import AboutPage from "./Sections/About/About";
import ServicesPage from "./Sections/Services/Services";
import WhyUsPage from "./Sections/Whyus/WhyUs";
import Footer from "./Sections/Footer/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return (
    <div className="App">
      <HomePage />
      <AboutPage />
      <ServicesPage />
      <WhyUsPage />
      <Footer />
    </div>
  );
}

export default App;
