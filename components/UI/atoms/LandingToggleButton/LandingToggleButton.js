import React from 'react';
import { useState } from 'react';
import styles from './LandingToggleButton.module.css';

const LandingToggleButton = ({ title }) => {
  return (
    <div>
      <div className={styles.max_container}>
        <div className={styles.blue_bg}></div>
        <div className={styles.white_bg}></div>
        <div className={styles.button_parent}>
          <div className={styles.rainbowGradient}>
            <div className={styles.innerSquare}>
              <h1 className={styles.h1}>{title}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingToggleButton;
