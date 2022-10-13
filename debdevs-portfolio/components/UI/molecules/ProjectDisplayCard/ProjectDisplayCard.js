import React from 'react';
import styles from './ProjectDisplayCard.module.css';
import { ButtonRowFront } from '../../../../components/UI/atoms/ButtonRowFront/ButtonRowFront';
import { ThemeButton1 } from '../../../../components/UI/atoms/ThemeButton1/ThemeButton1';
import { ThemeButton2 } from '../../../../components/UI/atoms/ThemeButton2/ThemeButton2';
import HomeTabs from '../HomeTabs/HomeTabs';
const ProjectDisplayCard = () => {
  return (
    <subheading_right_bg_overlay className={styles.subheading_right_bg_overlay}>
      <h1 className={styles.project_header}>Showman Video</h1>
      <h2 className={styles.project_overview}>~My Magnum Opus</h2>
      <image_fx_container className={styles.image_fx_container}>
        <left_image_container className={styles.left_image_container}>
          <img
            src="https://cdn-ecbjf.nitrocdn.com/trFSLbdBEIFWvubMBbeHotqYSOVJJYEv/assets/static/optimized/rev-f8cdbc8/blog/wp-content/uploads/2020/02/40-BEST-WEBSITE-DESIGNS-2022.jpg"
            className={styles.left_image}
          />
        </left_image_container>
        <right_image_container className={styles.right_image_container}>
          <img
            src="https://cdn-ecbjf.nitrocdn.com/trFSLbdBEIFWvubMBbeHotqYSOVJJYEv/assets/static/optimized/rev-f8cdbc8/blog/wp-content/uploads/2020/02/40-BEST-WEBSITE-DESIGNS-2022.jpg"
            className={styles.right_image}
          />
        </right_image_container>
      </image_fx_container>

      <HomeTabs />

      <p className={styles.project_description}>
        Showman video is a full-stack web application that Uses a unique
        combination of technologies to deliver custom & on-demand videos to
        individuals and businesses. <br></br>
        <br></br>It uses React for the front-end, Django for user authentication
        and page management, and the REST API to communicate with AWS for user
        renders
      </p>
      <project_buttons className={styles.project_buttons}>
        <ThemeButton1 />
        <ThemeButton2 />
      </project_buttons>
    </subheading_right_bg_overlay>
  );
};

export default ProjectDisplayCard;
