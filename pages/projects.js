import React, { useState } from 'react';
import ProjectsHero from '../components/UI/templates/ProjectsHero/ProjectsHero';

import NavBar from '../components/UI/templates/NavBar/NavBar';
import ProjectsSubheading from '../components/UI/templates/ProjectsSubheading/ProjectsSubheading';
import { ProjectLandingContext } from '../contexts/ProjectLandingContext';
import { motion } from 'framer-motion';
export const Projects = () => {
  const [projectLandingId, setProjectLandingId] = useState(0)
  const variants = {
    hidden: { opacity: 0, x: 0, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 0 },
    duration: { opacity: 0, x: 0, y: 0 },
    transition: { ease: 'easeInOut', duration: 20 },
  };
  return (
    <ProjectLandingContext.Provider
      value={{
        projectLandingId,
        setProjectLandingId,
      }}
    >
    <motion.main
      variants={variants} // Pass the variant object into Framer Motion
      initial="hidden" // Set the initial state to variants.hidden
      animate="enter" // Animated state to variants.enter
      exit="exit" // Exit state (used later) to variants.exit
      transition={{ type: 'linear' }} // Set the transition to linear
      className=""
    >
      <NavBar />
      <ProjectsHero projectId={projectLandingId}/>
      <ProjectsSubheading projectId={projectLandingId} projectKey ={projectLandingId} />
    </motion.main>
    </ProjectLandingContext.Provider>
  );
};
export default Projects;
