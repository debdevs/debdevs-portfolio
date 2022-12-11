
import ProjectsHero from '../components/UI/templates/ProjectsHero/ProjectsHero';
import NavBar from '../components/UI/templates/NavBar/NavBar';
import ProjectsSubheading from '../components/UI/templates/ProjectsSubheading/ProjectsSubheading';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { urlFor, client } from 'client.js';


const variants = {
    hidden: { opacity: 0, x: 0, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 0 },
    duration: { opacity: 0, x: 0, y: 0 },
    transition: { ease: 'easeInOut', duration: 20 },
  };


const Post = ({project,projects}) => {
    const {  name,id,link } = project;
  return (
    <div>
{/* <h1>{id},{name},{link.current}</h1> */}

    <motion.main
      variants={variants} // Pass the variant object into Framer Motion
      initial="hidden" // Set the initial state to variants.hidden
      animate="enter" // Animated state to variants.enter
      exit="exit" // Exit state (used later) to variants.exit
      transition={{ type: 'linear' }} // Set the transition to linear
      className=""
    >
      <NavBar />
      <ProjectsHero projectId={id} project_data= {project}/>
{/* 
      <h1 onClick={console.log("check token", process.env.REACT_APP_SANITY_PROJECT_ID)}>{process.env.REACT_APP_SANITY_PROJECT_ID}s</h1> */}
      <ProjectsSubheading projectId={id} project_data= {project}/>
    </motion.main>
  </div>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "projects"] {
    link {
      current
    }
  }
  `;

  const projects = await client.fetch(query);

  const paths = projects.map((project) => ({
    params: { 
      link: project.link.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { link }}) => {
  const query = `*[_type == "projects" && link.current == '${link}'][0]`;
  const projectsQuery = '*[_type == "projects"]'
  
  const project = await client.fetch(query);
  const projects = await client.fetch(projectsQuery);

  // console.log(project);

  return {
    props: { projects, project }
  }
}
  
export default Post