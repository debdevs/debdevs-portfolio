import React from 'react';
import styles from './ProjectsHero.module.css';
import { ButtonRowLanding } from '../../atoms/ButtonRowLanding/ButtonRowLanding';
import LandingTabs from '../../molecules/LandingTabs/LandingTabs';
const ProjectsHero = () => {
  return (
    <div>
      <section className={styles.projects_hero}>
        <hero_content className={styles.hero_content}>
          <left_items className={styles.left_items}></left_items>
          <right_items className={styles.right_items}>
            <text_layout className={styles.text_layout}>
              <h1>Showman Video</h1>
              <h2>
                The <span>Magnum Opus</span>
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
              <ButtonRowLanding />
            </text_layout>
          </right_items>
        </hero_content>
       
      </section>
      <LandingTabs />
    </div>
  );
};

export default ProjectsHero;
