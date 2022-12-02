import React from 'react';
import styles from './ButtonRowLanding.module.css';
export const ButtonRowLanding = () => {
  return (
    <div className={styles.tabs}>
      <max_container className={styles.max_container}>
        <div className={styles.blue_bg}></div>
        <div className={styles.white_bg}></div>
        <div className={styles.button_parent}>
          <div className={styles.rainbowGradient}>
            <div className={styles.innerSquare}>
              <h1 className={styles.h1}>Overview</h1>
            </div>
          </div>
        </div>
      </max_container>

      <max_container className={styles.max_container}>
        <div className={styles.blue_bg}></div>
        <div className={styles.white_bg}></div>
        <div className={styles.button_parent}>
          <div className={styles.rainbowGradient}>
            <div className={styles.innerSquare}>
              <h1 className={styles.h1}>Challenges</h1>
            </div>
          </div>
        </div>
      </max_container>

      <max_container className={styles.max_container}>
        <div className={styles.blue_bg}></div>
        <div className={styles.white_bg}></div>
        <div className={styles.button_parent}>
          <div className={styles.rainbowGradient}>
            <div className={styles.innerSquare}>
              <h1 className={styles.h1}>Github</h1>
            </div>
          </div>
        </div>
      </max_container>

      <max_container className={styles.max_container}>
        <div className={styles.blue_bg}></div>
        <div className={styles.white_bg}></div>
        <div className={styles.button_parent}>
          <div className={styles.rainbowGradient}>
            <div className={styles.innerSquare}>
              <h1 className={styles.h1}>Site</h1>
            </div>
          </div>
        </div>
      </max_container>
    </div>
  );
};
