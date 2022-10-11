import React from 'react';
import ProjectsHero from '../components/UI/templates/ProjectsHero/ProjectsHero';
import styles from '../styles/Home.module.css';
import NavBar from '../components/UI/templates/NavBar/NavBar';
import ProjectsSubheading from '../components/UI/templates/ProjectsSubheading/ProjectsSubheading';
export const Projects = () => {
  return (
    <div>
      <NavBar />
      <ProjectsHero />
      <ProjectsSubheading />
    </div>
  );
};
export default Projects;
