import React from "react";

import { Navbar } from "./sections/Navbar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Collection } from "./sections/Collection";
import { Roadmap } from "./sections/Roadmap";
import { Team } from "./sections/Team";
import FAQ from "./sections/FAQ";
import { Footer } from "./sections/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Collection />
      <Roadmap />
      <Team />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Main;
