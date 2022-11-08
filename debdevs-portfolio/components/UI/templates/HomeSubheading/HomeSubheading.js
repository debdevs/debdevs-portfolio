import React from 'react';
import { useContext } from 'react';
import { Context } from 'react';
import { ProjectCard } from '../../../../components/UI/atoms/ProjectCard/ProjectCard';
import { HomeProjectDetailsContext } from '../../../../contexts/HomeProjectDetailsContext';
import ProjectDisplayCard from '../../molecules/ProjectDisplayCard/ProjectDisplayCard';
import styles from './HomeSubheading.module.css';
import data from '../../../../public/project_data';

import { useState } from 'react';
const HomeSubheading = () => {
  const [projectId, setProjectId] = useContext(HomeProjectDetailsContext);

  const { detailsIndex } = useContext(HomeProjectDetailsContext);
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
                title={project.name}
                description={project.description}
              />
            ))}
          </subheading_left_items>
        </subheading_left_bg>
      </subheading_left>
      <subheading_right className={styles.subheading_right}>
        <subheading_right_bg className={styles.box_border_gradient}>
          <ProjectDisplayCard
            index_value={0}
            details_index_value={detailsIndex}
          />
        </subheading_right_bg>
      </subheading_right>
    </section>
  );
};

export default HomeSubheading;
