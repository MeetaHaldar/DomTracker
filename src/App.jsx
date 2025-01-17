import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Title subtitle="Our Services" title="What we Offer" />
      <Services />
      <About />
      <Title subtitle="TESTIMONIALS" title="What our experts says" />
      <Testimonials />
      <Title subtitle="Contact US" title="Get in Touch" />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
