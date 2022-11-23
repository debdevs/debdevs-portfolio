import React from 'react';
import styles from './ProjectsHero.module.css';
import LandingTabs from '../../molecules/LandingTabs/LandingTabs';
import Image from 'next/future/image';
import data from '../../../../public/project_data.js';
const ProjectsHero = ({projectId = 0}) => {
  return (
    <div>
      <section className={styles.projects_hero}>
        <hero_content className={styles.hero_content}>
          <left_items className={styles.left_items}>
            <left_items_image_container
              className={styles.left_items_image_container}
            >
              <Image
      src={data.projects[projectId].image_source[0]}
      alt = {"Project Image"}
      layout = "fill"
    
          
    />
              <img src="https://cdn-ecbjf.nitrocdn.com/trFSLbdBEIFWvubMBbeHotqYSOVJJYEv/assets/static/optimized/rev-f8cdbc8/blog/wp-content/uploads/2020/02/40-BEST-WEBSITE-DESIGNS-2022.jpg" />
            </left_items_image_container>
          </left_items>
          <right_items className={styles.right_items}>
            <text_layout className={styles.text_layout}>
              <h1>{data.projects[projectId].name}</h1>
              <h2>
              
                The <span>{data.projects[projectId].tagline.split(" ").splice(-2).join(" ")}</span>
              </h2>
              <div className={styles.line_div} />
              <p>
                My personal favorite project. A fullstack application to deliver
                videos to individuals and businesses. It uses custom technology
                from end to end.
              </p>
              <h3>Tech Stack:</h3>
              <h4>React • Django • AWS • Blender</h4>
              <tech_array></tech_array>
              <LandingTabs />
            </text_layout>
          </right_items>
        </hero_content>
      </section>
    </div>
  );
};

export default ProjectsHero;
