import React from 'react';
import styles from './ButtonRow.module.css';
export const ButtonRow = () => {
  return (
    <div className={styles.tabs}>
      <div className={styles.max_container}>
        <div className={styles.blue_bg}></div>
        <div className={styles.white_bg}></div>
        <div className={styles.button_parent}>
          <div className={styles.rainbowGradient}>
            <div className={styles.innerSquare}>
              <h1 className={styles.h1}>Frontend Development</h1>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.max_container}>
        <div className={styles.blue_bg}></div>
        <div className={styles.white_bg}></div>
        <div className={styles.button_parent}>
          <div className={styles.rainbowGradient}>
            <div className={styles.innerSquare}>
              <h1 className={styles.h1}>Visual Design</h1>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.max_container}>
        <div className={styles.blue_bg}></div>
        <div className={styles.white_bg}></div>
        <div className={styles.button_parent}>
          <div className={styles.rainbowGradient}>
            <div className={styles.innerSquare}>
              <h1 className={styles.h1}>Animation</h1>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.max_container}>
        <div className={styles.blue_bg}></div>
        <div className={styles.white_bg}></div>
        <div className={styles.button_parent}>
          <div className={styles.rainbowGradient}>
            <div className={styles.innerSquare}>
              <h1 className={styles.h1}>Python Development</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
