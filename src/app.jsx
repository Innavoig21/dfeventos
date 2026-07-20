import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Values from "./components/values/values";
import Services from "./components/services/services";
import Clients from "./components/clients/clients";
import Equipment from "./components/equipment/equipment";
import Team from "./components/team/team";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Values />
      <Services />
      <Clients />
      <Equipment />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
