import React from 'react';
import { useContext } from 'react';
import { Context } from 'react';
import { ProjectCard } from '../../../../components/UI/atoms/ProjectCard/ProjectCard';
import { HomeProjectDetailsContext } from '../../../../contexts/HomeProjectDetailsContext';
import ProjectDisplayCard from '../../molecules/ProjectDisplayCard/ProjectDisplayCard';
import styles from './HomeSubheading.module.css';
import data from '../../../../public/project_data';
import Image from 'next/future/image';
import { useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
const HomeSubheading = () => {
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
      <subheading_left className={styles.subheading_left}>
        <subheading_left_bg className={styles.subheading_left_bg}>
          <subheading_left_items className={styles.subheading_left_items}>
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

               
                gradient_container_value ={
                  i === projectListId
                  ? 1
                  : 0
                }
              />
            ))}
          </subheading_left_items>
        </subheading_left_bg>
      </subheading_left>
      <subheading_right className={styles.subheading_right}>
        <subheading_right_bg className={styles.box_border_gradient}>
          <div className={styles.project_container}>
            <AnimatePresence>
              <motion.div
                key={projectListId}
                initial={{ opacity: 0, traslateX: 0, translateY: 50 }}
                animate={{ opacity: 1, traslateX: 0, translateY: 0 }}
                exit={{
                  opacity: 0,
                  translateY: 150,
                  transition: { duration: 0.25, delay: 0 },
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                }}
                className={styles.project_motion_div}
              >
                <ProjectDisplayCard
                  index_value={projectListId}
                  details_index_value={detailsIndex}
                  title={data.projects[projectListId].name}
                  image_source={data.projects[projectListId].image_source}
                  
                  
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </subheading_right_bg>
      </subheading_right>
    </section>
  );
};

export default HomeSubheading;
