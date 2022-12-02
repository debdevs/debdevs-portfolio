import React from 'react';
import { useState } from 'react';
import styles from './LandingToggleButton.module.css';

const LandingToggleButton = ({ title }) => {
  return (
    <div>
      <max_container className={styles.max_container}>
        <div className={styles.blue_bg}></div>
        <div className={styles.white_bg}></div>
        <div className={styles.button_parent}>
          <div className={styles.rainbowGradient}>
            <div className={styles.innerSquare}>
              <h1 className={styles.h1}>{title}</h1>
            </div>
          </div>
        </div>
      </max_container>
    </div>
  );
};

export default LandingToggleButton;
