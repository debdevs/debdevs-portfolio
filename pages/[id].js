
import data from '../public/project_data'

import NextLink from 'next/link';

import ProjectsHero from '../components/UI/templates/ProjectsHero/ProjectsHero';

import NavBar from '../components/UI/templates/NavBar/NavBar';
import ProjectsSubheading from '../components/UI/templates/ProjectsSubheading/ProjectsSubheading';
import { motion } from 'framer-motion';
const variants = {
    hidden: { opacity: 0, x: 0, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 0 },
    duration: { opacity: 0, x: 0, y: 0 },
    transition: { ease: 'easeInOut', duration: 20 },
  };
export const getStaticProps = async ({ params }) => {
  const playlistList = data.projects.filter((p) => p.id.toString() === params.id);
  return {
    props: {
      song: playlistList[0],
    },
  };
};

export const getStaticPaths = async () => {
  const paths = data.projects.map((song) => ({
    params: { id: song.id.toString() },
  }));

  return { paths, fallback: false };
};

export default ({ song }) => (
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
      <ProjectsHero projectId={song.id-1}/>
      <ProjectsSubheading projectId={song.id-1}/>
    </motion.main>
  </div>
);