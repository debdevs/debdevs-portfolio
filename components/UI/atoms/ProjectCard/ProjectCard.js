import React from 'react';
import styles from './ProjectCard.module.css';
import Image from 'next/future/image';
import { useContext } from 'react';
import { Context } from 'react';

import { HomeProjectDetailsContext } from '../../../../contexts/HomeProjectDetailsContext';

import Link from 'next/link';
export const ProjectCard = ({
  title,
  description,
  set_id,
  link_project = "#",
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
    <Link href={link_project}>
    <div
    
      className={gradient_container_values[gradient_container_value]}

      onClick={set_id}
    >
      <div className={styles.grad_bg}>
        <div className={styles.grad_content_container}>
          <image-container className={styles.image_container}>

        <Image
          src={img_src}
          layout = "fill"
          className={styles.image_item}
          alt = "Image"
          
    />
          </image-container>
          <div className={styles.text_main}>
            <h1 className={styles.text_color}>{title}</h1>
            <p className={styles.sub_text_color}>{description}</p>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};
