import React from 'react';
import { useState,useEffect } from 'react';
import ProjectsDisplayCard from '../../molecules/ProjectDisplayCard/ProjectDisplayCard';
import styles from './PortfolioSubheading.module.css';
import PortfolioProjectDisplayCard from '../../atoms/PortfolioProjectDisplayCard/PortfolioProjectDisplayCard';
import data from '../../../../public/project_data.js';
import { motion, AnimatePresence } from 'framer-motion';
import { PortfolioPageContext } from '../../../../contexts/PortfolioPageContext';
import { useContext } from 'react';
import { urlFor, client } from '../../../../client';
const PortfolioSubheading = () => {
  const { workId, setWorkId } = useContext(PortfolioPageContext);

  const [projects, setProjects] = useState([])
useEffect(() => {
  const query = '*[_type == "projects"]'
  client.fetch(query).then((data => setProjects(data)))

}, [])

let web_dev_projects = [];
projects.forEach(function (work) {
    if (work.category.split(',').includes("Web-Development")){
    web_dev_projects.push(work);
    }
  });

let visual_design_projects = [];
projects.forEach(function (work) {
    if ( work.category.includes("Visual Design")){
      visual_design_projects.push(work);
    }
  });

let animation_projects = [];
projects.forEach(function (work) {
    if (work.category.includes("Web-Development")){
      animation_projects.push(work);
    }
  });
  let email_projects = [];
projects.forEach(function (work) {
      if ( work.category.includes("Email Development")){
        email_projects.push(work);
      }
    });
  

  return (
    <div className={styles.portfolio_subheading_parent}>
      <div className={styles.portfolio_subheading_cards_bg} >
  
        <AnimatePresence>
        {workId == null? 
        <motion.div
            key={workId}
            initial={{ opacity: 0, traslateX: 0, translateY: 50 }}
            animate={{ opacity: 1, traslateX: 0, translateY: 0 }}
            className={styles.portfolio_subheading_cards}
            exit={{
              opacity: 0,
              translateY: 150,
              transition: { duration: 0.25, delay: 0 },
            }}
            transition={{
              duration: 0.5,
              delay: 0,
            }}
          >
            {projects.map((project, key) => (
              <PortfolioProjectDisplayCard
                key={parseInt(project.id+1)}
                key_value={parseInt(project.id)}
                button_text={project.name}
                project_image = {urlFor(project.imgUrl.asset._ref).url()}
                project = {project}
                
              />
            ))}
          </motion.div>
          : workId == 0 ? 
          <motion.div
          key={workId}
          initial={{ opacity: 0, traslateX: 0, translateY: 50 }}
          animate={{ opacity: 1, traslateX: 0, translateY: 0 }}
          className={styles.portfolio_subheading_cards}
          exit={{
            opacity: 0,
            translateY: 150,
            transition: { duration: 0.25, delay: 0 },
          }}
          transition={{
            duration: 0.5,
            delay: 0,
          }}
        >
          {web_dev_projects.map((project, key) => (
            <PortfolioProjectDisplayCard
              key={parseInt(project.id+1)}
              key_value={parseInt(project.id)}
              button_text={project.name}
              project_image = {urlFor(project.imgUrl.asset._ref).url()}
              project = {project}
              
            />
          ))}
        </motion.div>


          : workId == 1 ?         
          
          <motion.div
          key={workId}
          initial={{ opacity: 0, traslateX: 0, translateY: 50 }}
          animate={{ opacity: 1, traslateX: 0, translateY: 0 }}
          className={styles.portfolio_subheading_cards}
          exit={{
            opacity: 0,
            translateY: 150,
            transition: { duration: 0.25, delay: 0 },
          }}
          transition={{
            duration: 0.5,
            delay: 0,
          }}
        >
          {visual_design_projects.map((project, key) => (
            <PortfolioProjectDisplayCard
            key={key}
            key_value={key}
            button_text={project.name}
            project_image = {urlFor(project.imgUrl.asset._ref).url()}
              
            />
          ))}
        </motion.div> 
         : workId == 2 ?

             <motion.div
         key={workId}
         initial={{ opacity: 0, traslateX: 0, translateY: 50 }}
         animate={{ opacity: 1, traslateX: 0, translateY: 0 }}
         className={styles.portfolio_subheading_cards}
         exit={{
           opacity: 0,
           translateY: 150,
           transition: { duration: 0.25, delay: 0 },
         }}
         transition={{
           duration: 0.5,
           delay: 0,
         }}
       >
         {animation_projects.map((project, key) => (
           <PortfolioProjectDisplayCard
           key={key}
           key_value={key}
           button_text={project.name}
           project_image = {urlFor(project.imgUrl.asset._ref).url()}
           project = {project}
             
           />
         ))}
       </motion.div>  
        
         : workId == 3 ? 

         <motion.div
         key={workId}
         initial={{ opacity: 0, traslateX: 0, translateY: 50 }}
         animate={{ opacity: 1, traslateX: 0, translateY: 0 }}
         className={styles.portfolio_subheading_cards}
         exit={{
           opacity: 0,
           translateY: 150,
           transition: { duration: 0.25, delay: 0 },
         }}
         transition={{
           duration: 0.5,
           delay: 0,
         }}
       >
         {email_projects.map((project, key) => (
           <PortfolioProjectDisplayCard
           key={key}
           key_value={key}
           button_text={project.name}
           project_image = {urlFor(project.imgUrl.asset._ref).url()}
           project = {project}
             
           />
         ))}
       </motion.div> 

         :null
        }

        </AnimatePresence>
      </div>
    </div>
  );
};

export default PortfolioSubheading;
