import React from "react";
import Hero from "./hero";
import Awards from "./Award";
import Stats from "./Stats";
import Education from "./Education";
import OpenAccount from "../OpenAccount";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Pricing from "./Pricing";
function HomePage() {
  return (
    <>

        <Hero />

        <Stats />
        <Pricing />
        <Education />
        <OpenAccount />

    </>
  );
}

export default HomePage;