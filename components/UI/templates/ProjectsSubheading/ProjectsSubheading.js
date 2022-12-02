import React from 'react';
import styles from './ProjectsSubheading.module.css';
import TextLayoutBox from '../../molecules/TextLayoutBox/TextLayoutBox';
import ProjectDisplayMain from '../../atoms/ProjectDisplayMain/ProjectDisplayMain';
import project_data from '../../../../public/project_data';
const ProjectsSubheading = ({projectId = 0}) => {
  return (
    
    <div className={styles.subheading_parent}>
      <subheading_content className={styles.subheading_content}>
        <div className={styles.left_items}>
          <ProjectDisplayMain projectId={projectId}/>
        </div>
        <div className={styles.right_items}>
          <TextLayoutBox
            header_text="Intro"
            paragraph_text={project_data.projects[projectId].story}
            second_header_text={project_data.projects[projectId].second_heading}
            second_paragraph_text={project_data.projects[projectId].second_description}
          />
        </div>
      </subheading_content>
    </div>
  );
};

export default ProjectsSubheading;
