import React from 'react';
import ProjectsHero from '../components/UI/templates/ProjectsHero/ProjectsHero';
import styles from '../styles/Home.module.css';
import NavBar from '../components/UI/templates/NavBar/NavBar';
export const Projects = () => {
  return (
    <div>
      <NavBar />
      <ProjectsHero />
    </div>
  );
};
export default Projects;
