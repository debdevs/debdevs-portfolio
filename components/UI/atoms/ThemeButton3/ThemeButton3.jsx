import React from 'react';
import styles from './ThemeButton3.module.css';
import Link from 'next/link';
const ThemeButton3 = ({ button_text = 'My Work', button_link = '/', button_function }) => {
  return (
    <Link href={button_link} >
      <button className={styles.main_button} onClick = {button_function}>
        <a></a>
        <div className={styles.main_button_overlay}>
          <h1 className={styles.main_button_text}>{button_text}</h1>
        </div>
      </button>
    </Link>
  );
};

export default ThemeButton3;
