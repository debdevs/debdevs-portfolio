import React from 'react';
import styles from './ProjectsSubheading.module.css';
import TextLayoutBox from '../../molecules/TextLayoutBox/TextLayoutBox';
import ProjectDisplayMain from '../../atoms/ProjectDisplayMain/ProjectDisplayMain';
import project_data from './project_data';
const ProjectsSubheading = () => {
  return (
    <div className={styles.subheading_parent}>
      <subheading_content className={styles.subheading_content}>
        <left_items className={styles.left_items}>
          <ProjectDisplayMain />
        </left_items>
        <right_items className={styles.right_items}>
          <TextLayoutBox
            header_text="Intro"
            paragraph_text={project_data.products[0].story}
            second_header_text={project_data.products[0].second_heading}
            second_paragraph_text={project_data.products[0].second_description}
          />
        </right_items>
      </subheading_content>
    </div>
  );
};

export default ProjectsSubheading;
