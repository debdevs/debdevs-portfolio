import React from 'react';
import styles from './WorkCard.module.css';
import Image from 'next/future/image';
import { useContext } from 'react';
import { Context } from 'react';

import { HomeProjectDetailsContext } from '../../../../contexts/HomeProjectDetailsContext';
export const WorkCard = ({
  title,
  description,
  set_id,
  gradient_container_value,
  img_src = "https://cdn-ecbjf.nitrocdn.com/trFSLbdBEIFWvubMBbeHotqYSOVJJYEv/assets/static/optimized/rev-f8cdbc8/blog/wp-content/uploads/2020/02/40-BEST-WEBSITE-DESIGNS-2022.jpg",
}) => {

  const { projectListId, setProjectListId } = useContext(
    HomeProjectDetailsContext
  );
  const gradient_container_values = [
    styles.gradient_container,
    styles.gradient_container_clicked,
  ];
  return (
    <div
    
      className={gradient_container_values[gradient_container_value]}
      onClick={set_id}
    >
      <grad_bg className={styles.grad_bg}>
        <grad_content_container className={styles.grad_content_container}>
          <image-container className={styles.work_image_container}>

        <Image
      src={img_src}
      layout = "fill"
    
              className={styles.image_item}
              alt = "Work Sample Image"
    />
          </image-container>
          <text_items className={styles.text_main}>
            <h1 className={styles.text_color}>{title}</h1>
            <p className={styles.sub_text_color}>{description}</p>
          </text_items>
        </grad_content_container>
      </grad_bg>
    </div>
  );
};
