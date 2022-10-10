import React from 'react';
import styles from './ProjectCard.module.css';
export const ProjectCard = () => {
  return (
    <div className={styles.gradient_container}>
      <grad_bg className={styles.grad_bg}>
        <grad_content_container className={styles.grad_content_container}>
          <image-container className={styles.image_container}>
            <img
              className={styles.image_item}
              src="https://cdn-ecbjf.nitrocdn.com/trFSLbdBEIFWvubMBbeHotqYSOVJJYEv/assets/static/optimized/rev-f8cdbc8/blog/wp-content/uploads/2020/02/40-BEST-WEBSITE-DESIGNS-2022.jpg"
            />
          </image-container>
          <text-items className={styles.text_color}>
            <h1 className={styles.text_color}>Showman Video</h1>
            <p className={styles.sub_text_color}>
              A fullstack web application for delivering on-demand custom videos
            </p>
          </text-items>
        </grad_content_container>
      </grad_bg>
    </div>
  );
};
