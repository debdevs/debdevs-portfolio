import React from 'react';
import styles from './ProjectsSubheading.module.css';
import TextLayoutBox from '../../molecules/TextLayoutBox/TextLayoutBox';
import ProjectDisplayMain from '../../atoms/ProjectDisplayMain/ProjectDisplayMain';
import project_data from '../../../../public/project_data';
import { useEffect, useState } from 'react';
import { urlFor, client } from '../../../../client';



const ProjectsSubheading = ({projectId = 0, project_data}) => {

  const [projects, setProjects] = useState([])
  useEffect(() => {
     const query = '*[_type == "projects"]'
     client.fetch(query).then((data => setProjects(data)))
   
   }, []);






  return (
    
    <div className={styles.subheading_parent}>

      <subheading_content className={styles.subheading_content}>
      <div className={styles.left_items}>
        <ProjectDisplayMain projectId={projectId} image_source = {urlFor(project_data.imgUrl.asset._ref).url()}/>
      </div>
      <div className={styles.right_items}>
        <TextLayoutBox
          header_text="Intro"
          paragraph_text={project_data.story}
          second_header_text={project_data.second_heading}
          second_paragraph_text={project_data.second_description}
        />
      </div>
    </subheading_content>




      

    </div>
  );
};

export default ProjectsSubheading;
