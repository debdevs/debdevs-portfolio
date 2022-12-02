import React from 'react';
import { useContext } from 'react';
import { Context } from 'react';
import { ProjectCard } from '../../../../components/UI/atoms/ProjectCard/ProjectCard';
import { HomeProjectDetailsContext } from '../../../../contexts/HomeProjectDetailsContext';
import ProjectDisplayCard from '../../molecules/ProjectDisplayCard/ProjectDisplayCard';
import styles from './HomeSubheading.module.css';
import data from '../../../../public/project_data';
import Image from 'next/future/image';
import { useState,useEffect } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
const HomeSubheading = () => {
  const [isMobile, setIsMobile] = useState(false)

  //choose the screen size 
const handleResize = () => {
  if (window.innerWidth < 1024) {
      setIsMobile(true)
  } else {
      setIsMobile(false)
  }
}

// create an event listener
useEffect(() => {
  window.addEventListener("resize", handleResize)
})

// finally you can render components conditionally if isMobile is True or False 


  const [projectId, setProjectId] = useContext(HomeProjectDetailsContext);
  const { projectListId, setProjectListId } = useContext(
    HomeProjectDetailsContext
  );
  const { detailsIndex, setDetailsIndex } = useContext(
    HomeProjectDetailsContext
  );

  const { clickedId, setClickedId } = useContext(HomeProjectDetailsContext);
  const [selected, setSelected] = useState(0);
  
  return (
    <section className={styles.subheading_container}>
      <div className={styles.subheading_left}>
        <div className={styles.subheading_left_bg}>
          <div className={styles.subheading_left_items}>
            <h1 className={styles.subheading_left_items_header}>
              Projects List
            </h1>
            {data.projects.map((project, i) => (
              <ProjectCard
                key={i}
                title={project.name}
                description={project.description}
                set_id={() => {
                  setProjectListId(i);
                  setDetailsIndex(0);
                  setSelected(i);

                  console.log(i);
                }}
    
                img_src = {project.image_source[0]}
                link_project = {isMobile == false? "javascript:void(0)": '/' + (i+1)}
               
                gradient_container_value ={
                  i === projectListId
                  ? 1
                  : 0
                }
              />
            ))}
          </div>
        </div>
      </div>
      {isMobile == false ? 
      
      <div className={styles.subheading_right}>
      <div className={styles.box_border_gradient}>
        <div className={styles.project_container}>
          <AnimatePresence>
            <motion.div
              key={projectListId}
              initial={{ opacity: 0, traslateX: 0, translateY: -50 }}
              animate={{ opacity: 1, traslateX: 0, translateY: 0 }}
              exit={{
                opacity: 0,
                translateY: 50,
                transition: { duration: 0.25, delay: 0 },
              }}
              transition={{
                duration: .75,
                delay: 0.2,
              }}
              className={styles.project_motion_div}
            >
              <ProjectDisplayCard
                index_value={projectListId}
                details_index_value={detailsIndex}
                title={data.projects[projectListId].name}
                image_source={data.projects[projectListId].image_source}
                click_prop = {projectListId}
                
                
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
      
      
      
      
      : 

      <div className={styles.mobile_modal_container}>


      
      

      </div>
      
      
      }
    
    </section>
  );
};

export default HomeSubheading;
