import React from 'react';
import ProjectsHero from '../components/UI/templates/ProjectsHero/ProjectsHero';
import styles from '../styles/Home.module.css';
import NavBar from '../components/UI/templates/NavBar/NavBar';
import ProjectsSubheading from '../components/UI/templates/ProjectsSubheading/ProjectsSubheading';
import { motion } from 'framer-motion';
export const Projects = () => {
  const variants = {
    hidden: { opacity: 0, x: 0, y: 35 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
    duration: { opacity: 0, x: 0, y: -100 },
    transition: { ease: 'easeInOut', duration: 20 },
  };
  return (
    <motion.main
      variants={variants} // Pass the variant object into Framer Motion
      initial="hidden" // Set the initial state to variants.hidden
      animate="enter" // Animated state to variants.enter
      exit="exit" // Exit state (used later) to variants.exit
      transition={{ type: 'linear' }} // Set the transition to linear
      className=""
    >
      <NavBar />
      <ProjectsHero />
      <ProjectsSubheading />
    </motion.main>
  );
};
export default Projects;
