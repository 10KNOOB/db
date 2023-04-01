import React from "react";
import Hero from "./Hero";
import ProjectsSample from "./ProjectsSample";
import SamePage from "./same-page";

const HomeIndex = () => {
  return (
    <div className="relative z-10 w-full overflow-x-clip">
      <Hero />
      <ProjectsSample />
      <SamePage />
    </div>
  );
};

export default HomeIndex;
