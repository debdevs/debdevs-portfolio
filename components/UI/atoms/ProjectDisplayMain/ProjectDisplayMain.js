import React from 'react';
import styles from './ProjectDisplayMain.module.css';
import Image from 'next/future/image';
import data from '../../../../public/project_data.js';
import base_image from '../../../../public/images/showman_image.png'
const ProjectDisplayMain = ({projectId = 0, image_source = base_image}) => {


  return (
    <div_image_container className={styles.left_items_image_container}>
              <Image
      src={image_source}
      alt = {"Project Image"}
      layout = "fill"
      width = "900"
      height= "900"
    
          
    />
   
    </div_image_container>
  );
};

export default ProjectDisplayMain;
