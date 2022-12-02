import React from 'react';
import styles from './IconWithToolTip.module.css';
import Image from 'next/image';
const IconWithToolTip = ({ cover_image, title }) => {
  return (
    <div className={styles.tooltip}>
      <div className={styles.image_wrapper}>
        <Image src={cover_image} className={styles.cover_image} />
      </div>
      <span className={styles.tooltiptext}>{title}</span>
    </div>
  );
};

export default IconWithToolTip;
