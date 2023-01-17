
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


const Post = ({project,projects, mux}) => {
    const {  name,id,link } = project;
  return (
    <div>


    <motion.main
      variants={variants} // Pass the variant object into Framer Motion
      initial="hidden" // Set the initial state to variants.hidden
      animate="enter" // Animated state to variants.enter
      exit="exit" // Exit state (used later) to variants.exit
      transition={{ type: 'linear' }} // Set the transition to linear
      className=""
    >
      <NavBar />
      <ProjectsHero projectId={id} project_data= {project} mux_data_import = {mux} mux_video = {mux.data}/>
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

  const mux_query =`*[_type == "mux.videoAsset" ]`


  const mux = await client.fetch(mux_query);



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

  const mux_query =`*[_type == "mux.videoAsset" && data != null && _id == '${project?.video?.asset._ref}' ]`
  // const mux_query =`*[_type == "mux.videoAsset" && data != null && _id == "2ad59496-08f5-419b-9f42-1a9c7d6784ba" ]`
  // const mux_query =`*[_type == "mux.videoAsset" && data != null && _id != null ]`
  // const mux_query =`*[_type == "mux.videoAsset" && data._id == '${project?.video?.asset._ref}' ]`
  const mux = await client.fetch(mux_query);

  // console.log(project);

  return {
    props: { projects, project, mux}
  }
}
  
export default Post