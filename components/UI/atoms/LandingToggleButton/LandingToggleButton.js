import React from 'react';
import { useState } from 'react';
import styles from './LandingToggleButton.module.css';

const LandingToggleButton = ({ title }) => {
  return (
    <div>
      <max_container className={styles.max_container}>
        <blue_bg className={styles.blue_bg}></blue_bg>
        <white_bg className={styles.white_bg}></white_bg>
        <button_parent className={styles.button_parent}>
          <div className={styles.rainbowGradient}>
            <div className={styles.innerSquare}>
              <h1 className={styles.h1}>{title}</h1>
            </div>
          </div>
        </button_parent>
      </max_container>
    </div>
  );
};

export default LandingToggleButton;
