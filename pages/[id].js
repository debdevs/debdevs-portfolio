import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'

import data from '../public/project_data'
import NextLink from 'next/link';
import ProjectsHero from '../components/UI/templates/ProjectsHero/ProjectsHero';
import NavBar from '../components/UI/templates/NavBar/NavBar';
import ProjectsSubheading from '../components/UI/templates/ProjectsSubheading/ProjectsSubheading';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { urlFor, client } from 'client';


const variants = {
    hidden: { opacity: 0, x: 0, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 0 },
    duration: { opacity: 0, x: 0, y: 0 },
    transition: { ease: 'easeInOut', duration: 20 },
  };


const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <img
          alt={value.alt || ' '}
          loading="lazy"
          src={urlFor(value).width(320).height(240).fit('max').auto('format')}
        />
      )
    }
  }
}

const Post = ({projects}) => {
  const {

    name = 'Missing name',
    id = projects[1].id,
    categories,
    authorImage,
    body = []
  } = projects
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
      <ProjectsHero projectId={id}/>
      <ProjectsSubheading projectId={id}/>
    </motion.main>
  </div>
  )
}

const query = groq`*[_type == "projects"]`
export async function getStaticPaths() {
   
  const paths = await client?.fetch(query).then(
    groq`*[_type == "projects"]`
  )




  return {
    paths: paths?.map((link) => ({params: {link}}, {params: { id: "rocketeer"}})),
    fallback: true,
    
  }
}

export async function getStaticProps(context) {
  // It's important to default the link so that it doesn't return "undefined"
  const { link = "" } = context.params
  const projects = await client?.fetch(query, { link })
  return {
    props: {
      projects
    }
  }
}
export default Post