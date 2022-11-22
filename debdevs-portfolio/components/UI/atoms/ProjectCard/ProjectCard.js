import React from 'react';
import styles from './ProjectCard.module.css';
import Image from 'next/future/image';
export const ProjectCard = ({
  title,
  description,
  set_id,
  gradient_container_value,
  img_src,
}) => {
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
          <image-container className={styles.image_container}>

        <Image
      src={img_src}
      layout = "fill"
    
              className={styles.image_item}
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
