import React from 'react';
import styles from './ProjectDisplayMain.module.css';
import Image from 'next/future/image';
import data from '../../../../public/project_data.js';
const ProjectDisplayMain = ({projectId = 0}) => {
  return (
    <div_image_container className={styles.left_items_image_container}>
              <Image
      src={data.projects[projectId].image_source[0]}
      alt = {"Project Image"}
      layout = "fill"
    
          
    />
   
    </div_image_container>
  );
};

export default ProjectDisplayMain;
