import React from "react";
import ProjectItem from "./project-item";
import { Element } from "react-scroll";

const Projects = () => {
  return (
    <Element name="projects">
      <div id="projects" className="w-full bg-[#030303] py-20">
        <div className="max-w-[1240px] mx-auto px-2 py-16">
          <p className="text-xl pb-28 text-center tracking-widest uppercase text-[#f56725]">
            Projects I&apos;ve Built
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <ProjectItem
              title="Sweet Smells"
              backgroundImg="/images/projects/sweet-smells.png"
              projectUrl="https://sweet-smells-4bp262egn-shaqayeqbs.vercel.app/"
              tech="Next JS , mongoDb"
            />
            <ProjectItem
              title="Jewelry Store"
              backgroundImg="/images/projects/jewelry-store.png"
              projectUrl="https://jewelry-store-vert.vercel.app/"
              tech="Next JS , firebase"
            />
            <ProjectItem
              title="Tic Tac Toe"
              backgroundImg="/images/projects/tic-tac-toe.png"
              projectUrl="https://tic-tac-toe-six-blush.vercel.app/"
              tech="React JS"
            />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Projects;
