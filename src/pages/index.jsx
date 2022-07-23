import React from "react";
import Main from "../components/main/index";
import About from "../components/main/about";
import Skills from "../components/main/skills";
import Projects from "../components/projects/index";
import Contact from "../components/main/contact";
import { Element } from "react-scroll";

const Home = () => {
  return (
    <Element name="home">
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Element>
  );
};

export default Home;
