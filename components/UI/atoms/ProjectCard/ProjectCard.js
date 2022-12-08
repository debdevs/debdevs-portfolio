import React from 'react';
import styles from './ProjectCard.module.css';
import Image from 'next/future/image';
import { useContext } from 'react';
import { Context } from 'react';
import placeholder from '../../../../public/images/showman_image.png'
import { HomeProjectDetailsContext } from '../../../../contexts/HomeProjectDetailsContext';

import Link from 'next/link';
export const ProjectCard = ({
  title,
  description,
  set_id,
  link_project = "javascript: void(0)",
  gradient_container_value,
  img_src = placeholder,
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
          width="300" 
          height="500" 
          
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
